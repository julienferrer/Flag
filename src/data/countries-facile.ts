import { Country } from '../types';

export const COUNTRIES_FACILE: Country[] = [
  {
    id: 'ca',
    name: 'Canada',
    flagEmoji: '🇨🇦',
    difficulty: 'facile',
    continent: 'Amérique du Nord',
    capital: 'Ottawa',
    region: 'Amérique septentrionale',
    fun_fact: 'La feuille d\'érable rouge à 11 pointes est le symbole national officiel depuis 1965.',
    mnemonic: 'Bandes rouges aux extrémités encadrant la célèbre feuille d\'érable rouge au centre.',
    common_confusions: [
      { countryId: 'pe', countryName: 'Pérou', flagEmoji: '🇵🇪', explanation: 'Le Pérou a aussi trois bandes verticales rouge-blanc-rouge, mais sans feuille d\'érable.' }
    ]
  },
  {
    id: 'us',
    name: 'États-Unis',
    flagEmoji: '🇺🇸',
    difficulty: 'facile',
    continent: 'Amérique du Nord',
    capital: 'Washington, D.C.',
    region: 'Amérique septentrionale',
    fun_fact: 'Le Stars and Stripes possède 50 étoiles pour les 50 États et 13 bandes pour les colonies originelles.',
    mnemonic: '50 étoiles blanches dans un canton bleu, alternant 13 bandes rouges et blanches.',
    common_confusions: [
      { countryId: 'lr', countryName: 'Liberia', flagEmoji: '🇱🇷', explanation: 'Le Liberia n\'a qu\'une seule grande étoile blanche dans son carré bleu et 11 bandes.' },
      { countryId: 'my', countryName: 'Malaisie', flagEmoji: '🇲🇾', explanation: 'La Malaisie a un croissant de lune et une étoile à 14 pointes sur fond bleu.' }
    ]
  },
  {
    id: 'mx',
    name: 'Mexique',
    flagEmoji: '🇲🇽',
    difficulty: 'facile',
    continent: 'Amérique du Nord',
    capital: 'Mexico',
    region: 'Amérique centrale',
    fun_fact: 'L\'aigle dévorant un serpent sur un nopal au centre commémore la fondation aztèque de Tenochtitlan.',
    mnemonic: 'Tricolore vert-blanc-rouge avec les armoiries aztèques de l\'aigle et du serpent au centre.',
    common_confusions: [
      { countryId: 'it', countryName: 'Italie', flagEmoji: '🇮🇹', explanation: 'L\'Italie a les mêmes 3 bandes vert-blanc-rouge mais aucun blason au centre.' }
    ]
  },
  {
    id: 'br',
    name: 'Brésil',
    flagEmoji: '🇧🇷',
    difficulty: 'facile',
    continent: 'Amérique du Sud',
    capital: 'Brasília',
    region: 'Amérique du Sud',
    fun_fact: 'La sphère bleue reproduit le ciel étoilé de Rio de Janeiro le 15 novembre 1889 avec la devise "Ordem e Progresso".',
    mnemonic: 'Grand losange jaune sur fond vert avec un globe céleste étoilé bleu au centre.',
    common_confusions: []
  },
  {
    id: 'ar',
    name: 'Argentine',
    flagEmoji: '🇦🇷',
    difficulty: 'facile',
    continent: 'Amérique du Sud',
    capital: 'Buenos Aires',
    region: 'Amérique du Sud',
    fun_fact: 'Le soleil central avec un visage humain est le "Sol de Mayo", hommage au dieu inca Inti.',
    mnemonic: 'Trois bandes horizontales bleu ciel et blanc avec le soleil doré au visage humain au centre.',
    common_confusions: [
      { countryId: 'uy', countryName: 'Uruguay', flagEmoji: '🇺🇾', explanation: 'L\'Uruguay a des bandes blanches et bleues avec le soleil placé dans le coin supérieur gauche.' }
    ]
  },
  {
    id: 'cl',
    name: 'Chili',
    flagEmoji: '🇨🇱',
    difficulty: 'facile',
    continent: 'Amérique du Sud',
    capital: 'Santiago',
    region: 'Amérique du Sud',
    fun_fact: 'L\'étoile solitaire ("La Estrella Solitaria") guide le pays vers le progrès et l\'honneur.',
    mnemonic: 'Bande inférieure rouge, bande supérieure blanche avec un carré bleu et une étoile blanche à gauche.',
    common_confusions: [
      { countryId: 'us', countryName: 'Texas (USA)', flagEmoji: '🇺🇸', explanation: 'Le drapeau du Texas a une bande bleue verticale sur toute la hauteur.' }
    ]
  },
  {
    id: 'co',
    name: 'Colombie',
    flagEmoji: '🇨🇴',
    difficulty: 'facile',
    continent: 'Amérique du Sud',
    capital: 'Bogotá',
    region: 'Amérique du Sud',
    fun_fact: 'La bande jaune supérieure occupe la moitié de la hauteur du drapeau, le bleu et rouge un quart chacun.',
    mnemonic: 'Jaune occupant 50% du haut, puis bleu et rouge en dessous sans étoile ni blason.',
    common_confusions: [
      { countryId: 'ec', countryName: 'Équateur', flagEmoji: '🇪🇨', explanation: 'L\'Équateur a les mêmes proportions mais porte ses armoiries au centre.' },
      { countryId: 've', countryName: 'Venezuela', flagEmoji: '🇻🇪', explanation: 'Le Venezuela a trois bandes d\'égale largeur avec un arc d\'étoiles blanches.' }
    ]
  },
  {
    id: 'fr',
    name: 'France',
    flagEmoji: '🇫🇷',
    difficulty: 'facile',
    continent: 'Europe',
    capital: 'Paris',
    region: 'Europe occidentale',
    fun_fact: 'Né pendant la Révolution française, unissant le blanc de la royauté au bleu et rouge de Paris.',
    mnemonic: 'Bleu, blanc, rouge dans l\'ordre vertical de gauche à droite.',
    common_confusions: [
      { countryId: 'nl', countryName: 'Pays-Bas', flagEmoji: '🇳🇱', explanation: 'Les Pays-Bas ont les mêmes couleurs mais disposées en bandes HORIZONTALES (rouge en haut).' }
    ]
  },
  {
    id: 'de',
    name: 'Allemagne',
    flagEmoji: '🇩🇪',
    difficulty: 'facile',
    continent: 'Europe',
    capital: 'Berlin',
    region: 'Europe occidentale',
    fun_fact: 'Couleurs issues des uniformes noirs à parements rouges et boutons dorés du corps franc de Lützow (1813).',
    mnemonic: 'Noir en haut, rouge au milieu, or/jaune en bas à l\'horizontale.',
    common_confusions: [
      { countryId: 'be', countryName: 'Belgique', flagEmoji: '🇧🇪', explanation: 'La Belgique a les mêmes couleurs mais en bandes VERTICALES (noir, jaune, rouge).' }
    ]
  },
  {
    id: 'it',
    name: 'Italie',
    flagEmoji: '🇮🇹',
    difficulty: 'facile',
    continent: 'Europe',
    capital: 'Rome',
    region: 'Europe méridionale',
    fun_fact: 'Inspiré par le drapeau français lors des campagnes de Napoléon en 1796, le vert remplaçant le bleu.',
    mnemonic: 'Vert, blanc, rouge en trois bandes verticales égales.',
    common_confusions: [
      { countryId: 'ie', countryName: 'Irlande', flagEmoji: '🇮🇪', explanation: 'L\'Irlande a vert, blanc et ORANGE (non pas rouge).' },
      { countryId: 'mx', countryName: 'Mexique', flagEmoji: '🇲🇽', explanation: 'Le Mexique porte un aigle royal sur un cactus au centre.' }
    ]
  },
  {
    id: 'es',
    name: 'Espagne',
    flagEmoji: '🇪🇸',
    difficulty: 'facile',
    continent: 'Europe',
    capital: 'Madrid',
    region: 'Europe méridionale',
    fun_fact: 'La bande jaune centrale est deux fois plus large que chaque bande rouge (la Rojigualda).',
    mnemonic: 'Rouge, large bande jaune avec blason royal décentré à gauche, rouge.',
    common_confusions: []
  },
  {
    id: 'gb',
    name: 'Royaume-Uni',
    flagEmoji: '🇬🇧',
    difficulty: 'facile',
    continent: 'Europe',
    capital: 'Londres',
    region: 'Europe occidentale',
    fun_fact: 'L\'Union Jack superpose les croix de Saint-Georges (Angleterre), Saint-André (Écosse) et Saint-Patrick (Irlande).',
    mnemonic: 'Union Jack : croix rouge sur fond blanc et croix blanche et rouge en diagonale sur fond bleu.',
    common_confusions: [
      { countryId: 'au', countryName: 'Australie', flagEmoji: '🇦🇺', explanation: 'L\'Australie intègre l\'Union Jack dans le coin supérieur gauche avec des étoiles.' },
      { countryId: 'nz', countryName: 'Nouvelle-Zélande', flagEmoji: '🇳🇿', explanation: 'La Nouvelle-Zélande a l\'Union Jack en canton avec 4 étoiles rouges bordées de blanc.' }
    ]
  },
  {
    id: 'ru',
    name: 'Russie',
    flagEmoji: '🇷🇺',
    difficulty: 'facile',
    continent: 'Europe',
    capital: 'Moscou',
    region: 'Europe orientale',
    fun_fact: 'Inspiré par Pierre le Grand à la fin du XVIIe siècle d\'après le pavillon maritime hollandais.',
    mnemonic: 'Blanc en haut, bleu au milieu, rouge en bas (couleurs panslaves).',
    common_confusions: [
      { countryId: 'nl', countryName: 'Pays-Bas', flagEmoji: '🇳🇱', explanation: 'Les Pays-Bas ont le ROUGE en haut et le BLANC au milieu.' },
      { countryId: 'rs', countryName: 'Serbie', flagEmoji: '🇷🇸', explanation: 'La Serbie a les bandes inversées : rouge en haut, bleu au milieu, blanc en bas.' }
    ]
  },
  {
    id: 'ua',
    name: 'Ukraine',
    flagEmoji: '🇺🇦',
    difficulty: 'facile',
    continent: 'Europe',
    capital: 'Kiev',
    region: 'Europe orientale',
    fun_fact: 'Représente traditionnellement le ciel bleu infini au-dessus des champs de blé dorés.',
    mnemonic: 'Deux bandes horizontales : bleu ciel en haut, jaune d\'or en bas.',
    common_confusions: []
  },
  {
    id: 'pl',
    name: 'Pologne',
    flagEmoji: '🇵🇱',
    difficulty: 'facile',
    continent: 'Europe',
    capital: 'Varsovie',
    region: 'Europe centrale',
    fun_fact: 'Couleurs de l\'aigle blanc sur champ de gueules (rouge) remontant au Moyen Âge.',
    mnemonic: 'Deux bandes horizontales : blanc en haut, rouge en bas.',
    common_confusions: [
      { countryId: 'id', countryName: 'Indonésie', flagEmoji: '🇮🇩', explanation: 'L\'Indonésie a le ROUGE en haut et le blanc en bas.' },
      { countryId: 'mc', countryName: 'Monaco', flagEmoji: '🇲🇨', explanation: 'Monaco a aussi le rouge en haut et blanc en bas (proportions plus carrées 4:5).' }
    ]
  },
  {
    id: 'jp',
    name: 'Japon',
    flagEmoji: '🇯🇵',
    difficulty: 'facile',
    continent: 'Asie',
    capital: 'Tokyo',
    region: 'Asie de l\'Est',
    fun_fact: 'Nommé "Hinomaru" (disque solaire), symbolisant le pays du Soleil-Levant.',
    mnemonic: 'Cercle rouge carmin parfaitement centré sur fond blanc immaculé.',
    common_confusions: [
      { countryId: 'bd', countryName: 'Bangladesh', flagEmoji: '🇧🇩', explanation: 'Le Bangladesh a un disque rouge décentré vers la gauche sur fond VERT.' },
      { countryId: 'pw', countryName: 'Palaos', flagEmoji: '🇵🇼', explanation: 'Palaos a un disque JAUNE (la lune) sur fond bleu azur.' }
    ]
  },
  {
    id: 'cn',
    name: 'Chine',
    flagEmoji: '🇨🇳',
    difficulty: 'facile',
    continent: 'Asie',
    capital: 'Pékin',
    region: 'Asie de l\'Est',
    fun_fact: 'La grande étoile représente le Parti communiste, les quatre petites les classes sociales unies.',
    mnemonic: 'Fond rouge vif avec une grande étoile dorée entourée de 4 petites étoiles arquées vers elle.',
    common_confusions: [
      { countryId: 'vn', countryName: 'Vietnam', flagEmoji: '🇻🇳', explanation: 'Le Vietnam a une SEULE grande étoile dorée au centre du fond rouge.' }
    ]
  },
  {
    id: 'in',
    name: 'Inde',
    flagEmoji: '🇮🇳',
    difficulty: 'facile',
    continent: 'Asie',
    capital: 'New Delhi',
    region: 'Asie du Sud',
    fun_fact: 'Le rouet bleu marin à 24 rayons au centre est l\'Ashoka Chakra, la roue de la loi.',
    mnemonic: 'Tiranga : safran en haut, blanc au milieu avec la roue marine, vert en bas.',
    common_confusions: [
      { countryId: 'ne', countryName: 'Niger', flagEmoji: '🇳🇪', explanation: 'Le Niger a orange, blanc, vert mais avec un rond orange au milieu.' }
    ]
  },
  {
    id: 'kr',
    name: 'Corée du Sud',
    flagEmoji: '🇰🇷',
    difficulty: 'facile',
    continent: 'Asie',
    capital: 'Séoul',
    region: 'Asie de l\'Est',
    fun_fact: 'Appelé Taegeukgi : le cercle rouge et bleu symbolise le yin-yang, entouré de 4 trigrammes du I Ching.',
    mnemonic: 'Fond blanc, cercle yin-yang bleu et rouge au milieu, 4 trigrammes noirs dans chaque coin.',
    common_confusions: []
  },
  {
    id: 'tr',
    name: 'Turquie',
    flagEmoji: '🇹🇷',
    difficulty: 'facile',
    continent: 'Asie',
    capital: 'Ankara',
    region: 'Moyen-Orient',
    fun_fact: 'Hérité directement de l\'Empire ottoman, le rouge évoque le sang des martyrs.',
    mnemonic: 'Fond rouge éclatant avec un fin croissant de lune blanc et une étoile à cinq branches.',
    common_confusions: [
      { countryId: 'tn', countryName: 'Tunisie', flagEmoji: '🇹🇳', explanation: 'La Tunisie a le croissant et l\'étoile rouges à l\'intérieur d\'un disque blanc.' }
    ]
  },
  {
    id: 'au',
    name: 'Australie',
    flagEmoji: '🇦🇺',
    difficulty: 'facile',
    continent: 'Océanie',
    capital: 'Canberra',
    region: 'Australasie',
    fun_fact: 'Contient l\'étoile de la Fédération à 7 branches sous l\'Union Jack et la constellation de la Croix du Sud.',
    mnemonic: 'Union Jack en canton, grande étoile à 7 branches sous lui, 5 étoiles de la Croix du Sud blanches à droite.',
    isIsland: true,
    common_confusions: [
      { countryId: 'nz', countryName: 'Nouvelle-Zélande', flagEmoji: '🇳🇿', explanation: 'La Nouvelle-Zélande a 4 étoiles ROUGES liserées de blanc (pas d\'étoile sous l\'Union Jack).' }
    ]
  },
  {
    id: 'za',
    name: 'Afrique du Sud',
    flagEmoji: '🇿🇦',
    difficulty: 'facile',
    continent: 'Afrique',
    capital: 'Pretoria',
    region: 'Afrique australe',
    fun_fact: 'Conçu après la fin de l\'apartheid en 1994, le "Y" horizontal symbolise la convergence des peuples.',
    mnemonic: 'Design unique multicolore avec un grand Y vert horizontal liseré de blanc et jaune.',
    common_confusions: [
      { countryId: 'vu', countryName: 'Vanuatu', flagEmoji: '🇻🇺', explanation: 'Le Vanuatu a aussi un Y horizontal mais noir liseré de jaune avec une défense de sanglier.' }
    ]
  },
  {
    id: 'eg',
    name: 'Égypte',
    flagEmoji: '🇪🇬',
    difficulty: 'facile',
    continent: 'Afrique',
    capital: 'Le Caire',
    region: 'Afrique du Nord',
    fun_fact: 'L\'aigle doré au centre est l\'Aigle de Saladin, symbole du nationalisme arabe.',
    mnemonic: 'Trois bandes rouge, blanc, noir avec l\'Aigle de Saladin doré au milieu.',
    common_confusions: [
      { countryId: 'sy', countryName: 'Syrie', flagEmoji: '🇸🇾', explanation: 'La Syrie a 2 étoiles vertes sur la bande blanche au lieu de l\'aigle.' },
      { countryId: 'ye', countryName: 'Yémen', flagEmoji: '🇾🇪', explanation: 'Le Yémen a le tricolore rouge-blanc-noir sans aucun emblème.' },
      { countryId: 'iq', countryName: 'Irak', flagEmoji: '🇮🇶', explanation: 'L\'Irak a l\'inscription verte "Allahu Akbar" sur la bande blanche.' }
    ]
  },
  {
    id: 'sa',
    name: 'Arabie saoudite',
    flagEmoji: '🇸🇦',
    difficulty: 'facile',
    continent: 'Asie',
    capital: 'Riyad',
    region: 'Moyen-Orient',
    fun_fact: 'Porte la Shahada (profession de foi islamique) au-dessus d\'un sabre droit symbolisant la justice.',
    mnemonic: 'Vert intense avec calligraphie arabe blanche et sabre blanc pointant vers la gauche.',
    common_confusions: []
  },
  {
    id: 'il',
    name: 'Israël',
    flagEmoji: '🇮🇱',
    difficulty: 'facile',
    continent: 'Asie',
    capital: 'Jérusalem',
    region: 'Moyen-Orient',
    fun_fact: 'Inspiré du talit (châle de prière juif), avec l\'étoile de David bleue au centre.',
    mnemonic: 'Fond blanc avec deux bandes horizontales bleues et l\'Étoile de David bleue au milieu.',
    common_confusions: []
  }
];
