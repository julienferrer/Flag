import { Achievement } from '../types';
import { ALL_COUNTRIES } from './countries';

const ISLAND_COUNTRY_IDS = ALL_COUNTRIES.filter((c) => c.isIsland).map((c) => c.id);

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'first_flag',
    title: 'Premier drapeau',
    description: 'Reconnaître correctement son tout premier pays.',
    icon: '🏆',
    maxProgress: 1,
    currentProgress: (p) => (p.totalCorrect >= 1 ? 1 : 0),
    isUnlocked: (p) => p.totalCorrect >= 1,
  },
  {
    id: 'explorer',
    title: 'Explorateur',
    description: 'Maîtriser 50 pays différents.',
    icon: '🌍',
    maxProgress: 50,
    currentProgress: (p) => Math.min(p.masteredCountryIds.length, 50),
    isUnlocked: (p) => p.masteredCountryIds.length >= 50,
  },
  {
    id: 'globetrotter',
    title: 'Globe-trotter',
    description: 'Maîtriser 100 pays différents.',
    icon: '🌎',
    maxProgress: 100,
    currentProgress: (p) => Math.min(p.masteredCountryIds.length, 100),
    isUnlocked: (p) => p.masteredCountryIds.length >= 100,
  },
  {
    id: 'world_master',
    title: 'Maître du monde',
    description: 'Maîtriser l\'intégralité des 195 États du monde.',
    icon: '🌐',
    maxProgress: 195,
    currentProgress: (p) => p.masteredCountryIds.length,
    isUnlocked: (p) => p.masteredCountryIds.length >= 195,
  },
  {
    id: 'godtier_survivor',
    title: 'Survivant Ultime',
    description: 'Réussir 10 questions du niveau God Tier.',
    icon: '☠️',
    maxProgress: 10,
    currentProgress: (p) => Math.min(p.godTierCorrectCount, 10),
    isUnlocked: (p) => p.godTierCorrectCount >= 10,
  },
  {
    id: 'perfect_streak',
    title: 'Sans faute',
    description: 'Enchaîner 20 réponses consécutives correctes.',
    icon: '🔥',
    maxProgress: 20,
    currentProgress: (p) => Math.min(p.bestStreak, 20),
    isUnlocked: (p) => p.bestStreak >= 20,
  },
  {
    id: 'island_king',
    title: 'Roi des îles',
    description: 'Maîtriser tous les États insulaires du globe.',
    icon: '🏝️',
    maxProgress: ISLAND_COUNTRY_IDS.length,
    currentProgress: (p) =>
      ISLAND_COUNTRY_IDS.filter((id) => p.masteredCountryIds.includes(id)).length,
    isUnlocked: (p) =>
      ISLAND_COUNTRY_IDS.every((id) => p.masteredCountryIds.includes(id)),
  },
  {
    id: 'speed_demon',
    title: 'Flèche Éclair',
    description: 'Marquer au moins 15 points en une session de Mode Rapide.',
    icon: '⚡',
    maxProgress: 15,
    currentProgress: (p) => Math.min(p.speedModeBestScore, 15),
    isUnlocked: (p) => p.speedModeBestScore >= 15,
  },
  {
    id: 'survivalist',
    title: 'Invincible',
    description: 'Atteindre un score d\'au moins 25 drapeaux en Mode Survie.',
    icon: '🛡️',
    maxProgress: 25,
    currentProgress: (p) => Math.min(p.survivalBestScore, 25),
    isUnlocked: (p) => p.survivalBestScore >= 25,
  },
  {
    id: 'memory_pro',
    title: 'Répétition Parfaite',
    description: 'Surmonter et maîtriser 5 drapeaux de sa liste À réviser.',
    icon: '🧠',
    maxProgress: 5,
    currentProgress: (p) => {
      let count = 0;
      for (const [id, stat] of Object.entries(p.reviewList)) {
        if (stat.errorCount > 0 && stat.consecutiveCorrect >= 2 && p.masteredCountryIds.includes(id)) {
          count++;
        }
      }
      return Math.min(count, 5);
    },
    isUnlocked: (p) => {
      let count = 0;
      for (const [id, stat] of Object.entries(p.reviewList)) {
        if (stat.errorCount > 0 && stat.consecutiveCorrect >= 2 && p.masteredCountryIds.includes(id)) {
          count++;
        }
      }
      return count >= 5;
    },
  },
];
