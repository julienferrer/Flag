import { useState, useEffect, useCallback, useRef } from 'react';
import { Country, DifficultyLevel, UserProgress } from '../types';
import { COUNTRIES_BY_DIFFICULTY, DIFFICULTY_CONFIG, ALL_COUNTRIES } from '../data/countries';
import { FlagImage } from './FlagImage';
import { recordAnswer, saveUserProgress } from '../utils/storage';
import { sounds } from '../utils/sound';
import { triggerCelebration, triggerConfetti } from '../utils/confetti';
import { 
  Heart, 
  RotateCcw, 
  ShieldAlert, 
  Trophy, 
  Flame, 
  Sparkles, 
  CheckCircle2, 
  XCircle,
  Play
} from 'lucide-react';

interface QuizSurvivalProps {
  progress: UserProgress;
  setProgress: (p: UserProgress) => void;
  onExit?: () => void;
}

export function QuizSurvival({ progress, setProgress }: QuizSurvivalProps) {
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'gameover'>('idle');
  const [lives, setLives] = useState(3);
  const [flagsRecognized, setFlagsRecognized] = useState(0);
  const [currentCountry, setCurrentCountry] = useState<Country | null>(null);
  const [options, setOptions] = useState<Country[]>([]);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);

  // Set of country IDs already tested in this survival run (guarantees NO repetitions)
  const usedCountryIdsRef = useRef<string[]>([]);

  // Compute current difficulty level based on flags recognized
  const getCurrentDifficulty = (count: number): DifficultyLevel => {
    if (count < 5) return 'facile';
    if (count < 12) return 'moyen';
    if (count < 20) return 'difficile';
    if (count < 30) return 'extreme';
    if (count < 42) return 'impossible';
    return 'godtier';
  };

  const nextQuestion = useCallback((count: number) => {
    const level = getCurrentDifficulty(count);
    const pool = COUNTRIES_BY_DIFFICULTY[level] || COUNTRIES_BY_DIFFICULTY.facile;

    let unvisited = pool.filter((c) => !usedCountryIdsRef.current.includes(c.id));
    if (unvisited.length === 0) {
      unvisited = ALL_COUNTRIES.filter((c) => !usedCountryIdsRef.current.includes(c.id));
      if (unvisited.length === 0) {
        usedCountryIdsRef.current = [];
        unvisited = pool;
      }
    }

    const target = unvisited[Math.floor(Math.random() * unvisited.length)];
    usedCountryIdsRef.current.push(target.id);

    // 3 distractors
    const distractors: Country[] = [];
    const sameLevel = pool.filter((c) => c.id !== target.id);
    while (distractors.length < 3 && sameLevel.length > 0) {
      const idx = Math.floor(Math.random() * sameLevel.length);
      distractors.push(sameLevel.splice(idx, 1)[0]);
    }
    const allRemaining = ALL_COUNTRIES.filter(
      (c) => c.id !== target.id && !distractors.some((d) => d.id === c.id)
    );
    while (distractors.length < 3 && allRemaining.length > 0) {
      const idx = Math.floor(Math.random() * allRemaining.length);
      distractors.push(allRemaining.splice(idx, 1)[0]);
    }

    const shuffled = [target, ...distractors].sort(() => Math.random() - 0.5);
    setCurrentCountry(target);
    setOptions(shuffled);
    setFeedback(null);
  }, []);

  const startGame = () => {
    sounds.playClick();
    usedCountryIdsRef.current = [];
    setLives(3);
    setFlagsRecognized(0);
    setGameState('playing');
    nextQuestion(0);
  };

  const handleSelect = (chosen: Country) => {
    if (gameState !== 'playing' || !currentCountry) return;

    const isCorrect = chosen.id === currentCountry.id;

    if (isCorrect) {
      sounds.playCorrect();
      const newScore = flagsRecognized + 1;
      setFlagsRecognized(newScore);
      setFeedback('correct');

      if (newScore % 5 === 0) {
        triggerConfetti();
      }

      // Record in progress
      const { progress: updated } = recordAnswer(progress, currentCountry.id, true);
      setProgress(updated);

      setTimeout(() => {
        nextQuestion(newScore);
      }, 250);
    } else {
      sounds.playIncorrect();
      const newLives = lives - 1;
      setLives(newLives);
      setFeedback('wrong');

      // Record error in progress
      const { progress: updated } = recordAnswer(progress, currentCountry.id, false);
      setProgress(updated);

      if (newLives <= 0) {
        // Game Over
        setTimeout(() => {
          setGameState('gameover');
          sounds.playFanfare();

          const newBest = Math.max(progress.survivalBestScore, flagsRecognized);
          if (flagsRecognized > progress.survivalBestScore) {
            triggerCelebration();
          }
          const finalProgress: UserProgress = {
            ...progress,
            survivalBestScore: newBest,
          };
          setProgress(finalProgress);
          saveUserProgress(finalProgress);
        }, 350);
      } else {
        setTimeout(() => {
          nextQuestion(flagsRecognized);
        }, 350);
      }
    }
  };

  const currentLevel = getCurrentDifficulty(flagsRecognized);
  const currentConfig = DIFFICULTY_CONFIG[currentLevel];

  // Idle Screen
  if (gameState === 'idle') {
    return (
      <div className="max-w-xl mx-auto px-4 py-12 text-center">
        <div className="w-20 h-20 mx-auto rounded-3xl bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-4xl mb-6 shadow-xl shadow-rose-500/10">
          ❤️‍🔥
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
          Mode Survie : 3 Vies
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
          Un mauvais choix = -1 vie ❤️. La difficulté augmente au fil de ta survie :
          <span className="block mt-2 font-bold text-slate-200">
            Facile → Moyen → Difficile → Extrême → Impossible → God Tier
          </span>
        </p>

        <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-4 mb-8 flex items-center justify-around max-w-xs mx-auto text-center">
          <div>
            <span className="text-[11px] font-bold text-slate-400 block uppercase">Vies</span>
            <span className="text-2xl font-black text-rose-400">❤️❤️❤️</span>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div>
            <span className="text-[11px] font-bold text-slate-400 block uppercase">Record</span>
            <span className="text-2xl font-black text-amber-400">
              {progress.survivalBestScore} drapeaux
            </span>
          </div>
        </div>

        <button
          id="survival-start-btn"
          onClick={startGame}
          className="px-8 py-4 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 text-white font-black text-lg shadow-xl shadow-rose-500/25 hover:scale-105 active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2.5"
        >
          <Play className="w-5 h-5 fill-white" />
          <span>COMMENCER LA SURVIE</span>
        </button>
      </div>
    );
  }

  // Game Over Screen
  if (gameState === 'gameover') {
    const isNewRecord = flagsRecognized > progress.survivalBestScore;

    return (
      <div className="max-w-xl mx-auto px-4 py-8 animate-in fade-in zoom-in-95 duration-300">
        <div className="bg-slate-900/90 border border-rose-500/30 rounded-3xl p-8 text-center shadow-2xl relative overflow-hidden">
          {isNewRecord && (
            <div className="absolute top-3 right-3 px-3 py-1 bg-amber-500 text-slate-950 text-xs font-black rounded-full shadow-lg flex items-center gap-1">
              <Trophy className="w-3.5 h-3.5" />
              <span>NOUVEAU RECORD !</span>
            </div>
          )}

          <div className="text-5xl mb-2">💔</div>
          <h2 className="text-4xl font-black text-rose-400 mb-2">GAME OVER</h2>
          <p className="text-2xl font-black text-white my-4">
            Tu as reconnu <span className="text-amber-400 text-3xl">{flagsRecognized}</span> {flagsRecognized > 1 ? 'drapeaux' : 'drapeau'}.
          </p>

          <p className="text-sm text-slate-400 mb-8 max-w-sm mx-auto">
            {flagsRecognized >= 25
              ? '🏆 Véritable maître des drapeaux ! Une performance d\'élite.'
              : flagsRecognized >= 15
              ? '👏 Très bon run ! Tu approches des niveaux impossibles.'
              : '💪 Belle tentative ! Réessaie pour gravir tous les échelons.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              id="survival-retry-btn"
              onClick={startGame}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-rose-500 to-pink-600 text-white font-black text-base shadow-xl shadow-rose-500/25 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-5 h-5" />
              <span>RÉESSAYER</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Active Screen
  return (
    <div className="max-w-xl mx-auto px-4 py-4">
      {/* HUD Header : Lives + Difficulty + Score */}
      <div className="flex items-center justify-between mb-6 bg-slate-900/90 p-4 rounded-2xl border border-white/10 shadow-lg">
        {/* Lives */}
        <div className="flex items-center gap-1">
          {[1, 2, 3].map((heartIndex) => (
            <Heart
              key={heartIndex}
              className={`w-6 h-6 transition-transform ${
                heartIndex <= lives
                  ? 'text-rose-500 fill-rose-500 scale-100'
                  : 'text-slate-700 fill-transparent scale-90'
              }`}
            />
          ))}
        </div>

        {/* Current Dynamic Difficulty */}
        <div className={`px-3 py-1 rounded-full text-xs font-black border flex items-center gap-1.5 ${currentConfig.badgeColor}`}>
          <span>{currentConfig.emoji}</span>
          <span>{currentConfig.label}</span>
        </div>

        {/* Score */}
        <div className="flex items-center gap-1.5 text-sm font-black text-amber-400">
          <Flame className="w-4 h-4 fill-amber-400" />
          <span>{flagsRecognized} drapeaux</span>
        </div>
      </div>

      {/* Flag Display */}
      {currentCountry && (
        <div
          className={`bg-slate-900/90 border rounded-2xl sm:rounded-3xl p-4 sm:p-8 flex flex-col items-center shadow-xl transition-colors ${
            feedback === 'correct'
              ? 'border-emerald-500'
              : feedback === 'wrong'
              ? 'border-rose-500 animate-shake'
              : 'border-white/10'
          }`}
        >
          <div className="mb-4 sm:mb-6 w-full flex justify-center">
            <FlagImage
              countryId={currentCountry.id}
              countryName={currentCountry.name}
              flagEmoji={currentCountry.flagEmoji}
              size="lg"
              className="rounded-xl shadow-2xl"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 w-full">
            {options.map((opt, idx) => (
              <button
                key={opt.id}
                id={`survival-opt-${idx}`}
                onClick={() => handleSelect(opt)}
                className="p-3.5 sm:p-4 min-h-[52px] rounded-xl bg-slate-800/90 hover:bg-slate-700 border border-white/5 font-bold text-base sm:text-lg text-slate-100 active:scale-95 transition-all text-center cursor-pointer shadow-sm"
              >
                {opt.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
