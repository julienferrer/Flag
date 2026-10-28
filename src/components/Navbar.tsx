import { GameView, UserProgress } from '../types';
import { sounds } from '../utils/sound';
import { 
  Compass, 
  BookOpen, 
  Flame, 
  RotateCcw, 
  Grid3X3, 
  Trophy, 
  Volume2, 
  VolumeX, 
  Unlock,
  Sparkles,
  Star
} from 'lucide-react';
import { useState } from 'react';

interface NavbarProps {
  currentView: GameView;
  setCurrentView: (view: GameView) => void;
  progress: UserProgress;
  onToggleFreeMode: () => void;
}

export function Navbar({
  currentView,
  setCurrentView,
  progress,
  onToggleFreeMode,
}: NavbarProps) {
  const [soundEnabled, setSoundEnabled] = useState(sounds.enabled);

  const masteredCount = progress.masteredCountryIds.length;
  const reviewCount = Object.keys(progress.reviewList).filter(
    (id) => progress.reviewList[id]?.errorCount > 0 && !progress.masteredCountryIds.includes(id)
  ).length;

  const toggleSound = () => {
    sounds.enabled = !sounds.enabled;
    setSoundEnabled(sounds.enabled);
    if (sounds.enabled) sounds.playClick();
  };

  const navItems = [
    { id: 'home' as GameView, label: 'Accueil', icon: Compass },
    { id: 'quiz' as GameView, label: 'Quiz', icon: Flame },
    { id: 'learning' as GameView, label: 'Apprendre', icon: BookOpen },
    { 
      id: 'review' as GameView, 
      label: 'Réviser', 
      icon: RotateCcw,
      badge: reviewCount > 0 ? reviewCount : undefined
    },
    { id: 'collection' as GameView, label: 'Album', icon: Grid3X3 },
    { id: 'progress' as GameView, label: 'Stats', icon: Trophy },
  ];

  return (
    <>
      {/* Top Header */}
      <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-slate-950/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 h-14 sm:h-16 flex items-center justify-between gap-2 sm:gap-4">
          {/* Logo & Title */}
          <button
            id="nav-logo"
            onClick={() => {
              sounds.playClick();
              setCurrentView('home');
            }}
            className="flex items-center gap-2 sm:gap-2.5 group cursor-pointer focus:outline-hidden shrink-0"
          >
            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-500 to-emerald-400 p-0.5 shadow-md group-hover:scale-105 transition-transform">
              <div className="w-full h-full bg-slate-950 rounded-[7px] sm:rounded-[10px] flex items-center justify-center text-base sm:text-xl font-black">
                🌍
              </div>
            </div>
            <div className="flex flex-col text-left">
              <span className="font-black text-base sm:text-lg tracking-wider bg-gradient-to-r from-white via-slate-200 to-indigo-300 bg-clip-text text-transparent leading-none">
                FLAG<span className="text-indigo-400">MASTER</span>
              </span>
              <span className="text-[9px] sm:text-[10px] text-slate-400 font-medium tracking-tight mt-0.5 hidden xs:inline">
                195 Drapeaux du Monde
              </span>
            </div>
          </button>

          {/* Mini Progress Indicator for Mobile & Tablet */}
          <div className="flex lg:hidden items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-900/90 border border-white/10 text-xs font-bold text-slate-200">
            <Star className="w-3 h-3 text-amber-400 fill-amber-400 shrink-0" />
            <span className="text-[11px]">
              <strong className="text-emerald-400 font-black">{masteredCount}</strong>
              <span className="text-slate-400 font-medium">/195</span>
            </span>
          </div>

          {/* Desktop Full Progress Bar */}
          <div className="hidden lg:flex items-center gap-3 bg-slate-900/60 border border-white/5 rounded-full px-4 py-1.5 shadow-inner">
            <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-300">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>
                <strong className="text-emerald-400 font-bold">{masteredCount}</strong> / 195 maîtrisés
              </span>
            </div>
            <div className="w-24 h-2 bg-slate-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-emerald-500 to-indigo-500 transition-all duration-500"
                style={{ width: `${(masteredCount / 195) * 100}%` }}
              />
            </div>
            <span className="text-[11px] font-bold text-slate-400">
              {Math.round((masteredCount / 195) * 100)}%
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-${item.id}`}
                  onClick={() => {
                    sounds.playClick();
                    setCurrentView(item.id);
                  }}
                  className={`relative px-3 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
                    isActive
                      ? 'bg-indigo-600/20 text-indigo-300 border border-indigo-500/30'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-indigo-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                  {item.badge !== undefined && (
                    <span className="px-1.5 py-0.2 text-[10px] font-bold rounded-full bg-rose-500/20 text-rose-300 border border-rose-500/30">
                      {item.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action icons (Sound + Free mode) */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            {/* Free Mode Toggle button */}
            <button
              id="toggle-free-mode"
              onClick={() => {
                sounds.playClick();
                onToggleFreeMode();
              }}
              title={
                progress.freeModeUnlocked
                  ? 'Mode Libre ACTIF : tous les niveaux débloqués'
                  : 'Activer le Mode Libre (débloquer tous les niveaux)'
              }
              className={`px-2 sm:px-2.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 sm:gap-1.5 transition-all cursor-pointer border ${
                progress.freeModeUnlocked
                  ? 'bg-amber-500/20 border-amber-500/40 text-amber-300'
                  : 'bg-slate-900/60 border-slate-700/60 text-slate-400 hover:text-slate-300'
              }`}
            >
              <Unlock className="w-3.5 h-3.5 text-amber-400" />
              <span className="hidden sm:inline">
                {progress.freeModeUnlocked ? 'Mode Libre' : 'Progression'}
              </span>
            </button>

            {/* Sound Mute/Unmute */}
            <button
              id="toggle-sound"
              onClick={toggleSound}
              className="p-1.5 sm:p-2 rounded-lg text-slate-400 hover:text-slate-200 hover:bg-slate-900 transition-colors cursor-pointer"
              title={soundEnabled ? 'Couper le son' : 'Activer le son'}
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-emerald-400" />
              ) : (
                <VolumeX className="w-4 h-4 text-slate-500" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Fixed Mobile Bottom Navigation Bar (thumb-friendly, clear & readable) */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-xl border-t border-white/10 px-1 py-1.5 flex items-center justify-around shadow-2xl safe-area-bottom">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          return (
            <button
              key={item.id}
              onClick={() => {
                sounds.playClick();
                setCurrentView(item.id);
              }}
              className={`flex-1 flex flex-col items-center justify-center py-1 px-0.5 min-h-[48px] rounded-xl transition-all relative cursor-pointer active:scale-95 ${
                isActive
                  ? 'text-indigo-400 font-black bg-indigo-500/10'
                  : 'text-slate-400 hover:text-slate-200 font-medium'
              }`}
            >
              <div className="relative">
                <Icon className={`w-5 h-5 ${isActive ? 'text-indigo-400' : 'text-slate-400'}`} />
                {item.badge !== undefined && (
                  <span className="absolute -top-1 -right-2 min-w-4 h-4 px-1 rounded-full bg-rose-500 text-white text-[9px] font-black flex items-center justify-center border border-slate-950">
                    {item.badge}
                  </span>
                )}
              </div>
              <span className={`text-[10px] tracking-tight mt-0.5 leading-tight ${isActive ? 'text-indigo-300 font-bold' : 'text-slate-400'}`}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
}
