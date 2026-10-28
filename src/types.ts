export type DifficultyLevel = 'facile' | 'moyen' | 'difficile' | 'extreme' | 'impossible' | 'godtier';

export type Continent = 'Europe' | 'Afrique' | 'Asie' | 'Amérique du Nord' | 'Amérique du Sud' | 'Océanie';

export interface CommonConfusion {
  countryId: string;
  countryName: string;
  flagEmoji: string;
  explanation: string;
}

export interface Country {
  id: string; // ISO 3166-1 alpha-2 lowercase (e.g., 'fr', 'ki', 'tv')
  name: string; // French name
  flagEmoji: string;
  difficulty: DifficultyLevel;
  continent: Continent;
  capital: string;
  region: string;
  fun_fact: string;
  mnemonic: string;
  common_confusions: CommonConfusion[];
  isIsland?: boolean;
}

export interface CountryReviewStat {
  errorCount: number;
  lastFailedAt: number;
  consecutiveCorrect: number;
  lastReviewedAt?: number;
}

export interface UserProgress {
  masteredCountryIds: string[]; // Mastered flags (>=2 consecutive correct or manually marked)
  discoveredCountryIds: string[]; // Seen or correctly identified at least once
  reviewList: Record<string, CountryReviewStat>; // countryId -> stats
  freeModeUnlocked: boolean;
  streak: number;
  bestStreak: number;
  totalPlayed: number;
  totalCorrect: number;
  speedModeBestScore: number;
  survivalBestScore: number;
  godTierCorrectCount: number;
  unlockedAchievements: string[];
}

export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
  maxProgress?: number;
  currentProgress?: (p: UserProgress) => number;
  isUnlocked: (p: UserProgress) => boolean;
}

export type GameView = 
  | 'home' 
  | 'quiz' 
  | 'speed' 
  | 'survival' 
  | 'learning' 
  | 'review' 
  | 'collection' 
  | 'progress';
