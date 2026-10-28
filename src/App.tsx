import { useState, useEffect } from 'react';
import { GameView, UserProgress } from './types';
import { loadUserProgress, saveUserProgress, checkAchievements } from './utils/storage';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { QuizHub } from './components/QuizHub';
import { LearningMode } from './components/LearningMode';
import { ReviewList } from './components/ReviewList';
import { CollectionAlbum } from './components/CollectionAlbum';
import { ProgressView } from './components/ProgressView';
import { triggerCelebration } from './utils/confetti';
import { sounds } from './utils/sound';
import { Trophy, X } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<GameView>('home');
  const [progress, setProgress] = useState<UserProgress>(() => loadUserProgress());
  const [achievementToast, setAchievementToast] = useState<string | null>(null);

  // Check achievements on initial load
  useEffect(() => {
    const { updatedProgress, newlyUnlocked } = checkAchievements(progress);
    if (newlyUnlocked.length > 0) {
      setProgress(updatedProgress);
      setAchievementToast(newlyUnlocked[0]);
      sounds.playFanfare();
      triggerCelebration();
    }
  }, []);

  const handleToggleFreeMode = () => {
    const updated: UserProgress = {
      ...progress,
      freeModeUnlocked: !progress.freeModeUnlocked,
    };
    setProgress(updated);
    saveUserProgress(updated);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Top Navigation */}
      <Navbar
        currentView={currentView}
        setCurrentView={setCurrentView}
        progress={progress}
        onToggleFreeMode={handleToggleFreeMode}
      />

      {/* Main View Display */}
      <main className="flex-1 w-full pb-24 md:pb-8">
        {currentView === 'home' && (
          <HomePage setCurrentView={setCurrentView} progress={progress} />
        )}

        {currentView === 'quiz' && (
          <QuizHub progress={progress} setProgress={setProgress} />
        )}

        {currentView === 'learning' && (
          <LearningMode progress={progress} setProgress={setProgress} />
        )}

        {currentView === 'review' && (
          <ReviewList progress={progress} setProgress={setProgress} />
        )}

        {currentView === 'collection' && (
          <CollectionAlbum progress={progress} setProgress={setProgress} />
        )}

        {currentView === 'progress' && (
          <ProgressView progress={progress} />
        )}
      </main>

      {/* Achievement Unlocked Toast Notification */}
      {achievementToast && (
        <div className="fixed bottom-20 md:bottom-8 right-4 md:right-8 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300">
          <div className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-slate-950 px-5 py-3.5 rounded-2xl shadow-2xl flex items-center gap-3 border border-amber-300">
            <div className="w-9 h-9 rounded-full bg-slate-950 text-amber-400 flex items-center justify-center shrink-0">
              <Trophy className="w-5 h-5 fill-amber-400" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider block opacity-90">
                🎉 Succès Débloqué !
              </span>
              <span className="text-sm font-black">{achievementToast}</span>
            </div>
            <button
              onClick={() => setAchievementToast(null)}
              className="p-1 rounded-md hover:bg-black/10 ml-2 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}

      {/* Global Footer */}
      <footer className="hidden md:block border-t border-white/5 bg-slate-950/60 py-4 text-center text-xs text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>
            <strong>FlagMaster</strong> · 195 États souverains (193 membres de l'ONU + Palestine + Vatican).
          </span>
          <span className="text-slate-400">
            Progression sauvegardée automatiquement dans ton navigateur.
          </span>
        </div>
      </footer>
    </div>
  );
}
