import { useState } from 'react';
import { UserProgress } from '../types';
import { QuizClassic } from './QuizClassic';
import { QuizSpeed } from './QuizSpeed';
import { QuizSurvival } from './QuizSurvival';
import { sounds } from '../utils/sound';
import { Flame, Zap, Heart, ShieldAlert } from 'lucide-react';

interface QuizHubProps {
  progress: UserProgress;
  setProgress: (p: UserProgress) => void;
}

type QuizSubMode = 'classic' | 'speed' | 'survival';

export function QuizHub({ progress, setProgress }: QuizHubProps) {
  const [subMode, setSubMode] = useState<QuizSubMode>('classic');

  return (
    <div className="max-w-4xl mx-auto px-2 sm:px-4 py-2 sm:py-4">
      {/* Sub-mode switcher */}
      <div className="flex items-center justify-center mb-3 sm:mb-4">
        <div className="bg-slate-900/90 border border-white/10 p-1 rounded-xl flex items-center gap-1 shadow-md w-full max-w-md">
          <button
            id="quiz-tab-classic"
            onClick={() => {
              sounds.playClick();
              setSubMode('classic');
            }}
            className={`flex-1 justify-center px-2 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer whitespace-nowrap ${
              subMode === 'classic'
                ? 'bg-indigo-600 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span>Classique</span>
          </button>

          <button
            id="quiz-tab-speed"
            onClick={() => {
              sounds.playClick();
              setSubMode('speed');
            }}
            className={`flex-1 justify-center px-2 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer whitespace-nowrap ${
              subMode === 'speed'
                ? 'bg-amber-500 text-slate-950 shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
            <span>Chrono</span>
          </button>

          <button
            id="quiz-tab-survival"
            onClick={() => {
              sounds.playClick();
              setSubMode('survival');
            }}
            className={`flex-1 justify-center px-2 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 sm:gap-2 cursor-pointer whitespace-nowrap ${
              subMode === 'survival'
                ? 'bg-rose-500 text-white shadow-md'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current shrink-0" />
            <span>Survie</span>
          </button>
        </div>
      </div>

      {/* Render selected quiz sub-mode */}
      {subMode === 'classic' && (
        <QuizClassic progress={progress} setProgress={setProgress} />
      )}
      {subMode === 'speed' && (
        <QuizSpeed progress={progress} setProgress={setProgress} />
      )}
      {subMode === 'survival' && (
        <QuizSurvival progress={progress} setProgress={setProgress} />
      )}
    </div>
  );
}
