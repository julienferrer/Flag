import { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import { Country, DifficultyLevel, UserProgress } from '../types';
import { ALL_COUNTRIES, COUNTRIES_BY_DIFFICULTY, DIFFICULTY_CONFIG, DIFFICULTY_ORDER } from '../data/countries';
import { FlagImage } from './FlagImage';
import { recordAnswer, isLevelUnlocked } from '../utils/storage';
import { sounds } from '../utils/sound';
import { triggerConfetti } from '../utils/confetti';
import { 
  CheckCircle2, 
  XCircle, 
  ArrowRight, 
  Flame, 
  HelpCircle, 
  RotateCcw,
  Sparkles,
  Lock,
  Compass
} from 'lucide-react';

interface QuizClassicProps {
  progress: UserProgress;
  setProgress: (p: UserProgress) => void;
  onSelectAnotherMode?: () => void;
  initialLevel?: DifficultyLevel | 'all';
}

export function QuizClassic({
  progress,
  setProgress,
  initialLevel = 'facile',
}: QuizClassicProps) {
  const [selectedLevel, setSelectedLevel] = useState<DifficultyLevel | 'all'>(initialLevel);
  const [currentCountry, setCurrentCountry] = useState<Country | null>(null);
  const [options, setOptions] = useState<Country[]>([]);
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [recentAnswers, setRecentAnswers] = useState<boolean[]>([]);
  const [seenCount, setSeenCount] = useState<number>(1);

  // Tracks country IDs already shown in the current cycle (guarantees NO repetitions)
  const seenCountryIdsRef = useRef<string[]>([]);

  // Eligible pool of countries based on selected level
  const pool = useMemo(() => {
    if (selectedLevel === 'all') {
      // Include all countries from unlocked levels
      const unlockedLevels = DIFFICULTY_ORDER.filter((lvl) => isLevelUnlocked(lvl, progress));
      return ALL_COUNTRIES.filter((c) => unlockedLevels.includes(c.difficulty));
    }
    return COUNTRIES_BY_DIFFICULTY[selectedLevel] || COUNTRIES_BY_DIFFICULTY.facile;
  }, [selectedLevel, progress]);

  // Reset seen countries when level changes
  useEffect(() => {
    seenCountryIdsRef.current = [];
    setSeenCount(1);
  }, [selectedLevel]);

  // Generate 4 options for a target country (including smart distractors from confusions/same continent)
  const generateQuestion = useCallback(() => {
    if (pool.length === 0) return;

    // Remaining unvisited countries in current pool
    let unvisited = pool.filter((c) => !seenCountryIdsRef.current.includes(c.id));

    // If all countries in pool have been tested, start a fresh cycle
    if (unvisited.length === 0) {
      const lastId = seenCountryIdsRef.current[seenCountryIdsRef.current.length - 1];
      seenCountryIdsRef.current = [];
      // Prevent the exact last country from repeating immediately if pool > 1
      unvisited = pool.length > 1 ? pool.filter((c) => c.id !== lastId) : pool;
    }

    // Favor error-prone countries from review list if available in unvisited
    const reviewIds = Object.keys(progress.reviewList).filter(
      (id) => (progress.reviewList[id]?.errorCount || 0) > 0
    );
    const reviewPool = unvisited.filter((c) => reviewIds.includes(c.id));

    let target: Country;
    // 35% chance to prioritize an error country in unvisited pool
    if (reviewPool.length > 0 && Math.random() < 0.35) {
      target = reviewPool[Math.floor(Math.random() * reviewPool.length)];
    } else {
      target = unvisited[Math.floor(Math.random() * unvisited.length)];
    }

    // Mark country as seen so it CANNOT be chosen again in this cycle
    seenCountryIdsRef.current.push(target.id);
    setSeenCount(seenCountryIdsRef.current.length);

    // Pick 3 distractors
    const distractors: Country[] = [];

    // 1. Pick from common confusions if exists and in DB
    if (target.common_confusions && target.common_confusions.length > 0) {
      const confusionMatch = ALL_COUNTRIES.find(
        (c) => c.id === target.common_confusions[0]?.countryId
      );
      if (confusionMatch && confusionMatch.id !== target.id) {
        distractors.push(confusionMatch);
      }
    }

    // 2. Pick from same continent / difficulty
    const sameContinent = ALL_COUNTRIES.filter(
      (c) => c.continent === target.continent && c.id !== target.id && !distractors.some((d) => d.id === c.id)
    );
    while (distractors.length < 3 && sameContinent.length > 0) {
      const idx = Math.floor(Math.random() * sameContinent.length);
      distractors.push(sameContinent.splice(idx, 1)[0]);
    }

    // 3. Fallback from all countries
    const others = ALL_COUNTRIES.filter(
      (c) => c.id !== target.id && !distractors.some((d) => d.id === c.id)
    );
    while (distractors.length < 3 && others.length > 0) {
      const idx = Math.floor(Math.random() * others.length);
      distractors.push(others.splice(idx, 1)[0]);
    }

    // Shuffle options
    const allFour = [target, ...distractors].sort(() => Math.random() - 0.5);

    setCurrentCountry(target);
    setOptions(allFour);
    setSelectedOptionId(null);
    setHasAnswered(false);
  }, [pool, progress.reviewList]);

  // Initialize first question
  useEffect(() => {
    generateQuestion();
  }, [generateQuestion]);

  // Keyboard shortcut to advance to next question without needing autoFocus
  useEffect(() => {
    if (!hasAnswered) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        sounds.playClick();
        generateQuestion();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [hasAnswered, generateQuestion]);

  const handleSelectOption = (chosen: Country) => {
    if (hasAnswered || !currentCountry) return;

    // Defocus clicked element to prevent browser scrolling to focused element
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    setSelectedOptionId(chosen.id);
    setHasAnswered(true);

    const isCorrect = chosen.id === currentCountry.id;

    if (isCorrect) {
      sounds.playCorrect();
      if ((progress.streak + 1) % 5 === 0) {
        triggerConfetti();
      }
    } else {
      sounds.playIncorrect();
    }

    setRecentAnswers((prev) => [...prev.slice(-9), isCorrect]);

    // Update global user progress in storage
    const { progress: updatedProgress } = recordAnswer(
      progress,
      currentCountry.id,
      isCorrect
    );
    setProgress(updatedProgress);
  };

  if (!currentCountry) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin text-4xl">🌍</div>
      </div>
    );
  }

  const isCurrentCorrect = selectedOptionId === currentCountry.id;
  const currentConfusion = currentCountry.common_confusions?.find(
    (c) => c.countryId === selectedOptionId
  ) || currentCountry.common_confusions?.[0];

  return (
    <div className="max-w-2xl mx-auto px-2.5 sm:px-4 py-3 sm:py-6">
      {/* Level Selector Header */}
      <div className="flex items-center justify-between gap-2 mb-4 sm:mb-6 bg-slate-900/60 p-2 sm:p-3 rounded-xl sm:rounded-2xl border border-white/5">
        <div className="flex items-center gap-1.5 overflow-x-auto py-1 scrollbar-none max-w-full">
          {DIFFICULTY_ORDER.map((lvl) => {
            const config = DIFFICULTY_CONFIG[lvl];
            const unlocked = isLevelUnlocked(lvl, progress);
            const isSelected = selectedLevel === lvl;

            return (
              <button
                key={lvl}
                disabled={!unlocked}
                onClick={() => {
                  sounds.playClick();
                  setSelectedLevel(lvl);
                }}
                className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 whitespace-nowrap cursor-pointer ${
                  isSelected
                    ? `${config.badgeColor} border shadow-sm`
                    : unlocked
                    ? 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                    : 'text-slate-600 opacity-50 cursor-not-allowed'
                }`}
              >
                <span>{config.emoji}</span>
                <span className="hidden xs:inline">{config.label}</span>
                {!unlocked && <Lock className="w-3 h-3 text-slate-500" />}
              </button>
            );
          })}

          <button
            onClick={() => {
              sounds.playClick();
              setSelectedLevel('all');
            }}
            className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all flex items-center gap-1 whitespace-nowrap cursor-pointer ${
              selectedLevel === 'all'
                ? 'bg-indigo-600/30 text-indigo-300 border border-indigo-500/40'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
            }`}
          >
            <Compass className="w-3 h-3" />
            <span className="hidden xs:inline">Tous</span>
          </button>
        </div>

        {/* Current progress and streak pill */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <div className="text-[11px] font-bold text-slate-400 bg-slate-800/80 px-2 sm:px-2.5 py-1 rounded-full border border-white/5 whitespace-nowrap">
            <span className="hidden xs:inline">Drapeau </span><strong className="text-white">{seenCount}</strong>/{pool.length}
          </div>
          <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-black">
            <Flame className="w-3.5 h-3.5 fill-orange-400" />
            <span>{progress.streak}</span>
          </div>
        </div>
      </div>

      {/* Main Flag Card */}
      <div className="bg-slate-900/90 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-8 flex flex-col items-center shadow-2xl relative overflow-hidden">
        {/* Flag Display */}
        <div className="relative mb-4 sm:mb-6 w-full flex justify-center">
          <FlagImage
            countryId={currentCountry.id}
            countryName={currentCountry.name}
            flagEmoji={currentCountry.flagEmoji}
            size="xl"
            className="rounded-xl shadow-2xl border-2 border-white/20"
          />
        </div>

        {/* Question Title */}
        <div className="text-center mb-4 sm:mb-6">
          <span className="text-[10px] sm:text-xs font-extrabold uppercase tracking-widest text-indigo-400 mb-0.5 sm:mb-1 block">
            Question
          </span>
          <h2 className="text-xl sm:text-3xl font-black text-white">
            Quel est ce pays ?
          </h2>
        </div>

        {/* 4 Answer Options (stacked for readability on phone, 2 cols on tablet+) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 w-full mb-4 sm:mb-6">
          {options.map((opt, idx) => {
            const letter = ['A', 'B', 'C', 'D'][idx];
            const isTarget = opt.id === currentCountry.id;
            const isSelected = opt.id === selectedOptionId;

            let buttonStyle = 'bg-slate-800/90 hover:bg-slate-750 text-slate-100 border-white/5 hover:border-indigo-500/40';

            if (hasAnswered) {
              if (isTarget) {
                buttonStyle = 'bg-emerald-600/30 border-emerald-500 text-emerald-200 shadow-lg shadow-emerald-500/20 font-black';
              } else if (isSelected && !isTarget) {
                buttonStyle = 'bg-rose-600/30 border-rose-500 text-rose-200 font-bold opacity-85';
              } else {
                buttonStyle = 'bg-slate-800/30 border-white/5 text-slate-500 opacity-40';
              }
            }

            return (
              <button
                key={opt.id}
                id={`quiz-option-${idx}`}
                disabled={hasAnswered}
                onClick={() => handleSelectOption(opt)}
                className={`p-3.5 sm:p-4 min-h-[52px] rounded-xl border font-bold text-base sm:text-lg transition-colors flex items-center justify-between gap-3 text-left cursor-pointer ${buttonStyle}`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <span className="w-7 h-7 shrink-0 rounded-lg bg-black/40 flex items-center justify-center text-xs font-black text-slate-300">
                    {letter}
                  </span>
                  <span className="truncate">{opt.name}</span>
                </div>

                {hasAnswered && isTarget && (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                )}
                {hasAnswered && isSelected && !isTarget && (
                  <XCircle className="w-5 h-5 text-rose-400 shrink-0" />
                )}
              </button>
            );
          })}
        </div>

        {/* Feedback Section when Answered */}
        {hasAnswered && (
          <div className="w-full pt-3 sm:pt-4 border-t border-white/10 animate-in fade-in duration-200">
            {isCurrentCorrect ? (
              <div className="bg-emerald-950/40 border border-emerald-500/30 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 mb-3 sm:mb-4 text-center">
                <div className="flex items-center justify-center gap-2 text-emerald-400 font-black text-lg sm:text-xl mb-1">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400 shrink-0" />
                  <span>✓ CORRECT !</span>
                </div>
                <p className="text-sm text-slate-200">
                  Bravo ! C'est bien <strong>{currentCountry.name}</strong> ({currentCountry.capital}).
                </p>
                {currentCountry.mnemonic && (
                  <p className="text-xs sm:text-sm text-emerald-300/90 mt-2 italic bg-emerald-950/60 p-2.5 rounded-lg border border-emerald-500/20 text-left">
                    💡 {currentCountry.mnemonic}
                  </p>
                )}
              </div>
            ) : (
              <div className="bg-rose-950/40 border border-rose-500/30 rounded-xl sm:rounded-2xl p-3.5 sm:p-4 mb-3 sm:mb-4">
                <div className="flex items-center gap-2 text-rose-400 font-black text-lg sm:text-xl mb-1.5">
                  <XCircle className="w-5 h-5 sm:w-6 sm:h-6 text-rose-400 shrink-0" />
                  <span>✗ INCORRECT</span>
                </div>

                <p className="text-sm text-slate-200 mb-2.5">
                  La bonne réponse était : <strong className="text-emerald-400 text-base">{currentCountry.name}</strong> {currentCountry.flagEmoji}
                </p>

                {/* Confusion Explanation Box */}
                {currentConfusion && (
                  <div className="bg-slate-900/95 rounded-xl p-3 border border-amber-500/30 text-left">
                    <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 mb-1">
                      <HelpCircle className="w-4 h-4 shrink-0" />
                      <span>Piège fréquent :</span>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      Tu confonds souvent <strong>{currentCountry.name}</strong> {currentCountry.flagEmoji} et <strong>{currentConfusion.countryName}</strong> {currentConfusion.flagEmoji} ?
                    </p>
                    <p className="text-xs sm:text-sm text-amber-200/95 font-medium mt-1">
                      {currentConfusion.explanation}
                    </p>
                  </div>
                )}
              </div>
            )}

            {/* Next Question Button */}
            <button
              id="quiz-next-btn"
              onClick={() => {
                sounds.playClick();
                generateQuestion();
              }}
              className="w-full py-3.5 px-6 rounded-xl bg-gradient-to-r from-indigo-600 via-indigo-500 to-emerald-500 hover:from-indigo-500 hover:to-emerald-400 text-white font-extrabold text-base sm:text-lg shadow-lg shadow-indigo-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all"
            >
              <span>DRAPEAU SUIVANT</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>

      {/* Mini Recent Answers History */}
      {recentAnswers.length > 0 && (
        <div className="flex items-center justify-center gap-1.5 mt-4">
          <span className="text-[11px] text-slate-500 mr-1">Récents :</span>
          {recentAnswers.map((isOk, idx) => (
            <div
              key={idx}
              className={`w-2.5 h-2.5 rounded-full ${
                isOk ? 'bg-emerald-400' : 'bg-rose-500'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
