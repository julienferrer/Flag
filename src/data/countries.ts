import { Country, DifficultyLevel } from '../types';
import { COUNTRIES_FACILE } from './countries-facile';
import { COUNTRIES_MOYEN } from './countries-moyen';
import { COUNTRIES_DIFFICILE } from './countries-difficile';
import { COUNTRIES_EXTREME } from './countries-extreme';
import { COUNTRIES_IMPOSSIBLE } from './countries-impossible';
import { COUNTRIES_GODTIER } from './countries-godtier';

export const ALL_COUNTRIES: Country[] = [
  ...COUNTRIES_FACILE,
  ...COUNTRIES_MOYEN,
  ...COUNTRIES_DIFFICILE,
  ...COUNTRIES_EXTREME,
  ...COUNTRIES_IMPOSSIBLE,
  ...COUNTRIES_GODTIER,
];

export const COUNTRIES_BY_DIFFICULTY: Record<DifficultyLevel, Country[]> = {
  facile: COUNTRIES_FACILE,
  moyen: COUNTRIES_MOYEN,
  difficile: COUNTRIES_DIFFICILE,
  extreme: COUNTRIES_EXTREME,
  impossible: COUNTRIES_IMPOSSIBLE,
  godtier: COUNTRIES_GODTIER,
};

export const DIFFICULTY_CONFIG: Record<
  DifficultyLevel,
  {
    label: string;
    emoji: string;
    badgeColor: string;
    textColor: string;
    borderColor: string;
    bgColor: string;
    accentColor: string;
    count: number;
    unlockThresholdPercent: number;
    description: string;
  }
> = {
  facile: {
    label: 'FACILE',
    emoji: '🟢',
    badgeColor: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
    textColor: 'text-emerald-400',
    borderColor: 'border-emerald-500',
    bgColor: 'bg-emerald-950/40',
    accentColor: 'from-emerald-500 to-teal-600',
    count: 25,
    unlockThresholdPercent: 0, // Débloqué immédiatement
    description: 'Drapeaux majeurs et très connus dans le monde.',
  },
  moyen: {
    label: 'MOYEN',
    emoji: '🟡',
    badgeColor: 'bg-amber-500/15 text-amber-400 border-amber-500/30',
    textColor: 'text-amber-400',
    borderColor: 'border-amber-500',
    bgColor: 'bg-amber-950/40',
    accentColor: 'from-amber-500 to-orange-600',
    count: 35,
    unlockThresholdPercent: 80, // Débloqué après 80% de Facile
    description: 'Connus mais demandant un peu plus d\'attention.',
  },
  difficile: {
    label: 'DIFFICILE',
    emoji: '🟠',
    badgeColor: 'bg-orange-500/15 text-orange-400 border-orange-500/30',
    textColor: 'text-orange-400',
    borderColor: 'border-orange-500',
    bgColor: 'bg-orange-950/40',
    accentColor: 'from-orange-500 to-red-600',
    count: 40,
    unlockThresholdPercent: 80, // Débloqué après 80% de Moyen
    description: 'Drapeaux moins fréquemment rencontrés au quotidien.',
  },
  extreme: {
    label: 'EXTRÊME',
    emoji: '🔴',
    badgeColor: 'bg-rose-500/15 text-rose-400 border-rose-500/30',
    textColor: 'text-rose-400',
    borderColor: 'border-rose-500',
    bgColor: 'bg-rose-950/40',
    accentColor: 'from-rose-500 to-pink-600',
    count: 35,
    unlockThresholdPercent: 80, // Débloqué après 80% de Difficile
    description: 'Pays rarement reconnus sans étude spécifique.',
  },
  impossible: {
    label: 'IMPOSSIBLE',
    emoji: '⚫',
    badgeColor: 'bg-slate-700/30 text-slate-300 border-slate-600',
    textColor: 'text-slate-300',
    borderColor: 'border-slate-500',
    bgColor: 'bg-slate-900/60',
    accentColor: 'from-slate-600 to-slate-800',
    count: 40,
    unlockThresholdPercent: 80, // Débloqué après 80% d\'Extrême
    description: 'Micro-États, nations insulaires et drapeaux rares.',
  },
  godtier: {
    label: 'GOD TIER',
    emoji: '☠️',
    badgeColor: 'bg-purple-500/20 text-purple-300 border-purple-500/40',
    textColor: 'text-purple-400',
    borderColor: 'border-purple-500',
    bgColor: 'bg-purple-950/50',
    accentColor: 'from-purple-600 to-indigo-700',
    count: 20,
    unlockThresholdPercent: 75, // Débloqué après haute maîtrise
    description: 'Le niveau ultime : drapeaux les plus piégeux et obscurs.',
  },
};

export const DIFFICULTY_ORDER: DifficultyLevel[] = [
  'facile',
  'moyen',
  'difficile',
  'extreme',
  'impossible',
  'godtier',
];

export const COUNTRY_MAP: Map<string, Country> = new Map(
  ALL_COUNTRIES.map((c) => [c.id, c])
);
