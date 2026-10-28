import { UserProgress } from '../types';
import { DIFFICULTY_CONFIG, DIFFICULTY_ORDER } from '../data/countries';
import { ACHIEVEMENTS } from '../data/achievements';
import { getLevelProgress } from '../utils/storage';
import { 
  Trophy, 
  Flame, 
  Zap, 
  Heart, 
  CheckCircle2, 
  Lock, 
  Unlock, 
  Sparkles,
  BarChart3,
  Award
} from 'lucide-react';

interface ProgressViewProps {
  progress: UserProgress;
}

export function ProgressView({ progress }: ProgressViewProps) {
  const masteredTotal = progress.masteredCountryIds.length;
  const globalPercent = Math.round((masteredTotal / 195) * 100);

  return (
    <div className="max-w-5xl mx-auto px-2.5 sm:px-4 py-3 sm:py-6 space-y-4 sm:space-y-8">
      {/* Header & Global Progress Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-indigo-950/40 to-slate-900 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6 relative z-10">
          <div>
            <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-indigo-400 mb-1">
              <Trophy className="w-4 h-4 text-amber-400" />
              <span>Tableau de Bord & Profil</span>
            </div>
            <h1 className="text-2xl sm:text-4xl font-black text-white">Statistiques & Réalisations</h1>
            <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-lg">
              Suis ta maîtrise des 195 drapeaux, tes séries et tes succès débloqués au fil de tes parties.
            </p>
          </div>

          {/* Big Mastered Circle / Gauge */}
          <div className="flex items-center justify-between sm:justify-end gap-3 sm:gap-4 bg-slate-950/70 border border-white/10 p-3 sm:p-4 rounded-xl sm:rounded-2xl">
            <div className="text-left sm:text-right">
              <span className="text-[10px] sm:text-[11px] font-bold text-slate-400 uppercase block">Complétion</span>
              <span className="text-2xl sm:text-3xl font-black text-emerald-400">{globalPercent}%</span>
              <span className="text-xs text-slate-400 block">{masteredTotal} / 195 pays</span>
            </div>
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-slate-900 border-4 border-indigo-500/30 flex items-center justify-center text-xl sm:text-2xl font-black text-amber-400 shadow-inner shrink-0">
              🌍
            </div>
          </div>
        </div>

        {/* Global Progress Bar */}
        <div className="mt-4 sm:mt-6">
          <div className="flex items-center justify-between text-xs font-bold text-slate-300 mb-1.5">
            <span>Maîtrise planétaire</span>
            <span>{masteredTotal} / 195</span>
          </div>
          <div className="w-full h-2.5 sm:h-3 bg-slate-950 rounded-full overflow-hidden border border-white/5">
            <div
              className="h-full bg-gradient-to-r from-emerald-500 via-indigo-500 to-purple-500 transition-all duration-700"
              style={{ width: `${globalPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Primary Key Stats Cards Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5">
        <div className="bg-slate-900/80 border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 flex flex-col justify-between">
          <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5 mb-1.5 sm:mb-2">
            <Flame className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400 fill-orange-400 shrink-0" />
            Série actuelle
          </span>
          <span className="text-xl sm:text-3xl font-black text-orange-400">{progress.streak}</span>
          <span className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 sm:mt-1">D'affilée</span>
        </div>

        <div className="bg-slate-900/80 border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 flex flex-col justify-between">
          <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5 mb-1.5 sm:mb-2">
            <Trophy className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
            Meilleure série
          </span>
          <span className="text-xl sm:text-3xl font-black text-amber-400">{progress.bestStreak}</span>
          <span className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 sm:mt-1">Record</span>
        </div>

        <div className="bg-slate-900/80 border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 flex flex-col justify-between">
          <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5 mb-1.5 sm:mb-2">
            <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400 shrink-0" />
            Chrono 60s
          </span>
          <span className="text-xl sm:text-3xl font-black text-amber-300">{progress.speedModeBestScore}</span>
          <span className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 sm:mt-1">Score max</span>
        </div>

        <div className="bg-slate-900/80 border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 flex flex-col justify-between">
          <span className="text-xs font-bold text-slate-400 flex items-center gap-1.5 mb-1.5 sm:mb-2">
            <Heart className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-rose-500 fill-rose-500 shrink-0" />
            Survie
          </span>
          <span className="text-xl sm:text-3xl font-black text-rose-400">{progress.survivalBestScore}</span>
          <span className="text-[10px] sm:text-[11px] text-slate-500 mt-0.5 sm:mt-1">Sans défaite</span>
        </div>
      </div>

      {/* 6 Levels Mastery Breakdown Section */}
      <div className="bg-slate-900/80 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-xl">
        <div className="flex items-center gap-2 mb-4 sm:mb-6">
          <BarChart3 className="w-5 h-5 text-indigo-400" />
          <h2 className="text-lg sm:text-xl font-bold text-white">Drapeaux maîtrisés par niveau</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-4">
          {DIFFICULTY_ORDER.map((lvl) => {
            const config = DIFFICULTY_CONFIG[lvl];
            const stat = getLevelProgress(lvl, progress);

            return (
              <div
                key={lvl}
                className="bg-slate-950/60 border border-white/5 rounded-2xl p-4 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl">{config.emoji}</span>
                    <span className="font-extrabold text-sm text-slate-200">{config.label}</span>
                  </div>
                  {stat.unlocked ? (
                    <span className="text-xs text-emerald-400 font-bold flex items-center gap-1">
                      <Unlock className="w-3.5 h-3.5" />
                      Débloqué
                    </span>
                  ) : (
                    <span className="text-xs text-slate-500 font-bold flex items-center gap-1">
                      <Lock className="w-3.5 h-3.5" />
                      Verrouillé
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 mb-1.5 font-medium">
                  <span>{stat.masteredCount} sur {stat.total} pays</span>
                  <span className="font-bold text-slate-200">{stat.percent}%</span>
                </div>

                <div className="w-full h-2 bg-slate-900 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${config.accentColor} transition-all duration-500`}
                    style={{ width: `${stat.percent}%` }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Badges and Achievements Section */}
      <div className="bg-slate-900/80 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-xl">
        <div className="flex items-center justify-between mb-4 sm:mb-6">
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-amber-400" />
            <h2 className="text-lg sm:text-xl font-bold text-white">Succès & Badges</h2>
          </div>
          <span className="text-xs font-bold text-slate-400">
            {progress.unlockedAchievements.length} / {ACHIEVEMENTS.length}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3.5">
          {ACHIEVEMENTS.map((ach) => {
            const isUnlocked = progress.unlockedAchievements.includes(ach.id);
            const curProg = ach.currentProgress ? ach.currentProgress(progress) : isUnlocked ? 1 : 0;
            const maxProg = ach.maxProgress || 1;
            const percent = Math.min(100, Math.round((curProg / maxProg) * 100));

            return (
              <div
                key={ach.id}
                className={`p-4 rounded-2xl border transition-all flex items-start gap-3.5 ${
                  isUnlocked
                    ? 'bg-amber-500/10 border-amber-500/30 shadow-md shadow-amber-500/5'
                    : 'bg-slate-950/40 border-white/5 opacity-60'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl shrink-0 shadow-inner ${
                    isUnlocked ? 'bg-amber-500/20 text-amber-300' : 'bg-slate-900 text-slate-600'
                  }`}
                >
                  {ach.icon}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-0.5">
                    <h4 className="font-extrabold text-sm text-white truncate">{ach.title}</h4>
                    {isUnlocked && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    )}
                  </div>
                  <p className="text-xs text-slate-400 leading-snug mb-2">{ach.description}</p>

                  <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold mb-1">
                    <span>Progression</span>
                    <span>
                      {curProg} / {maxProg}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-900 rounded-full overflow-hidden">
                    <div
                      className={`h-full transition-all duration-500 ${
                        isUnlocked ? 'bg-amber-400' : 'bg-slate-700'
                      }`}
                      style={{ width: `${percent}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
