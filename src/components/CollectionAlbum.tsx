import { useState, useMemo } from 'react';
import { Country, DifficultyLevel, UserProgress } from '../types';
import { ALL_COUNTRIES, DIFFICULTY_CONFIG, DIFFICULTY_ORDER } from '../data/countries';
import { FlagImage } from './FlagImage';
import { toggleMastery } from '../utils/storage';
import { sounds } from '../utils/sound';
import { 
  Grid3X3, 
  Search, 
  Star, 
  Lock, 
  Check, 
  X, 
  MapPin, 
  Globe, 
  Lightbulb, 
  HelpCircle, 
  Sparkles,
  Filter
} from 'lucide-react';

interface CollectionAlbumProps {
  progress: UserProgress;
  setProgress: (p: UserProgress) => void;
}

type StatusFilter = 'all' | 'mastered' | 'discovered' | 'locked';

export function CollectionAlbum({ progress, setProgress }: CollectionAlbumProps) {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [difficultyFilter, setDifficultyFilter] = useState<DifficultyLevel | 'all'>('all');
  const [continentFilter, setContinentFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const continents = ['Europe', 'Afrique', 'Asie', 'Amérique du Nord', 'Amérique du Sud', 'Océanie'];

  const filteredCountries = useMemo(() => {
    return ALL_COUNTRIES.filter((c) => {
      const isMastered = progress.masteredCountryIds.includes(c.id);
      const isDiscovered = progress.discoveredCountryIds.includes(c.id);

      // Status filter
      if (statusFilter === 'mastered' && !isMastered) return false;
      if (statusFilter === 'discovered' && (!isDiscovered || isMastered)) return false;
      if (statusFilter === 'locked' && isDiscovered) return false;

      // Difficulty filter
      if (difficultyFilter !== 'all' && c.difficulty !== difficultyFilter) return false;

      // Continent filter
      if (continentFilter !== 'all' && c.continent !== continentFilter) return false;

      // Search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        const matchName = c.name.toLowerCase().includes(query);
        const matchCap = c.capital.toLowerCase().includes(query);
        if (!matchName && !matchCap) return false;
      }

      return true;
    });
  }, [progress, statusFilter, difficultyFilter, continentFilter, searchQuery]);

  const masteredTotal = progress.masteredCountryIds.length;
  const discoveredTotal = progress.discoveredCountryIds.length;

  const handleToggleCountryMastery = (countryId: string) => {
    sounds.playClick();
    const updated = toggleMastery(countryId, progress);
    setProgress(updated);
  };

  return (
    <div className="max-w-7xl mx-auto px-2.5 sm:px-4 py-3 sm:py-6">
      {/* Header & Stats Banner */}
      <div className="bg-slate-900/80 border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-4 sm:mb-6 shadow-md">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-bold text-purple-400 uppercase tracking-wider mb-1">
              <Grid3X3 className="w-4 h-4" />
              <span>Album des 195 Drapeaux</span>
            </div>
            <h1 className="text-xl sm:text-3xl font-black text-white">
              Collection Mondiale
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
              Complète ton album en jouant aux quiz ou en marquant tes réussites.
            </p>
          </div>

          {/* Quick Counter Pills */}
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex-1 sm:flex-initial bg-slate-950/80 border border-amber-500/20 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-center">
              <span className="text-[10px] font-bold text-slate-400 block uppercase">Maîtrisés ⭐</span>
              <span className="text-lg sm:text-xl font-black text-amber-400">{masteredTotal} / 195</span>
            </div>
            <div className="flex-1 sm:flex-initial bg-slate-950/80 border border-indigo-500/20 px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-center">
              <span className="text-[10px] font-bold text-slate-400 block uppercase">Découverts</span>
              <span className="text-lg sm:text-xl font-black text-indigo-300">{discoveredTotal} / 195</span>
            </div>
          </div>
        </div>

        {/* Filters and Search Bar */}
        <div className="mt-6 pt-4 border-t border-white/10 flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Status Tabs */}
          <div className="flex items-center gap-1 bg-slate-950/60 p-1 rounded-xl border border-white/5 overflow-x-auto max-w-full">
            <button
              onClick={() => {
                sounds.playClick();
                setStatusFilter('all');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                statusFilter === 'all'
                  ? 'bg-purple-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Tous (195)
            </button>
            <button
              onClick={() => {
                sounds.playClick();
                setStatusFilter('mastered');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer flex items-center gap-1 ${
                statusFilter === 'mastered'
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <Star className="w-3 h-3 fill-current" />
              <span>Maîtrisés ({masteredTotal})</span>
            </button>
            <button
              onClick={() => {
                sounds.playClick();
                setStatusFilter('discovered');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                statusFilter === 'discovered'
                  ? 'bg-indigo-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              En cours ({Math.max(0, discoveredTotal - masteredTotal)})
            </button>
            <button
              onClick={() => {
                sounds.playClick();
                setStatusFilter('locked');
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap cursor-pointer ${
                statusFilter === 'locked'
                  ? 'bg-slate-700 text-white shadow-sm'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              Non découverts ({195 - discoveredTotal})
            </button>
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher par pays ou capitale..."
              className="w-full bg-slate-950/70 border border-white/10 rounded-xl pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>
        </div>

        {/* Level and Continent Sub-filters */}
        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
          <span className="text-slate-500 font-bold">Niveau :</span>
          <button
            onClick={() => setDifficultyFilter('all')}
            className={`px-2.5 py-1 rounded-md transition-all cursor-pointer font-medium ${
              difficultyFilter === 'all'
                ? 'bg-slate-800 text-white'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Tous
          </button>
          {DIFFICULTY_ORDER.map((lvl) => {
            const config = DIFFICULTY_CONFIG[lvl];
            return (
              <button
                key={lvl}
                onClick={() => setDifficultyFilter(lvl)}
                className={`px-2.5 py-1 rounded-md transition-all cursor-pointer font-medium ${
                  difficultyFilter === lvl
                    ? `${config.badgeColor} border font-bold`
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {config.emoji} {config.label}
              </button>
            );
          })}

          <div className="w-px h-4 bg-white/10 mx-1 hidden sm:block" />

          <span className="text-slate-500 font-bold">Continent :</span>
          <button
            onClick={() => setContinentFilter('all')}
            className={`px-2.5 py-1 rounded-md transition-all cursor-pointer font-medium ${
              continentFilter === 'all'
                ? 'bg-slate-800 text-white'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            Tous
          </button>
          {continents.map((c) => (
            <button
              key={c}
              onClick={() => setContinentFilter(c)}
              className={`px-2.5 py-1 rounded-md transition-all cursor-pointer font-medium ${
                continentFilter === c
                  ? 'bg-purple-600/30 text-purple-300 border border-purple-500/30'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>

      {/* Grid of 195 Flags (optimized 2 columns on small screens, 3 on larger phones, 4-6 on tablets & desktop) */}
      <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-4">
        {filteredCountries.map((country) => {
          const isMastered = progress.masteredCountryIds.includes(country.id);
          const isDiscovered = progress.discoveredCountryIds.includes(country.id);
          const isLocked = !isDiscovered && statusFilter !== 'locked';

          return (
            <div
              key={country.id}
              onClick={() => {
                sounds.playClick();
                setSelectedCountry(country);
              }}
              className={`group relative p-2.5 sm:p-3 rounded-xl sm:rounded-2xl border transition-all cursor-pointer flex flex-col items-center text-center select-none active:scale-95 ${
                isMastered
                  ? 'bg-slate-900/90 border-amber-500/40 hover:border-amber-400 shadow-md shadow-amber-500/5'
                  : isDiscovered
                  ? 'bg-slate-900/60 border-white/10 hover:border-indigo-500/40'
                  : 'bg-slate-950/50 border-slate-800/40 hover:border-slate-700 opacity-75'
              }`}
            >
              {/* Top Mastery Badge */}
              <div className="absolute top-1.5 right-1.5 sm:top-2 sm:right-2 z-10">
                {isMastered ? (
                  <span className="flex items-center justify-center w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-amber-400 text-slate-950 shadow-md">
                    <Star className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current" />
                  </span>
                ) : !isDiscovered ? (
                  <span className="flex items-center justify-center w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-slate-800 text-slate-400">
                    <Lock className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                  </span>
                ) : null}
              </div>

              {/* Flag image */}
              <div className="mb-2 w-full flex justify-center">
                <FlagImage
                  countryId={country.id}
                  countryName={country.name}
                  flagEmoji={country.flagEmoji}
                  isSilhouette={!isDiscovered}
                  size="md"
                  className="rounded-md sm:rounded-lg shadow-sm"
                />
              </div>

              {/* Country Name & Capital */}
              <div className="w-full">
                <h4 className="font-extrabold text-xs sm:text-sm text-white truncate">
                  {isDiscovered ? country.name : '???'}
                </h4>
                <p className="text-[10px] sm:text-xs text-slate-400 truncate mt-0.5">
                  {isDiscovered ? country.capital : 'Pays verrouillé'}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Country Detail Modal */}
      {selectedCountry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-white/10 rounded-2xl sm:rounded-3xl p-4 sm:p-8 max-w-lg w-full shadow-2xl relative max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedCountry(null)}
              className="absolute top-3 right-3 sm:top-4 sm:right-4 p-2 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Flag Header */}
            <div className="flex flex-col items-center text-center mb-6">
              <FlagImage
                countryId={selectedCountry.id}
                countryName={selectedCountry.name}
                flagEmoji={selectedCountry.flagEmoji}
                size="lg"
                className="rounded-2xl shadow-xl border border-white/10 mb-4"
              />

              <div className="flex items-center gap-2 mb-1">
                <h3 className="text-2xl font-black text-white">{selectedCountry.name}</h3>
                <span className="text-2xl">{selectedCountry.flagEmoji}</span>
              </div>

              <div className="flex items-center gap-3 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                  {selectedCountry.capital}
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Globe className="w-3.5 h-3.5 text-emerald-400" />
                  {selectedCountry.continent} ({selectedCountry.region})
                </span>
              </div>
            </div>

            {/* Details Content */}
            <div className="space-y-3 text-xs sm:text-sm">
              {/* Mnemonic */}
              {selectedCountry.mnemonic && (
                <div className="bg-indigo-950/30 border border-indigo-500/25 p-3.5 rounded-xl">
                  <span className="font-bold text-indigo-300 block mb-1 flex items-center gap-1">
                    <Lightbulb className="w-3.5 h-3.5 text-amber-400" />
                    Moyen mnémotechnique :
                  </span>
                  <p className="text-slate-200 leading-relaxed">{selectedCountry.mnemonic}</p>
                </div>
              )}

              {/* Confusions */}
              {selectedCountry.common_confusions && selectedCountry.common_confusions.length > 0 && (
                <div className="bg-amber-950/20 border border-amber-500/25 p-3.5 rounded-xl">
                  <span className="font-bold text-amber-400 block mb-1 flex items-center gap-1">
                    <HelpCircle className="w-3.5 h-3.5" />
                    Pièges fréquents :
                  </span>
                  {selectedCountry.common_confusions.map((conf, idx) => (
                    <p key={idx} className="text-slate-300 leading-relaxed mt-1">
                      {conf.flagEmoji} <strong>{conf.countryName} :</strong> {conf.explanation}
                    </p>
                  ))}
                </div>
              )}

              {/* Fun Fact */}
              {selectedCountry.fun_fact && (
                <div className="bg-slate-950/60 border border-white/5 p-3.5 rounded-xl">
                  <span className="font-bold text-slate-400 block mb-1 flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                    Anecdote :
                  </span>
                  <p className="text-slate-300 italic leading-relaxed">
                    « {selectedCountry.fun_fact} »
                  </p>
                </div>
              )}
            </div>

            {/* Mastery Toggle inside Modal */}
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs text-slate-400 font-medium">
                Statut : {progress.masteredCountryIds.includes(selectedCountry.id) ? '⭐ Maîtrisé' : 'En cours d\'apprentissage'}
              </span>

              <button
                onClick={() => handleToggleCountryMastery(selectedCountry.id)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 border ${
                  progress.masteredCountryIds.includes(selectedCountry.id)
                    ? 'bg-amber-500/20 text-amber-300 border-amber-500/40'
                    : 'bg-slate-800 text-slate-200 border-white/10 hover:border-slate-600'
                }`}
              >
                <Check className="w-3.5 h-3.5" />
                <span>
                  {progress.masteredCountryIds.includes(selectedCountry.id)
                    ? 'Retirer des maîtrisés'
                    : 'Marquer comme maîtrisé'}
                </span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
