import { DifficultyLevel, UserProgress } from '../types';
import { ALL_COUNTRIES, COUNTRIES_BY_DIFFICULTY, DIFFICULTY_ORDER } from '../data/countries';
import { ACHIEVEMENTS } from '../data/achievements';

const STORAGE_KEY = 'flagmaster_user_progress_v1';

export const DEFAULT_PROGRESS: UserProgress = {
  masteredCountryIds: [],
  discoveredCountryIds: [],
  reviewList: {},
  freeModeUnlocked: true,
  streak: 0,
  bestStreak: 0,
  totalPlayed: 0,
  totalCorrect: 0,
  speedModeBestScore: 0,
  survivalBestScore: 0,
  godTierCorrectCount: 0,
  unlockedAchievements: [],
};

export function loadUserProgress(): UserProgress {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return DEFAULT_PROGRESS;
    const parsed = JSON.parse(raw);
    return {
      ...DEFAULT_PROGRESS,
      ...parsed,
      freeModeUnlocked: true,
      reviewList: parsed.reviewList || {},
      masteredCountryIds: parsed.masteredCountryIds || [],
      discoveredCountryIds: parsed.discoveredCountryIds || [],
      unlockedAchievements: parsed.unlockedAchievements || [],
    };
  } catch (err) {
    console.error('Failed to load progress from localStorage:', err);
    return DEFAULT_PROGRESS;
  }
}

export function saveUserProgress(progress: UserProgress): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  } catch (err) {
    console.error('Failed to save progress to localStorage:', err);
  }
}

export function checkAchievements(progress: UserProgress): {
  updatedProgress: UserProgress;
  newlyUnlocked: string[];
} {
  const newlyUnlocked: string[] = [];
  const currentUnlocked = new Set(progress.unlockedAchievements);

  for (const ach of ACHIEVEMENTS) {
    if (!currentUnlocked.has(ach.id) && ach.isUnlocked(progress)) {
      currentUnlocked.add(ach.id);
      newlyUnlocked.push(ach.title);
    }
  }

  const updatedProgress = {
    ...progress,
    unlockedAchievements: Array.from(currentUnlocked),
  };

  if (newlyUnlocked.length > 0) {
    saveUserProgress(updatedProgress);
  }

  return { updatedProgress, newlyUnlocked };
}

export function recordAnswer(
  prevProgress: UserProgress,
  countryId: string,
  isCorrect: boolean
): { progress: UserProgress; newlyMastered: boolean; newlyUnlockedBadges: string[] } {
  let newlyMastered = false;
  const country = ALL_COUNTRIES.find((c) => c.id === countryId);

  const discovered = new Set(prevProgress.discoveredCountryIds);
  discovered.add(countryId);

  const mastered = new Set(prevProgress.masteredCountryIds);
  const reviewList = { ...prevProgress.reviewList };

  let currentStreak = isCorrect ? prevProgress.streak + 1 : 0;
  let bestStreak = Math.max(prevProgress.bestStreak, currentStreak);
  let totalPlayed = prevProgress.totalPlayed + 1;
  let totalCorrect = prevProgress.totalCorrect + (isCorrect ? 1 : 0);
  let godTierCount = prevProgress.godTierCorrectCount;

  if (isCorrect && country?.difficulty === 'godtier') {
    godTierCount++;
  }

  const prevReview = reviewList[countryId] || {
    errorCount: 0,
    lastFailedAt: 0,
    consecutiveCorrect: 0,
  };

  if (isCorrect) {
    const newConsecutive = prevReview.consecutiveCorrect + 1;
    reviewList[countryId] = {
      ...prevReview,
      consecutiveCorrect: newConsecutive,
      lastReviewedAt: Date.now(),
    };

    // If correct 2 times or was already known, mark as mastered
    if (!mastered.has(countryId) && newConsecutive >= 2) {
      mastered.add(countryId);
      newlyMastered = true;
    }
  } else {
    reviewList[countryId] = {
      errorCount: prevReview.errorCount + 1,
      lastFailedAt: Date.now(),
      consecutiveCorrect: 0,
    };
    // If it was mastered but failed, we might keep it or keep in review list
  }

  const interim: UserProgress = {
    ...prevProgress,
    discoveredCountryIds: Array.from(discovered),
    masteredCountryIds: Array.from(mastered),
    reviewList,
    streak: currentStreak,
    bestStreak,
    totalPlayed,
    totalCorrect,
    godTierCorrectCount: godTierCount,
  };

  const { updatedProgress, newlyUnlocked } = checkAchievements(interim);
  saveUserProgress(updatedProgress);

  return {
    progress: updatedProgress,
    newlyMastered,
    newlyUnlockedBadges: newlyUnlocked,
  };
}

export function isLevelUnlocked(_level: DifficultyLevel, _progress?: UserProgress): boolean {
  // Tous les niveaux de difficulté sont accessibles sans restriction
  return true;
}

export function getLevelProgress(level: DifficultyLevel, progress: UserProgress) {
  const countries = COUNTRIES_BY_DIFFICULTY[level];
  const masteredCount = countries.filter((c) =>
    progress.masteredCountryIds.includes(c.id)
  ).length;
  const percent = Math.round((masteredCount / countries.length) * 100);
  return {
    masteredCount,
    total: countries.length,
    percent,
    unlocked: isLevelUnlocked(level, progress),
  };
}

export function toggleMastery(countryId: string, currentProgress: UserProgress): UserProgress {
  const mastered = new Set(currentProgress.masteredCountryIds);
  const discovered = new Set(currentProgress.discoveredCountryIds);
  discovered.add(countryId);

  if (mastered.has(countryId)) {
    mastered.delete(countryId);
  } else {
    mastered.add(countryId);
  }

  const updated: UserProgress = {
    ...currentProgress,
    discoveredCountryIds: Array.from(discovered),
    masteredCountryIds: Array.from(mastered),
  };

  const { updatedProgress } = checkAchievements(updated);
  saveUserProgress(updatedProgress);
  return updatedProgress;
}
