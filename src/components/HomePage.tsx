import { GameView, UserProgress } from '../types';
import { DIFFICULTY_CONFIG, DIFFICULTY_ORDER } from '../data/countries';
import { getLevelProgress } from '../utils/storage';
import { sounds } from '../utils/sound';
import { 
  Play, 
  BookOpen, 
  Trophy, 
  Grid3X3, 
  Sparkles, 
  Flame, 
  ChevronRight,
  Lock,
  Unlock
} from 'lucide-react';

interface HomePageProps {
  setCurrentView: (view: GameView) => void;
  progress: UserProgress;
  onSelectQuizLevel?: (level: string) => void;
}

export function HomePage({ setCurrentView, progress }: HomePageProps) {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex flex-col items-center justify-between overflow-hidden">
      {/* Ambient background glows (pure gradients, no letters, text or emojis) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-indigo-600/15 rounded-full blur-3xl" />
        <div className="absolute top-1/3 -left-32 w-80 h-80 bg-emerald-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 -right-32 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
      </div>

      {/* Hero Section */}
      <div className="relative z-10 max-w-5xl mx-auto px-3 sm:px-4 pt-6 pb-6 sm:pt-16 sm:pb-12 text-center flex flex-col items-center">
        {/* Eyebrow / Target Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-[11px] sm:text-sm font-semibold mb-4 sm:mb-6 shadow-sm max-w-full">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span className="truncate">195 pays · 6 niveaux · 1 objectif : tous les reconnaître</span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-7xl font-black tracking-tight mb-2 sm:mb-4">
          <span className="bg-gradient-to-br from-white via-slate-100 to-indigo-300 bg-clip-text text-transparent">
            FLAGMASTER
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-2xl text-slate-300 font-medium max-w-2xl mx-auto mb-6 sm:mb-10 leading-snug">
          « Connais-tu vraiment les drapeaux du monde ? »
        </p>

        {/* Primary Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-3 w-full justify-center max-w-md sm:max-w-lg mb-8 sm:mb-12">
          <button
            id="home-btn-learn"
            onClick={() => {
              sounds.playClick();
              setCurrentView('learning');
            }}
            className="w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-teal-500 to-indigo-600 text-white font-extrabold text-base sm:text-lg shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/35 active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer group"
          >
            <BookOpen className="w-5 h-5 group-hover:rotate-6 transition-transform" />
            <span>COMMENCER À APPRENDRE</span>
          </button>

          <button
            id="home-btn-quiz"
            onClick={() => {
              sounds.playClick();
              setCurrentView('quiz');
            }}
            className="w-full sm:w-auto px-6 sm:px-7 py-3.5 sm:py-4 rounded-xl bg-slate-900/90 hover:bg-slate-800 text-white font-bold text-base border border-slate-700/80 active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer shadow-md"
          >
            <Play className="w-5 h-5 text-indigo-400 fill-indigo-400" />
            <span>Mode Quiz</span>
          </button>
        </div>

        {/* Secondary Navigation Cards */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 w-full max-w-3xl">
          <button
            id="home-card-quiz"
            onClick={() => {
              sounds.playClick();
              setCurrentView('quiz');
            }}
            className="p-3 sm:p-4 rounded-xl bg-slate-900/70 hover:bg-slate-850 border border-white/5 hover:border-indigo-500/40 transition-all flex flex-col items-center gap-1.5 group cursor-pointer text-center"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Flame className="w-5 h-5 text-indigo-400" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-slate-200">Mode Quiz</span>
            <span className="text-[10px] sm:text-[11px] text-slate-400 line-clamp-1">Classique, Rapide, Survie</span>
          </button>

          <button
            id="home-card-learning"
            onClick={() => {
              sounds.playClick();
              setCurrentView('learning');
            }}
            className="p-3 sm:p-4 rounded-xl bg-slate-900/70 hover:bg-slate-850 border border-white/5 hover:border-emerald-500/40 transition-all flex flex-col items-center gap-1.5 group cursor-pointer text-center"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <BookOpen className="w-5 h-5 text-emerald-400" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-slate-200">Apprentissage</span>
            <span className="text-[10px] sm:text-[11px] text-slate-400 line-clamp-1">Fiches & pièges visuels</span>
          </button>

          <button
            id="home-card-progress"
            onClick={() => {
              sounds.playClick();
              setCurrentView('progress');
            }}
            className="p-3 sm:p-4 rounded-xl bg-slate-900/70 hover:bg-slate-850 border border-white/5 hover:border-amber-500/40 transition-all flex flex-col items-center gap-1.5 group cursor-pointer text-center"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-amber-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Trophy className="w-5 h-5 text-amber-400" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-slate-200">Ma progression</span>
            <span className="text-[10px] sm:text-[11px] text-slate-400 line-clamp-1">Niveaux & Succès</span>
          </button>

          <button
            id="home-card-collection"
            onClick={() => {
              sounds.playClick();
              setCurrentView('collection');
            }}
            className="p-3 sm:p-4 rounded-xl bg-slate-900/70 hover:bg-slate-850 border border-white/5 hover:border-purple-500/40 transition-all flex flex-col items-center gap-1.5 group cursor-pointer text-center"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Grid3X3 className="w-5 h-5 text-purple-400" />
            </div>
            <span className="text-xs sm:text-sm font-bold text-slate-200">Tous drapeaux</span>
            <span className="text-[10px] sm:text-[11px] text-slate-400 line-clamp-1">Album 195 pays</span>
          </button>
        </div>
      </div>

      {/* Six Levels Video Game Progression Preview */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-3 sm:px-4 pb-8 sm:pb-12">
        <div className="flex items-center justify-between mb-3 sm:mb-4">
          <h2 className="text-base sm:text-lg font-bold text-slate-200 flex items-center gap-2">
            <span>Progression des 6 Niveaux</span>
          </h2>
          <button
            onClick={() => {
              sounds.playClick();
              setCurrentView('progress');
            }}
            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 cursor-pointer"
          >
            <span>Voir détails</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 sm:gap-3">
          {DIFFICULTY_ORDER.map((lvl) => {
            const config = DIFFICULTY_CONFIG[lvl];
            const lvlStat = getLevelProgress(lvl, progress);

            return (
              <div
                key={lvl}
                className={`p-3.5 rounded-xl border transition-all ${
                  lvlStat.unlocked
                    ? 'bg-slate-900/60 border-white/10 hover:border-indigo-500/30'
                    : 'bg-slate-950/40 border-slate-800/50 opacity-60'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-lg">{config.emoji}</span>
                  {lvlStat.unlocked ? (
                    <Unlock className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Lock className="w-3.5 h-3.5 text-slate-500" />
                  )}
                </div>

                <div className="font-extrabold text-xs tracking-wider text-slate-200 mb-1">
                  {config.label}
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5">
                  <span>{lvlStat.masteredCount} / {config.count}</span>
                  <span className="font-semibold text-slate-300">{lvlStat.percent}%</span>
                </div>

                <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${config.accentColor} transition-all duration-500`}
                    style={{ width: `${lvlStat.percent}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
