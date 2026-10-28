import { Country } from '../types';

export const COUNTRIES_GODTIER: Country[] = [
  {
    id: 'ki',
    name: 'Kiribati',
    flagEmoji: '🇰🇮',
    difficulty: 'godtier',
    continent: 'Océanie',
    capital: 'Tarawa-Sud',
    region: 'Micronésie',
    fun_fact: 'Seul pays au monde situé sur les quatre hémisphères (nord, sud, est, ouest) à la fois.',
    mnemonic: 'Moitié supérieure rouge avec une frégate dorée volant au-dessus d\'un soleil d\'or levant à 17 rayons, moitié inférieure à 6 vagues ondulées blanches et bleues.',
    isIsland: true,
    common_confusions: [
      { countryId: 'tv', countryName: 'Tuvalu', flagEmoji: '🇹🇻', explanation: 'Tuvalu a un fond bleu ciel clair avec l\'Union Jack et 9 étoiles dorées (pas de soleil ni d\'oiseau).' },
      { countryId: 'nr', countryName: 'Nauru', flagEmoji: '🇳🇷', explanation: 'Nauru a une ligne jaune horizontale et une étoile blanche à 12 pointes sur fond bleu marine.' }
    ]
  },
  {
    id: 'nr',
    name: 'Nauru',
    flagEmoji: '🇳🇷',
    difficulty: 'godtier',
    continent: 'Océanie',
    capital: 'Yaren',
    region: 'Micronésie',
    fun_fact: 'Plus petite république insulaire indépendante du monde (21 km²), traversée par la ligne de l\'équateur.',
    mnemonic: 'Fond bleu marine représentant l\'océan Pacifique, fine ligne jaune horizontale marquant l\'équateur, grande étoile blanche à 12 branches juste sous la ligne côté hampe.',
    isIsland: true,
    common_confusions: [
      { countryId: 'cw', countryName: 'Curaçao', flagEmoji: '🇨🇼', explanation: 'Curaçao a deux étoiles blanches dans le coin supérieur gauche.' }
    ]
  },
  {
    id: 'tv',
    name: 'Tuvalu',
    flagEmoji: '🇹🇻',
    difficulty: 'godtier',
    continent: 'Océanie',
    capital: 'Funafuti',
    region: 'Polynésie',
    fun_fact: 'Les 9 étoiles jaunes disposées géographiquement représentent les 9 atolls de l\'archipel ("Tuvalu" signifie "huit ensemble").',
    mnemonic: 'Fond bleu ciel azur avec l\'Union Jack dans le canton supérieur gauche et 9 étoiles dorées à 5 branches parsemées sur la droite.',
    isIsland: true,
    common_confusions: [
      { countryId: 'ki', countryName: 'Kiribati', flagEmoji: '🇰🇮', explanation: 'Kiribati a des vagues marines et une frégate dorée sur fond rouge et blanc/bleu.' },
      { countryId: 'fj', countryName: 'Fidji', flagEmoji: '🇫🇯', explanation: 'Fidji a le blason avec le lion britannique tenant une cabosse au lieu d\'étoiles.' }
    ]
  },
  {
    id: 'vu',
    name: 'Vanuatu',
    flagEmoji: '🇻🇺',
    difficulty: 'godtier',
    continent: 'Océanie',
    capital: 'Port-Vila',
    region: 'Mélanésie',
    fun_fact: 'La défense de sanglier recourbée symbolise la prospérité traditionnelle mélanésienne, entourant deux feuilles de fougère "namele".',
    mnemonic: 'Grand "Y" horizontal noir liseré d\'or contenant une défense de sanglier et deux feuilles de fougère dorées, séparant le rouge en haut du vert en bas.',
    isIsland: true,
    common_confusions: [
      { countryId: 'za', countryName: 'Afrique du Sud', flagEmoji: '🇿🇦', explanation: 'L\'Afrique du Sud a un Y vert horizontal sans défense de sanglier.' }
    ]
  },
  {
    id: 'pw',
    name: 'Palaos',
    flagEmoji: '🇵🇼',
    difficulty: 'godtier',
    continent: 'Océanie',
    capital: 'Ngerulmud',
    region: 'Micronésie',
    fun_fact: 'Le disque jaune ne représente pas le soleil mais la pleine lune, symbole traditionnel de paix et d\'activité propice.',
    mnemonic: 'Fond bleu ciel lumineux avec un grand disque jaune d\'or plein légèrement décentré vers la gauche.',
    isIsland: true,
    common_confusions: [
      { countryId: 'bd', countryName: 'Bangladesh', flagEmoji: '🇧🇩', explanation: 'Le Bangladesh a un disque ROUGE sur fond vert sombre.' },
      { countryId: 'jp', countryName: 'Japon', flagEmoji: '🇯🇵', explanation: 'Le Japon a un disque rouge sur fond blanc.' }
    ]
  },
  {
    id: 'fm',
    name: 'Micronésie',
    flagEmoji: '🇫🇲',
    difficulty: 'godtier',
    continent: 'Océanie',
    capital: 'Palikir',
    region: 'Micronésie',
    fun_fact: 'Les 4 étoiles blanches représentent les 4 États fédérés : Yap, Chuuk, Pohnpei et Kosrae.',
    mnemonic: 'Fond bleu clair Pacifique avec 4 étoiles blanches à 5 branches disposées en losange/croix au centre.',
    isIsland: true,
    common_confusions: [
      { countryId: 'so', countryName: 'Somalie', flagEmoji: '🇸🇴', explanation: 'La Somalie n\'a qu\'une SEULE étoile blanche au centre.' }
    ]
  },
  {
    id: 'mh',
    name: 'Îles Marshall',
    flagEmoji: '🇲🇭',
    difficulty: 'godtier',
    continent: 'Océanie',
    capital: 'Majuro',
    region: 'Micronésie',
    fun_fact: 'La grande étoile blanche à 24 branches symbolise les 24 districts municipaux, les 4 longs rayons formant la croix chrétienne.',
    mnemonic: 'Fond bleu profond traversé d\'un rayon diagonal bicolore s\'élargissant (orange en haut pour le courage, blanc en bas pour la paix), avec une grande étoile blanche à 24 branches dans le coin supérieur gauche.',
    isIsland: true,
    common_confusions: [
      { countryId: 'nr', countryName: 'Nauru', flagEmoji: '🇳🇷', explanation: 'Nauru a une ligne jaune strictement horizontale et une étoile sous la ligne.' }
    ]
  },
  {
    id: 'sb',
    name: 'Îles Salomon',
    flagEmoji: '🇸🇧',
    difficulty: 'godtier',
    continent: 'Océanie',
    capital: 'Honiara',
    region: 'Mélanésie',
    fun_fact: 'La fine bande jaune diagonale sépare le bleu de l\'océan et le vert des forêts insulaires luxuriantes.',
    mnemonic: 'Diagonale jaune séparant un triangle bleu en haut à gauche (avec 5 étoiles blanches disposées en X) et un triangle vert en bas à droite.',
    isIsland: true,
    common_confusions: [
      { countryId: 'tz', countryName: 'Tanzanie', flagEmoji: '🇹🇿', explanation: 'La Tanzanie a une bande diagonale NOIRE liserée de jaune sans étoiles.' }
    ]
  },
  {
    id: 'kn',
    name: 'Saint-Christophe-et-Niévès',
    flagEmoji: '🇰🇳',
    difficulty: 'godtier',
    continent: 'Amérique du Nord',
    capital: 'Basseterre',
    region: 'Caraïbes',
    fun_fact: 'Plus petit pays souverain des Amériques en superficie comme en population.',
    mnemonic: 'Large diagonale noire bordée de deux liserés dorés portant deux étoiles blanches, séparant un triangle vert (haut gauche) d\'un triangle rouge (bas droite).',
    isIsland: true,
    common_confusions: [
      { countryId: 'cg', countryName: 'Congo', flagEmoji: '🇨🇬', explanation: 'Le Congo a une diagonale unie jaune sans étoiles ni liserés.' }
    ]
  },
  {
    id: 'vc',
    name: 'Saint-Vincent-et-les-Grenadines',
    flagEmoji: '🇻🇨',
    difficulty: 'godtier',
    continent: 'Amérique du Nord',
    capital: 'Kingstown',
    region: 'Caraïbes',
    fun_fact: 'Les 3 losanges verts au centre forment un "V" pour Saint-Vincent et sont surnommés "Les Joyaux des Antilles".',
    mnemonic: 'Trois bandes verticales bleu azur, large jaune au centre, vert forêt, avec trois losanges/diamants verts formant la lettre "V" au centre.',
    isIsland: true,
    common_confusions: []
  },
  {
    id: 'lc',
    name: 'Sainte-Lucie',
    flagEmoji: '🇱🇨',
    difficulty: 'godtier',
    continent: 'Amérique du Nord',
    capital: 'Castries',
    region: 'Caraïbes',
    fun_fact: 'Le triangle stylisé représente les célèbres Deux Pitons (Gros Piton et Petit Piton), pics volcaniques émergeant de la mer.',
    mnemonic: 'Fond bleu ciel céruléen avec un triangle isocèle noir bordé de blanc surmontant un triangle jaune d\'or formant un cône volcanique.',
    isIsland: true,
    common_confusions: []
  },
  {
    id: 'ag',
    name: 'Antigua-et-Barbuda',
    flagEmoji: '🇦🇬',
    difficulty: 'godtier',
    continent: 'Amérique du Nord',
    capital: 'Saint John\'s',
    region: 'Caraïbes',
    fun_fact: 'Le "V" inversé formé par les deux triangles latéraux rouges symbolise la Victoire ("Victory").',
    mnemonic: 'Champ rouge encadrant un "V" central formé de trois bandes noir (soleil levant d\'or à 7 rayons), bleu et blanc.',
    isIsland: true,
    common_confusions: []
  },
  {
    id: 'gd',
    name: 'Grenade',
    flagEmoji: '🇬🇩',
    difficulty: 'godtier',
    continent: 'Amérique du Nord',
    capital: 'Saint-Georges',
    region: 'Caraïbes',
    fun_fact: 'L\'emblème à gauche est une muscade dorée éclatée dans sa coque rouge, Grenade étant surnommée "l\'Île aux épices".',
    mnemonic: 'Cadre rouge portant 6 étoiles dorées (3 en haut, 3 en bas), centre divisé en 4 triangles (jaune haut/bas, vert gauche/droite) avec disque rouge à étoile dorée au centre et une muscade à gauche.',
    isIsland: true,
    common_confusions: []
  },
  {
    id: 'st',
    name: 'São Tomé-et-Príncipe',
    flagEmoji: '🇸🇹',
    difficulty: 'godtier',
    continent: 'Afrique',
    capital: 'São Tomé',
    region: 'Afrique centrale',
    fun_fact: 'Les deux étoiles noires symbolisent les deux îles principales : l\'île de São Tomé et l\'île de Príncipe.',
    mnemonic: 'Trois bandes horizontales vert, large jaune au centre avec deux étoiles noires à 5 branches, vert, avec un triangle rouge à la hampe.',
    isIsland: true,
    common_confusions: [
      { countryId: 'gw', countryName: 'Guinée-Bissau', flagEmoji: '🇬🇼', explanation: 'La Guinée-Bissau a une bande ROUGE verticale à gauche avec une SEULE étoile noire.' }
    ]
  },
  {
    id: 'km',
    name: 'Comores',
    flagEmoji: '🇰🇲',
    difficulty: 'godtier',
    continent: 'Afrique',
    capital: 'Moroni',
    region: 'Afrique de l\'Est',
    fun_fact: 'Les 4 bandes de couleur et les 4 étoiles blanches représentent les 4 îles de l\'archipel (Grande Comore, Mohéli, Anjouan et Mayotte).',
    mnemonic: '4 bandes horizontales jaune, blanc, rouge, bleu avec un triangle vert le long de la hampe portant un croissant blanc et 4 étoiles blanches alignées.',
    isIsland: true,
    common_confusions: [
      { countryId: 'sc', countryName: 'Seychelles', flagEmoji: '🇸🇨', explanation: 'Les Seychelles ont 5 rayons obliques divergents rayonnant depuis le coin inférieur gauche.' }
    ]
  },
  {
    id: 'gw',
    name: 'Guinée-Bissau',
    flagEmoji: '🇬🇼',
    difficulty: 'godtier',
    continent: 'Afrique',
    capital: 'Bissau',
    region: 'Afrique de l\'Ouest',
    fun_fact: 'Créé par le mouvement de libération PAIGC d\'Amílcar Cabral, inspiré du drapeau du Ghana.',
    mnemonic: 'Bande verticale rouge à gauche portant une étoile noire à 5 branches, et deux bandes horizontales jaune (haut) et vert (bas) à droite.',
    common_confusions: [
      { countryId: 'st', countryName: 'São Tomé-et-Príncipe', flagEmoji: '🇸🇹', explanation: 'São Tomé a un triangle rouge et DEUX étoiles noires sur sa bande jaune.' },
      { countryId: 'gh', countryName: 'Ghana', flagEmoji: '🇬🇭', explanation: 'Le Ghana a trois bandes horizontales rouge, jaune, vert.' }
    ]
  },
  {
    id: 'gq',
    name: 'Guinée équatoriale',
    flagEmoji: '🇬🇶',
    difficulty: 'godtier',
    continent: 'Afrique',
    capital: 'Malabo',
    region: 'Afrique centrale',
    fun_fact: 'L\'arbre au centre des armoiries est un fromager (ceiba) sous lequel a été signé le traité historique avec les souverains locaux.',
    mnemonic: 'Trois bandes horizontales vert, blanc avec blason au fromager surmonté de 6 étoiles dorées, rouge, avec un triangle bleu ciel à la hampe.',
    common_confusions: [
      { countryId: 'dj', countryName: 'Djibouti', flagEmoji: '🇩🇯', explanation: 'Djibouti a un triangle blanc portant une étoile rouge et deux bandes bleu et vert.' }
    ]
  },
  {
    id: 'sc',
    name: 'Seychelles',
    flagEmoji: '🇸🇨',
    difficulty: 'godtier',
    continent: 'Afrique',
    capital: 'Victoria',
    region: 'Afrique de l\'Est',
    fun_fact: 'Les 5 bandes obliques rayonnant depuis le coin inférieur gauche symbolisent un pays jeune et dynamique s\'élançant vers l\'avenir.',
    mnemonic: '5 rayons divergents en éventail partant du coin inférieur gauche : bleu, jaune, rouge, blanc, vert.',
    isIsland: true,
    common_confusions: [
      { countryId: 'mu', countryName: 'Maurice', flagEmoji: '🇲🇺', explanation: 'Maurice a 4 bandes horizontales parallèles (rouge, bleu, jaune, vert).' }
    ]
  },
  {
    id: 'bt',
    name: 'Bhoutan',
    flagEmoji: '🇧🇹',
    difficulty: 'godtier',
    continent: 'Asie',
    capital: 'Thimphou',
    region: 'Asie du Sud',
    fun_fact: 'Le Druk (Dragon du Tonnerre) tient dans ses griffes des bijoux sacrés (norbu) représentant la richesse spirituelle et matérielle.',
    mnemonic: 'Divisé en diagonale : triangle jaune safran en haut à gauche, triangle orange en bas à droite, avec le grand Dragon blanc sans ailes (Druk) grimpant le long de la ligne de partage.',
    common_confusions: [
      { countryId: 'cy', countryName: 'Pays de Galles', flagEmoji: '🏴󠁧󠁢󠁷󠁬󠁳󠁿', explanation: 'Le Pays de Galles a un dragon ROUGE sur fond bicolore blanc et vert.' }
    ]
  },
  {
    id: 'bn',
    name: 'Brunei',
    flagEmoji: '🇧🇳',
    difficulty: 'godtier',
    continent: 'Asie',
    capital: 'Bandar Seri Begawan',
    region: 'Asie du Sud-Est',
    fun_fact: 'Le croissant de lune de l\'emblème rouge porte la devise en arabe : "Toujours rendre service avec l\'aide de Dieu".',
    mnemonic: 'Fond jaune royal traversé de deux bandes diagonales blanche et noire, avec les armoiries nationales rouges (croissant, parasol royal, ailes et mains ouvertes) au centre.',
    isIsland: true,
    common_confusions: []
  }
];
