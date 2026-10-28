import { useState, useEffect, useRef, useCallback } from 'react';
import { Country, UserProgress } from '../types';
import { ALL_COUNTRIES } from '../data/countries';
import { FlagImage } from './FlagImage';
import { recordAnswer, saveUserProgress } from '../utils/storage';
import { sounds } from '../utils/sound';
import { triggerCelebration, triggerConfetti } from '../utils/confetti';
import { 
  Timer, 
  Flame, 
  RotateCcw, 
  Trophy, 
  Zap, 
  CheckCircle2, 
  XCircle, 
  Clock, 
  Percent,
  Play
} from 'lucide-react';

interface QuizSpeedProps {
  progress: UserProgress;
  setProgress: (p: UserProgress) => void;
  onExit?: () => void;
}

export function QuizSpeed({ progress, setProgress }: QuizSpeedProps) {
  const [gameState, setGameState] = useState<'idle' | 'playing' | 'gameover'>('idle');
  const [timeLeft, setTimeLeft] = useState(60);
  const [score, setScore] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [currentCountry, setCurrentCountry] = useState<Country | null>(null);
  const [options, setOptions] = useState<Country[]>([]);
  const [feedback, setFeedback] = useState<'correct' | 'wrong' | null>(null);

  const startTimeRef = useRef<number>(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const usedCountryIdsRef = useRef<string[]>([]);

  // Generate next fast question with zero repeats
  const nextQuestion = useCallback(() => {
    let unvisited = ALL_COUNTRIES.filter((c) => !usedCountryIdsRef.current.includes(c.id));
    if (unvisited.length === 0) {
      usedCountryIdsRef.current = [];
      unvisited = ALL_COUNTRIES;
    }

    const target = unvisited[Math.floor(Math.random() * unvisited.length)];
    usedCountryIdsRef.current.push(target.id);

    const distractors: Country[] = [];
    const sameContinent = ALL_COUNTRIES.filter(
      (c) => c.continent === target.continent && c.id !== target.id
    );

    while (distractors.length < 3 && sameContinent.length > 0) {
      const idx = Math.floor(Math.random() * sameContinent.length);
      distractors.push(sameContinent.splice(idx, 1)[0]);
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
    setFeedback(null);
  }, []);

  const startGame = () => {
    sounds.playClick();
    usedCountryIdsRef.current = [];
    setGameState('playing');
    setTimeLeft(60);
    setScore(0);
    setMistakes(0);
    startTimeRef.current = Date.now();
    nextQuestion();
  };

  // Timer loop
  useEffect(() => {
    if (gameState === 'playing') {
      timerRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            clearInterval(timerRef.current!);
            return 0;
          }
          if (prev <= 6) {
            sounds.playTick();
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [gameState]);

  // Handle Game Over
  useEffect(() => {
    if (timeLeft === 0 && gameState === 'playing') {
      setGameState('gameover');
      sounds.playFanfare();

      // Check if new best score
      const newBest = Math.max(progress.speedModeBestScore, score);
      if (score > progress.speedModeBestScore) {
        triggerCelebration();
      }
      const updated: UserProgress = {
        ...progress,
        speedModeBestScore: newBest,
      };
      setProgress(updated);
      saveUserProgress(updated);
    }
  }, [timeLeft, gameState, score, progress, setProgress]);

  const handleSelect = (chosen: Country) => {
    if (gameState !== 'playing' || !currentCountry) return;

    const isCorrect = chosen.id === currentCountry.id;
    if (isCorrect) {
      sounds.playCorrect();
      setScore((s) => s + 1);
      setFeedback('correct');
    } else {
      sounds.playIncorrect();
      setMistakes((m) => m + 1);
      setFeedback('wrong');
    }

    // Save answer into user progress
    const { progress: updatedProgress } = recordAnswer(
      progress,
      currentCountry.id,
      isCorrect
    );
    setProgress(updatedProgress);

    // Fast transition to next flag
    setTimeout(() => {
      nextQuestion();
    }, 180);
  };

  // Idle Start Screen
  if (gameState === 'idle') {
    return (
      <div className="max-w-xl mx-auto px-4 py-12 text-center">
        <div className="w-20 h-20 mx-auto rounded-3xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-4xl mb-6 shadow-xl shadow-amber-500/10">
          ⚡
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
          Mode Rapide : 60 Secondes
        </h2>
        <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
          Reconnais un maximum de drapeaux avant la fin du compte à rebours. Chaque bonne réponse rapporte <strong>1 point</strong> !
        </p>

        <div className="bg-slate-900/80 border border-white/10 rounded-2xl p-4 mb-8 flex items-center justify-around max-w-xs mx-auto text-center">
          <div>
            <span className="text-[11px] font-bold text-slate-400 block uppercase">Durée</span>
            <span className="text-2xl font-black text-amber-400">60s</span>
          </div>
          <div className="w-px h-8 bg-white/10" />
          <div>
            <span className="text-[11px] font-bold text-slate-400 block uppercase">Record</span>
            <span className="text-2xl font-black text-emerald-400">
              {progress.speedModeBestScore} pts
            </span>
          </div>
        </div>

        <button
          id="speed-start-btn"
          onClick={startGame}
          className="px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-lg shadow-xl shadow-amber-500/25 hover:scale-105 active:scale-95 transition-all cursor-pointer inline-flex items-center gap-2.5"
        >
          <Play className="w-5 h-5 fill-slate-950" />
          <span>LANCER LE CHRONO (60s)</span>
        </button>
      </div>
    );
  }

  // Results Screen
  if (gameState === 'gameover') {
    const totalAttempted = score + mistakes;
    const accuracy = totalAttempted > 0 ? Math.round((score / totalAttempted) * 100) : 0;
    const avgTime = score > 0 ? (60 / score).toFixed(1) : '-';
    const isNewRecord = score > progress.speedModeBestScore;

    return (
      <div className="max-w-xl mx-auto px-4 py-8 animate-in fade-in zoom-in-95 duration-300">
        <div className="bg-slate-900/90 border border-white/10 rounded-3xl p-8 text-center shadow-2xl relative overflow-hidden">
          {isNewRecord && (
            <div className="absolute top-3 right-3 px-3 py-1 bg-amber-500 text-slate-950 text-xs font-black rounded-full shadow-lg flex items-center gap-1">
              <Trophy className="w-3.5 h-3.5" />
              <span>NOUVEAU RECORD !</span>
            </div>
          )}

          <div className="text-5xl mb-2">⏱️</div>
          <h2 className="text-3xl font-black text-white mb-2">TEMPS ÉCOULÉ !</h2>
          <div className="text-5xl font-black text-amber-400 my-4 tracking-tight">
            {score} <span className="text-xl text-slate-400 font-semibold">/ {totalAttempted}</span>
          </div>

          <p className="text-sm text-slate-300 mb-8">
            {score >= 20 ? '🔥 Performance phénoménale !' : score >= 12 ? '👏 Beau score, continue comme ça !' : '💪 Bon entraînement, réessaie pour battre ton score !'}
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 mb-8 text-left">
            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-white/5">
              <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1.5 mb-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                Bonnes réponses
              </span>
              <span className="text-xl font-black text-emerald-400">{score}</span>
            </div>

            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-white/5">
              <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1.5 mb-1">
                <XCircle className="w-3.5 h-3.5 text-rose-400" />
                Mauvaises réponses
              </span>
              <span className="text-xl font-black text-rose-400">{mistakes}</span>
            </div>

            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-white/5">
              <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1.5 mb-1">
                <Percent className="w-3.5 h-3.5 text-indigo-400" />
                Précision
              </span>
              <span className="text-xl font-black text-indigo-300">{accuracy}%</span>
            </div>

            <div className="bg-slate-950/60 p-3.5 rounded-xl border border-white/5">
              <span className="text-[11px] font-bold text-slate-400 flex items-center gap-1.5 mb-1">
                <Clock className="w-3.5 h-3.5 text-amber-400" />
                Temps moyen
              </span>
              <span className="text-xl font-black text-amber-300">{avgTime}s / drapeau</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <button
              id="speed-retry-btn"
              onClick={startGame}
              className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950 font-black text-sm shadow-lg shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
              <span>RÉESSAYER (60s)</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Active Playing Screen
  return (
    <div className="max-w-xl mx-auto px-4 py-4">
      {/* HUD Header : SCORE & TEMPS */}
      <div className="flex items-center justify-between mb-6 bg-slate-900/90 p-4 rounded-2xl border border-white/10 shadow-lg">
        <div className="flex items-center gap-2">
          <Zap className="w-5 h-5 text-amber-400" />
          <span className="text-xs sm:text-sm font-black tracking-wider text-slate-400">
            SCORE : <strong className="text-amber-400 text-xl font-black">{score}</strong>
          </span>
        </div>

        <div className="flex items-center gap-2">
          <Timer className={`w-5 h-5 ${timeLeft <= 10 ? 'text-rose-500 animate-pulse' : 'text-slate-400'}`} />
          <span className={`text-xs sm:text-sm font-black tracking-wider ${timeLeft <= 10 ? 'text-rose-400' : 'text-slate-300'}`}>
            TEMPS : <strong className={`text-xl font-black ${timeLeft <= 10 ? 'text-rose-400' : 'text-white'}`}>{timeLeft}s</strong>
          </span>
        </div>
      </div>

      {/* Progress Bar Countdown */}
      <div className="w-full h-2 bg-slate-900 rounded-full mb-6 overflow-hidden border border-white/5">
        <div
          className={`h-full transition-all duration-1000 ${
            timeLeft <= 10 ? 'bg-rose-500' : 'bg-gradient-to-r from-amber-400 to-orange-500'
          }`}
          style={{ width: `${(timeLeft / 60) * 100}%` }}
        />
      </div>

      {/* Flag Display */}
      {currentCountry && (
        <div className={`bg-slate-900/90 border rounded-2xl sm:rounded-3xl p-4 sm:p-8 flex flex-col items-center shadow-xl transition-colors ${
          feedback === 'correct' ? 'border-emerald-500/80' : feedback === 'wrong' ? 'border-rose-500/80' : 'border-white/10'
        }`}>
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
                id={`speed-opt-${idx}`}
                onClick={() => handleSelect(opt)}
                className="p-3.5 sm:p-4 min-h-[52px] rounded-xl bg-slate-800/90 hover:bg-indigo-600 hover:text-white border border-white/5 font-bold text-base sm:text-lg text-slate-100 active:scale-95 transition-all text-center cursor-pointer shadow-sm"
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
