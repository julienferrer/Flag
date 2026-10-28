import { useState, useMemo, useRef } from 'react';
import { Country, UserProgress } from '../types';
import { ALL_COUNTRIES } from '../data/countries';
import { FlagImage } from './FlagImage';
import { recordAnswer } from '../utils/storage';
import { sounds } from '../utils/sound';
import { triggerConfetti } from '../utils/confetti';
import { 
  RotateCcw, 
  CheckCircle2, 
  AlertTriangle, 
  Play, 
  Sparkles, 
  HelpCircle, 
  ArrowRight,
  ShieldCheck,
  Flame
} from 'lucide-react';

interface ReviewListProps {
  progress: UserProgress;
  setProgress: (p: UserProgress) => void;
}

export function ReviewList({ progress, setProgress }: ReviewListProps) {
  const [isQuizMode, setIsQuizMode] = useState(false);
  const [currentCountry, setCurrentCountry] = useState<Country | null>(null);
  const [options, setOptions] = useState<Country[]>([]);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const usedReviewIdsRef = useRef<string[]>([]);

  // List of countries with errors that are not yet mastered or need review
  const reviewItems = useMemo(() => {
    const list: { country: Country; errorCount: number; consecutiveCorrect: number }[] = [];
    for (const [id, stats] of Object.entries(progress.reviewList)) {
      if (stats.errorCount > 0 && stats.consecutiveCorrect < 2) {
        const country = ALL_COUNTRIES.find((c) => c.id === id);
        if (country) {
          list.push({
            country,
            errorCount: stats.errorCount,
            consecutiveCorrect: stats.consecutiveCorrect,
          });
        }
      }
    }
    // Sort by highest error count first
    return list.sort((a, b) => b.errorCount - a.errorCount);
  }, [progress.reviewList]);

  // Launch a targeted review quiz question without repeating countries
  const nextQuizQuestion = () => {
    if (reviewItems.length === 0) {
      setIsQuizMode(false);
      return;
    }

    let unvisited = reviewItems.filter((it) => !usedReviewIdsRef.current.includes(it.country.id));
    if (unvisited.length === 0) {
      usedReviewIdsRef.current = [];
      unvisited = reviewItems;
    }

    const item = unvisited[Math.floor(Math.random() * unvisited.length)];
    const target = item.country;
    usedReviewIdsRef.current.push(target.id);

    // 3 distractors
    const distractors: Country[] = [];
    if (target.common_confusions && target.common_confusions.length > 0) {
      const match = ALL_COUNTRIES.find((c) => c.id === target.common_confusions[0]?.countryId);
      if (match && match.id !== target.id) distractors.push(match);
    }
    const pool = ALL_COUNTRIES.filter(
      (c) => c.id !== target.id && !distractors.some((d) => d.id === c.id)
    );
    while (distractors.length < 3 && pool.length > 0) {
      const idx = Math.floor(Math.random() * pool.length);
      distractors.push(pool.splice(idx, 1)[0]);
    }

    const shuffled = [target, ...distractors].sort(() => Math.random() - 0.5);
    setCurrentCountry(target);
    setOptions(shuffled);
    setHasAnswered(false);
    setSelectedId(null);
  };

  const handleStartReviewQuiz = () => {
    sounds.playClick();
    usedReviewIdsRef.current = [];
    setIsQuizMode(true);
    nextQuizQuestion();
  };

  const handleSelectOption = (opt: Country) => {
    if (hasAnswered || !currentCountry) return;

    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }

    setSelectedId(opt.id);
    setHasAnswered(true);

    const isCorrect = opt.id === currentCountry.id;
    if (isCorrect) {
      sounds.playCorrect();
      triggerConfetti();
    } else {
      sounds.playIncorrect();
    }

    const { progress: updated } = recordAnswer(progress, currentCountry.id, isCorrect);
    setProgress(updated);
  };

  // If inside Active Review Quiz
  if (isQuizMode && currentCountry) {
    const isCorrect = selectedId === currentCountry.id;
    const confusion = currentCountry.common_confusions?.[0];

    return (
      <div className="max-w-2xl mx-auto px-2.5 sm:px-4 py-4 sm:py-8 animate-in fade-in duration-300">
        <div className="flex items-center justify-between mb-3 sm:mb-4 gap-2">
          <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-bold text-amber-400 bg-amber-500/10 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full border border-amber-500/20 truncate">
            <RotateCcw className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">Mini-Quiz « À réviser » · {reviewItems.length} restants</span>
          </div>
          <button
            onClick={() => setIsQuizMode(false)}
            className="text-xs font-semibold text-slate-400 hover:text-white cursor-pointer shrink-0 py-1"
          >
            Quitter
          </button>
        </div>

        <div className="bg-slate-900/90 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-8 flex flex-col items-center shadow-2xl">
          <div className="mb-4 sm:mb-6">
            <FlagImage
              countryId={currentCountry.id}
              countryName={currentCountry.name}
              flagEmoji={currentCountry.flagEmoji}
              size="xl"
              className="rounded-xl shadow-2xl border-2 border-white/20"
            />
          </div>

          <h2 className="text-xl sm:text-2xl font-black text-white mb-4 sm:mb-6 text-center">Quel est ce pays ?</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 w-full mb-4 sm:mb-6">
            {options.map((opt) => {
              const isTarget = opt.id === currentCountry.id;
              const isSelected = opt.id === selectedId;

              let style = 'bg-slate-800/80 text-slate-100 border-white/5 hover:border-amber-500/40';
              if (hasAnswered) {
                if (isTarget) {
                  style = 'bg-emerald-600/30 border-emerald-500 text-emerald-200 font-black';
                } else if (isSelected) {
                  style = 'bg-rose-600/30 border-rose-500 text-rose-200 font-bold';
                } else {
                  style = 'bg-slate-800/30 text-slate-500 opacity-40';
                }
              }

              return (
                <button
                  key={opt.id}
                  disabled={hasAnswered}
                  onClick={() => handleSelectOption(opt)}
                  className={`p-3.5 sm:p-4 min-h-[50px] rounded-xl border font-bold text-sm sm:text-base transition-all text-left flex items-center justify-between cursor-pointer active:scale-98 ${style}`}
                >
                  <span className="truncate pr-2">{opt.name}</span>
                  {hasAnswered && isTarget && <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />}
                </button>
              );
            })}
          </div>

          {hasAnswered && (
            <div className="w-full pt-4 border-t border-white/10 space-y-3 sm:space-y-4 animate-in fade-in duration-200">
              <div className={`p-3.5 sm:p-4 rounded-xl border ${isCorrect ? 'bg-emerald-950/40 border-emerald-500/30 text-emerald-300' : 'bg-rose-950/40 border-rose-500/30 text-rose-300'}`}>
                <p className="font-black text-sm sm:text-base mb-1">
                  {isCorrect ? '✓ Bien corrigé !' : `✗ Erreur : c\'est ${currentCountry.name}`}
                </p>
                {currentCountry.mnemonic && (
                  <p className="text-xs sm:text-sm text-slate-300 italic mt-1 leading-relaxed">
                    💡 {currentCountry.mnemonic}
                  </p>
                )}
                {confusion && (
                  <p className="text-xs sm:text-sm text-amber-300/90 mt-2 leading-relaxed">
                    ⚠️ {confusion.explanation}
                  </p>
                )}
              </div>

              <button
                onClick={() => {
                  sounds.playClick();
                  nextQuizQuestion();
                }}
                className="w-full py-3.5 min-h-[48px] rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-sm sm:text-base shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <span>DRAPEAU SUIVANT</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    );
  }

  // Regular List View
  return (
    <div className="max-w-4xl mx-auto px-2.5 sm:px-4 py-3 sm:py-6">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 bg-slate-900/80 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 shadow-md">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-wider mb-1">
            <RotateCcw className="w-4 h-4" />
            <span>Répétition espacée</span>
          </div>
          <h1 className="text-xl sm:text-3xl font-black text-white">Drapeaux à réviser</h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-xl leading-relaxed">
            L'algorithme enregistre tes erreurs pour te faire progresser plus vite.
            Répète chaque drapeau avec succès <strong>2 fois consécutives</strong> pour qu'il soit validé et qu'il quitte cette liste !
          </p>
        </div>

        {reviewItems.length > 0 && (
          <button
            id="start-review-quiz-btn"
            onClick={handleStartReviewQuiz}
            className="w-full sm:w-auto px-5 sm:px-6 py-3 min-h-[48px] rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-400 hover:to-orange-400 text-slate-950 font-black text-sm shadow-xl shadow-amber-500/20 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap active:scale-95"
          >
            <Play className="w-4 h-4 fill-slate-950" />
            <span>RÉVISER MAINTENANT ({reviewItems.length})</span>
          </button>
        )}
      </div>

      {/* Zero Errors State */}
      {reviewItems.length === 0 ? (
        <div className="bg-slate-900/60 border border-white/5 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-center max-w-lg mx-auto shadow-xl">
          <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto rounded-full bg-emerald-500/15 text-emerald-400 flex items-center justify-center text-3xl mb-4">
            <ShieldCheck className="w-7 h-7 sm:w-8 sm:h-8" />
          </div>
          <h3 className="text-lg sm:text-xl font-black text-white mb-2">Aucun drapeau à réviser !</h3>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Tu as maîtrisé tous les drapeaux testés jusqu'ici sans erreurs en suspens. Continue tes quiz pour explorer de nouveaux pays !
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3">
          {reviewItems.map(({ country, errorCount, consecutiveCorrect }) => (
            <div
              key={country.id}
              className="bg-slate-900/80 border border-white/5 hover:border-amber-500/30 rounded-xl sm:rounded-2xl p-3 sm:p-4 flex items-center gap-3 transition-all shadow-md"
            >
              <FlagImage
                countryId={country.id}
                countryName={country.name}
                flagEmoji={country.flagEmoji}
                size="md"
                className="shrink-0 rounded-lg shadow"
              />

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-1.5 mb-0.5">
                  <h4 className="font-black text-xs sm:text-sm text-white truncate">{country.name}</h4>
                  <span className="text-xs sm:text-sm">{country.flagEmoji}</span>
                </div>
                <p className="text-[11px] sm:text-xs text-slate-400 truncate">{country.capital} • {country.continent}</p>

                <div className="flex items-center gap-2 mt-1.5 sm:mt-2 text-[10px] sm:text-[11px]">
                  <span className="px-2 py-0.5 rounded-md bg-rose-500/20 text-rose-300 font-bold border border-rose-500/30">
                    {errorCount} {errorCount > 1 ? 'erreurs' : 'erreur'}
                  </span>
                  <span className="text-slate-400 font-medium">
                    Validé {consecutiveCorrect}/2
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
