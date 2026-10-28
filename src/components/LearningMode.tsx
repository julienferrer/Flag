import { useState, useMemo } from 'react';
import { Country, DifficultyLevel, UserProgress } from '../types';
import { ALL_COUNTRIES, COUNTRIES_BY_DIFFICULTY, DIFFICULTY_CONFIG, DIFFICULTY_ORDER } from '../data/countries';
import { FlagImage } from './FlagImage';
import { toggleMastery } from '../utils/storage';
import { sounds } from '../utils/sound';
import { 
  ChevronLeft, 
  ChevronRight, 
  Check, 
  Eye, 
  EyeOff, 
  HelpCircle, 
  Sparkles, 
  MapPin, 
  Globe, 
  BookOpen, 
  Lightbulb,
  Search,
  Filter
} from 'lucide-react';

interface LearningModeProps {
  progress: UserProgress;
  setProgress: (p: UserProgress) => void;
}

export function LearningMode({ progress, setProgress }: LearningModeProps) {
  const [selectedLevel, setSelectedLevel] = useState<DifficultyLevel | 'all'>('facile');
  const [selectedContinent, setSelectedContinent] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isRevealed, setIsRevealed] = useState(false);

  const continents = ['Europe', 'Afrique', 'Asie', 'Amérique du Nord', 'Amérique du Sud', 'Océanie'];

  // Filtered country list
  const filteredList = useMemo(() => {
    return ALL_COUNTRIES.filter((c) => {
      const matchLevel = selectedLevel === 'all' || c.difficulty === selectedLevel;
      const matchContinent = selectedContinent === 'all' || c.continent === selectedContinent;
      const matchSearch =
        !searchQuery ||
        c.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.capital.toLowerCase().includes(searchQuery.toLowerCase());
      return matchLevel && matchContinent && matchSearch;
    });
  }, [selectedLevel, selectedContinent, searchQuery]);

  // Ensure index is within range
  const safeIndex = Math.min(currentIndex, Math.max(0, filteredList.length - 1));
  const currentCountry: Country | undefined = filteredList[safeIndex];

  const isMastered = currentCountry
    ? progress.masteredCountryIds.includes(currentCountry.id)
    : false;

  const handleToggleMastered = () => {
    if (!currentCountry) return;
    sounds.playClick();
    const updated = toggleMastery(currentCountry.id, progress);
    setProgress(updated);
  };

  const handleNext = () => {
    sounds.playClick();
    setIsRevealed(false);
    if (currentIndex < filteredList.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const handlePrev = () => {
    sounds.playClick();
    setIsRevealed(false);
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
    } else {
      setCurrentIndex(Math.max(0, filteredList.length - 1));
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-2.5 sm:px-4 py-3 sm:py-6">
      {/* Top Filters Bar */}
      <div className="bg-slate-900/80 border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-4 sm:mb-6 shadow-md">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3 mb-2.5 sm:mb-3">
          {/* Difficulty Levels */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto py-1 scrollbar-none">
            <button
              onClick={() => {
                sounds.playClick();
                setSelectedLevel('all');
                setCurrentIndex(0);
              }}
              className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                selectedLevel === 'all'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              Tous ({ALL_COUNTRIES.length})
            </button>
            {DIFFICULTY_ORDER.map((lvl) => {
              const config = DIFFICULTY_CONFIG[lvl];
              const isSel = selectedLevel === lvl;
              return (
                <button
                  key={lvl}
                  onClick={() => {
                    sounds.playClick();
                    setSelectedLevel(lvl);
                    setCurrentIndex(0);
                  }}
                  className={`px-2.5 sm:px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                    isSel
                      ? `${config.badgeColor} border shadow-sm`
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
                  }`}
                >
                  <span>{config.emoji}</span> <span className="hidden xs:inline">{config.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative w-full sm:w-60">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setCurrentIndex(0);
              }}
              placeholder="Chercher un pays, capitale..."
              className="w-full bg-slate-950/70 border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>
        </div>

        {/* Continents filter */}
        <div className="flex items-center gap-1.5 overflow-x-auto pt-2 border-t border-white/5 scrollbar-none text-xs">
          <span className="text-slate-500 font-bold mr-1 shrink-0">Continent:</span>
          <button
            onClick={() => {
              sounds.playClick();
              setSelectedContinent('all');
              setCurrentIndex(0);
            }}
            className={`px-2.5 py-1 rounded-md transition-all cursor-pointer font-medium shrink-0 ${
              selectedContinent === 'all'
                ? 'bg-slate-800 text-white'
                : 'text-slate-400 hover:text-slate-300'
            }`}
          >
            Tous
          </button>
          {continents.map((cont) => (
            <button
              key={cont}
              onClick={() => {
                sounds.playClick();
                setSelectedContinent(cont);
                setCurrentIndex(0);
              }}
              className={`px-2.5 py-1 rounded-md transition-all cursor-pointer font-medium whitespace-nowrap shrink-0 ${
                selectedContinent === cont
                  ? 'bg-slate-800 text-indigo-300 font-bold'
                  : 'text-slate-400 hover:text-slate-300'
              }`}
            >
              {cont}
            </button>
          ))}
        </div>
      </div>

      {/* Main Flashcard View */}
      {currentCountry ? (
        <div className="bg-slate-900/90 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-2xl relative">
          {/* Top Card Controls */}
          <div className="flex items-center justify-between gap-3 mb-4 sm:mb-6">
            {/* Index Counter */}
            <span className="text-xs font-bold text-slate-400">
              Drapeau <strong className="text-white">{safeIndex + 1}</strong> / {filteredList.length}
            </span>

            {/* Mastery Toggle Button */}
            <button
              id="flashcard-toggle-mastery"
              onClick={handleToggleMastered}
              className={`px-3 py-1.5 rounded-full text-xs font-extrabold flex items-center gap-1.5 transition-all cursor-pointer border ${
                isMastered
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                  : 'bg-slate-800/80 text-slate-400 border-white/10 hover:border-slate-600'
              }`}
            >
              <Check className={`w-3.5 h-3.5 ${isMastered ? 'text-emerald-400' : 'text-slate-500'}`} />
              <span>{isMastered ? 'Maîtrisé ✓' : 'À maîtriser'}</span>
            </button>
          </div>

          {/* Big Flag Display */}
          <div className="flex flex-col items-center justify-center mb-4 sm:mb-6">
            <FlagImage
              countryId={currentCountry.id}
              countryName={currentCountry.name}
              flagEmoji={currentCountry.flagEmoji}
              size="xl"
              className="rounded-xl sm:rounded-2xl shadow-2xl border-2 border-white/15"
            />
          </div>

          {/* Flashcard Memory Mode Toggle (Reveal / Hide answer) */}
          <div className="text-center mb-4 sm:mb-6">
            {!isRevealed ? (
              <button
                id="flashcard-reveal-btn"
                onClick={() => {
                  sounds.playClick();
                  setIsRevealed(true);
                }}
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-200 border border-indigo-500/40 text-sm sm:text-base font-bold inline-flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all active:scale-98"
              >
                <Eye className="w-4 h-4" />
                <span>Révéler le pays et les astuces</span>
              </button>
            ) : (
              <button
                onClick={() => {
                  sounds.playClick();
                  setIsRevealed(false);
                }}
                className="text-xs text-slate-400 hover:text-slate-200 inline-flex items-center gap-1 cursor-pointer py-1"
              >
                <EyeOff className="w-3.5 h-3.5" />
                <span>Masquer les détails (Mode Mémoire)</span>
              </button>
            )}
          </div>

          {/* Revealed Country Details */}
          {isRevealed && (
            <div className="space-y-3 sm:space-y-4 animate-in fade-in duration-300 border-t border-white/10 pt-4 sm:pt-6 text-left">
              {/* Header Country & Capital */}
              <div className="text-center mb-3 sm:mb-4">
                <div className="flex items-center justify-center gap-2 mb-1">
                  <h2 className="text-2xl sm:text-3xl font-black text-white">{currentCountry.name}</h2>
                  <span className="text-2xl">{currentCountry.flagEmoji}</span>
                </div>
                <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs text-slate-400 font-medium">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                    Capitale : <strong className="text-slate-200 font-semibold">{currentCountry.capital}</strong>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Globe className="w-3.5 h-3.5 text-emerald-400" />
                    {currentCountry.continent} ({currentCountry.region})
                  </span>
                </div>
              </div>

              {/* Mnemonic Hint */}
              {currentCountry.mnemonic && (
                <div className="bg-indigo-950/30 border border-indigo-500/30 rounded-xl sm:rounded-2xl p-3.5 sm:p-4">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-indigo-300 mb-1">
                    <Lightbulb className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>Moyen mnémotechnique & Description :</span>
                  </div>
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
                    {currentCountry.mnemonic}
                  </p>
                </div>
              )}

              {/* Common Confusions & Pitfalls */}
              {currentCountry.common_confusions && currentCountry.common_confusions.length > 0 && (
                <div className="bg-amber-950/20 border border-amber-500/30 rounded-xl sm:rounded-2xl p-3.5 sm:p-4">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-amber-400 mb-2">
                    <HelpCircle className="w-4 h-4 shrink-0" />
                    <span>Pièges visuels à éviter :</span>
                  </div>
                  <div className="space-y-2">
                    {currentCountry.common_confusions.map((conf, idx) => (
                      <div key={idx} className="text-xs sm:text-sm text-slate-300 leading-relaxed flex items-start gap-2">
                        <span className="text-base shrink-0">{conf.flagEmoji}</span>
                        <div>
                          <strong className="text-amber-300">{conf.countryName} :</strong>{' '}
                          {conf.explanation}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Fun Fact */}
              {currentCountry.fun_fact && (
                <div className="bg-slate-950/60 border border-white/5 rounded-xl sm:rounded-2xl p-3.5 sm:p-4">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-slate-400 mb-1">
                    <Sparkles className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Anecdote :</span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed italic">
                    « {currentCountry.fun_fact} »
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Navigation Controls (Prev / Next) */}
          <div className="flex items-center justify-between gap-3 mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/10">
            <button
              id="flashcard-prev-btn"
              onClick={handlePrev}
              className="flex-1 sm:flex-initial px-4 sm:px-6 py-3 min-h-[48px] rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Précédent</span>
            </button>

            <button
              id="flashcard-next-btn"
              onClick={handleNext}
              className="flex-1 sm:flex-initial px-5 sm:px-8 py-3 min-h-[48px] rounded-xl bg-gradient-to-r from-emerald-500 to-indigo-600 hover:from-emerald-400 hover:to-indigo-500 text-white font-extrabold text-sm sm:text-base shadow-lg shadow-indigo-500/20 flex items-center justify-center gap-2 transition-all cursor-pointer active:scale-95"
            >
              <span>Suivant</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      ) : (
        <div className="bg-slate-900/60 border border-white/5 rounded-3xl p-8 sm:p-12 text-center">
          <p className="text-slate-400 text-sm sm:text-base">Aucun drapeau ne correspond à vos filtres.</p>
        </div>
      )}
    </div>
  );
}
