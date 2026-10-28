import { Country } from '../types';

export const COUNTRIES_DIFFICILE: Country[] = [
  {
    id: 'dz',
    name: 'Algérie',
    flagEmoji: '🇩🇿',
    difficulty: 'difficile',
    continent: 'Afrique',
    capital: 'Alger',
    region: 'Afrique du Nord',
    fun_fact: 'Le vert symbolise l\'islam et la nature, le blanc la pureté, le rouge le sang des combattants de la guerre d\'indépendance.',
    mnemonic: 'Bicolore vertical vert et blanc avec croissant et étoile rouges centrés à cheval sur les deux bandes.',
    common_confusions: [
      { countryId: 'tn', countryName: 'Tunisie', flagEmoji: '🇹🇳', explanation: 'La Tunisie est entièrement rouge avec un disque blanc central.' },
      { countryId: 'tr', countryName: 'Turquie', flagEmoji: '🇹🇷', explanation: 'La Turquie est entièrement rouge sans bande verte.' }
    ]
  },
  {
    id: 'tn',
    name: 'Tunisie',
    flagEmoji: '🇹🇳',
    difficulty: 'difficile',
    continent: 'Afrique',
    capital: 'Tunis',
    region: 'Afrique du Nord',
    fun_fact: 'Adopté en 1827 par le bey Hussein II, inspiré du pavillon ottoman pour célébrer la résistance maritime.',
    mnemonic: 'Fond rouge vif avec un disque blanc centré abritant un croissant rouge et une étoile à 5 branches rouge.',
    common_confusions: [
      { countryId: 'tr', countryName: 'Turquie', flagEmoji: '🇹🇷', explanation: 'La Turquie a son croissant et son étoile directement sur fond rouge (sans disque blanc).' }
    ]
  },
  {
    id: 'ma',
    name: 'Maroc',
    flagEmoji: '🇲🇦',
    difficulty: 'difficile',
    continent: 'Afrique',
    capital: 'Rabat',
    region: 'Afrique du Nord',
    fun_fact: 'Le pentagramme vert entrelacé au centre est le Sceau de Salomon, symbole de sagesse et de paix.',
    mnemonic: 'Fond rouge cramoisi avec un pentagramme vert (étoile à 5 branches dessinée d\'un seul trait) au centre.',
    common_confusions: [
      { countryId: 'vn', countryName: 'Vietnam', flagEmoji: '🇻🇳', explanation: 'Le Vietnam a une étoile pleine JAUNE sur fond rouge.' }
    ]
  },
  {
    id: 'ly',
    name: 'Libye',
    flagEmoji: '🇱🇾',
    difficulty: 'difficile',
    continent: 'Afrique',
    capital: 'Tripoli',
    region: 'Afrique du Nord',
    fun_fact: 'Repris après 2011, il était le drapeau du Royaume de Libye (1951) avant l\'ère Kadhafi.',
    mnemonic: 'Trois bandes horizontales : rouge, double bande noire avec croissant et étoile blancs, vert.',
    common_confusions: [
      { countryId: 'az', countryName: 'Azerbaïdjan', flagEmoji: '🇦🇿', explanation: 'L\'Azerbaïdjan a du bleu en haut, du rouge au milieu et du vert en bas.' }
    ]
  },
  {
    id: 'sd',
    name: 'Soudan',
    flagEmoji: '🇸🇩',
    difficulty: 'difficile',
    continent: 'Afrique',
    capital: 'Khartoum',
    region: 'Afrique du Nord',
    fun_fact: 'Couleurs panarabes : rouge pour le sacrifice, blanc pour l\'optimisme, noir pour le Mahdisme, vert pour l\'agriculture.',
    mnemonic: 'Trois bandes horizontales rouge, blanc, noir avec un triangle vert le long de la hampe.',
    common_confusions: [
      { countryId: 'ps', countryName: 'Palestine', flagEmoji: '🇵🇸', explanation: 'La Palestine a un triangle ROUGE et des bandes noir, blanc, vert.' },
      { countryId: 'jo', countryName: 'Jordanie', flagEmoji: '🇯🇴', explanation: 'La Jordanie a un triangle rouge orné d\'une étoile blanche à 7 branches.' }
    ]
  },
  {
    id: 'ss',
    name: 'Soudan du Sud',
    flagEmoji: '🇸🇸',
    difficulty: 'difficile',
    continent: 'Afrique',
    capital: 'Djouba',
    region: 'Afrique de l\'Est',
    fun_fact: 'Le plus jeune État souverain du monde (indépendance en 2011).',
    mnemonic: 'Bandes noir, rouge, vert séparées par deux fins liserés blancs, avec triangle bleu et étoile dorée inclinée à gauche.',
    common_confusions: [
      { countryId: 'sd', countryName: 'Soudan', flagEmoji: '🇸🇩', explanation: 'Le Soudan n\'a pas de bleu ni d\'étoile et a un triangle vert simple.' }
    ]
  },
  {
    id: 'er',
    name: 'Érythrée',
    flagEmoji: '🇪🇷',
    difficulty: 'difficile',
    continent: 'Afrique',
    capital: 'Asmara',
    region: 'Afrique de l\'Est',
    fun_fact: 'La couronne de rameaux d\'olivier dorée provient du premier drapeau de 1952 parrainé par l\'ONU.',
    mnemonic: 'Triangle rouge partant de la hampe contenant une couronne d\'olivier dorée, encadré par deux triangles vert (haut) et bleu (bas).',
    common_confusions: []
  },
  {
    id: 'dj',
    name: 'Djibouti',
    flagEmoji: '🇩🇯',
    difficulty: 'difficile',
    continent: 'Afrique',
    capital: 'Djibouti',
    region: 'Afrique de l\'Est',
    fun_fact: 'Bleu ciel pour les Issas (la mer et le ciel), vert pour les Afars (la terre), blanc pour la paix.',
    mnemonic: 'Deux bandes horizontales bleu ciel et vert, avec un triangle blanc à la hampe portant une étoile rouge à 5 pointes.',
    common_confusions: []
  },
  {
    id: 'so',
    name: 'Somalie',
    flagEmoji: '🇸🇴',
    difficulty: 'difficile',
    continent: 'Afrique',
    capital: 'Mogadiscio',
    region: 'Afrique de l\'Est',
    fun_fact: 'Les cinq branches de l\'étoile représentent les 5 régions historiques de la Grande Somalie.',
    mnemonic: 'Fond bleu ciel clair (bleu ONU) avec une étoile blanche à 5 branches au centre.',
    common_confusions: [
      { countryId: 'fm', countryName: 'Micronésie', flagEmoji: '🇫🇲', explanation: 'La Micronésie a 4 étoiles blanches disposées en losange sur fond bleu clair.' },
      { countryId: 'vn', countryName: 'Vietnam', flagEmoji: '🇻🇳', explanation: 'Le Vietnam a une étoile jaune sur fond rouge.' }
    ]
  },
  {
    id: 'et',
    name: 'Éthiopie',
    flagEmoji: '🇪🇹',
    difficulty: 'difficile',
    continent: 'Afrique',
    capital: 'Addis-Abeba',
    region: 'Afrique de l\'Est',
    fun_fact: 'Berceau des couleurs panafricaines (vert, jaune, rouge) adoptées ensuite par de nombreux pays africains.',
    mnemonic: 'Bandes horizontales vert, jaune, rouge avec un disque bleu clair portant une étoile pentagramme dorée rayonnante.',
    common_confusions: [
      { countryId: 'gh', countryName: 'Ghana', flagEmoji: '🇬🇭', explanation: 'Le Ghana a rouge en haut, jaune avec étoile noire, vert en bas.' },
      { countryId: 'bo', countryName: 'Bolivie', flagEmoji: '🇧🇴', explanation: 'La Bolivie a rouge en haut, jaune, vert en bas.' }
    ]
  },
  {
    id: 'ke',
    name: 'Kenya',
    flagEmoji: '🇰🇪',
    difficulty: 'difficile',
    continent: 'Afrique',
    capital: 'Nairobi',
    region: 'Afrique de l\'Est',
    fun_fact: 'Le bouclier masaï traditionnel et les deux lances blanches symbolisent la défense de la liberté acquise.',
    mnemonic: 'Bandes noir, rouge, vert séparées par deux liserés blancs, avec bouclier masaï traditionnel rouge/noir/blanc et 2 lances croisées.',
    common_confusions: [
      { countryId: 'ss', countryName: 'Soudan du Sud', flagEmoji: '🇸🇸', explanation: 'Le Soudan du Sud a un triangle bleu à gauche avec une étoile dorée.' }
    ]
  },
  {
    id: 'ug',
    name: 'Ouganda',
    flagEmoji: '🇺🇬',
    difficulty: 'difficile',
    continent: 'Afrique',
    capital: 'Kampala',
    region: 'Afrique de l\'Est',
    fun_fact: 'La grue royale couronnée au centre est l\'oiseau emblème national réputé pour sa grâce.',
    mnemonic: '6 bandes horizontales répétées : noir, jaune, rouge, noir, jaune, rouge avec une grue couronnée dans un disque blanc.',
    common_confusions: [
      { countryId: 'de', countryName: 'Allemagne', flagEmoji: '🇩🇪', explanation: 'L\'Allemagne n\'a que 3 bandes et pas d\'oiseau.' }
    ]
  },
  {
    id: 'tz',
    name: 'Tanzanie',
    flagEmoji: '🇹🇿',
    difficulty: 'difficile',
    continent: 'Afrique',
    capital: 'Dodoma',
    region: 'Afrique de l\'Est',
    fun_fact: 'Fusion en 1964 des drapeaux du Tanganyika (vert et noir) et de Zanzibar (bleu).',
    mnemonic: 'Diagonale noire bordée de deux liserés jaunes séparant un triangle vert (haut gauche) d\'un triangle bleu (bas droite).',
    common_confusions: [
      { countryId: 'na', countryName: 'Namibie', flagEmoji: '🇳🇦', explanation: 'La Namibie a une diagonale rouge bordée de blanc avec un soleil doré sur le triangle bleu en haut.' }
    ]
  },
  {
    id: 'rw',
    name: 'Rwanda',
    flagEmoji: '🇷🇼',
    difficulty: 'difficile',
    continent: 'Afrique',
    capital: 'Kigali',
    region: 'Afrique de l\'Est',
    fun_fact: 'Adopté en 2001 pour tourner la page du génocide de 1994, remplaçant l\'ancien tricolore rouge-jaune-vert frappé d\'un "R".',
    mnemonic: 'Large bande bleue ciel (moitié supérieure) avec soleil doré à 24 rayons dans le coin droit, bande jaune et verte en bas.',
    common_confusions: [
      { countryId: 'ga', countryName: 'Gabon', flagEmoji: '🇬🇦', explanation: 'Le Gabon a 3 bandes vertes, jaunes, bleues d\'égale largeur sans soleil.' }
    ]
  },
  {
    id: 'bi',
    name: 'Burundi',
    flagEmoji: '🇧🇮',
    difficulty: 'difficile',
    continent: 'Afrique',
    capital: 'Gitega',
    region: 'Afrique de l\'Est',
    fun_fact: 'Les 3 étoiles à 6 branches rouges liserées de vert représentent la devise nationale "Unité, Travail, Progrès".',
    mnemonic: 'Croix de Saint-André blanche en sautoir divisant 4 quartiers (rouges en haut/bas, verts sur les côtés), disque blanc central à 3 étoiles.',
    common_confusions: []
  },
  {
    id: 'mw',
    name: 'Malawi',
    flagEmoji: '🇲🇼',
    difficulty: 'difficile',
    continent: 'Afrique',
    capital: 'Lilongwe',
    region: 'Afrique de l\'Est',
    fun_fact: 'Le soleil rouge levant à 31 rayons symbolise l\'aube de l\'espoir et de la liberté pour l\'Afrique.',
    mnemonic: 'Trois bandes noir, rouge, vert avec un soleil rouge levant à 31 rayons sur la bande noire supérieure.',
    common_confusions: [
      { countryId: 'ke', countryName: 'Kenya', flagEmoji: '🇰🇪', explanation: 'Le Kenya a un bouclier et des lances masaï.' }
    ]
  },
  {
    id: 'zm',
    name: 'Zambie',
    flagEmoji: '🇿🇲',
    difficulty: 'difficile',
    continent: 'Afrique',
    capital: 'Lusaka',
    region: 'Afrique australe',
    fun_fact: 'Unique : les motifs sont tous groupés dans le battant droit inférieur, laissant le champ vert principal libre.',
    mnemonic: 'Fond vert émeraude avec dans le coin inférieur droit trois bandes verticales rouge, noir, orange surmontées d\'un aigle pêcheur orange en vol.',
    common_confusions: []
  },
  {
    id: 'zw',
    name: 'Zimbabwe',
    flagEmoji: '🇿🇼',
    difficulty: 'difficile',
    continent: 'Afrique',
    capital: 'Harare',
    region: 'Afrique australe',
    fun_fact: 'L\'oiseau sculpté en stéatite est l\'Oiseau du Grand Zimbabwe découvert dans les ruines médiévales.',
    mnemonic: '7 bandes vert-jaune-rouge-noir-rouge-jaune-vert avec un triangle blanc à la hampe abritant une étoile rouge et l\'Oiseau du Zimbabwe doré.',
    common_confusions: []
  },
  {
    id: 'bw',
    name: 'Botswana',
    flagEmoji: '🇧🇼',
    difficulty: 'difficile',
    continent: 'Afrique',
    capital: 'Gaborone',
    region: 'Afrique australe',
    fun_fact: 'Le bleu ciel évoque la pluie salvatrice ("Pula"), denrée précieuse dans le désert du Kalahari.',
    mnemonic: 'Fond bleu ciel avec une bande centrale noire bordée de deux fins liserés blancs (rappelant les zèbres nationaux).',
    common_confusions: [
      { countryId: 'ee', countryName: 'Estonie', flagEmoji: '🇪🇪', explanation: 'L\'Estonie a bleu, noir, blanc en trois bandes égales.' }
    ]
  },
  {
    id: 'na',
    name: 'Namibie',
    flagEmoji: '🇳🇦',
    difficulty: 'difficile',
    continent: 'Afrique',
    capital: 'Windhoek',
    region: 'Afrique australe',
    fun_fact: 'Le soleil doré à 12 branches représente la vie et l\'énergie au-dessus du désert du Namib.',
    mnemonic: 'Diagonale rouge liserée de blanc séparant un triangle bleu en haut à gauche (avec soleil doré à 12 rayons) et un triangle vert en bas à droite.',
    common_confusions: [
      { countryId: 'tz', countryName: 'Tanzanie', flagEmoji: '🇹🇿', explanation: 'La Tanzanie a une diagonale noire liserée de jaune sans soleil.' }
    ]
  },
  {
    id: 'ls',
    name: 'Lesotho',
    flagEmoji: '🇱🇸',
    difficulty: 'difficile',
    continent: 'Afrique',
    capital: 'Maseru',
    region: 'Afrique australe',
    fun_fact: 'Le chapeau traditionnel au centre est le "mokorotlo", chapeau conique tressé en paille des Basothos.',
    mnemonic: 'Trois bandes horizontales bleu, blanc, vert avec le chapeau traditionnel mokorotlo noir silhouette au centre de la bande blanche.',
    common_confusions: [
      { countryId: 'sl', countryName: 'Sierra Leone', flagEmoji: '🇸🇱', explanation: 'La Sierra Leone a vert, blanc, bleu sans chapeau.' }
    ]
  },
  {
    id: 'sz',
    name: 'Eswatini',
    flagEmoji: '🇸🇿',
    difficulty: 'difficile',
    continent: 'Afrique',
    capital: 'Mbabane',
    region: 'Afrique australe',
    fun_fact: 'Le bouclier de peau de bœuf bicolore (Emasotsha) est renforcé par deux lances et un bâton de combat orné de plumes.',
    mnemonic: 'Bandes bleu, jaune, cramoisi central, jaune, bleu avec un bouclier traditionnel noir et blanc et deux lances au milieu.',
    common_confusions: []
  },
  {
    id: 'mz',
    name: 'Mozambique',
    flagEmoji: '🇲🇿',
    difficulty: 'difficile',
    continent: 'Afrique',
    capital: 'Maputo',
    region: 'Afrique australe',
    fun_fact: 'Le seul drapeau national au monde arborant un fusil d\'assaut moderne (AK-47 avec baïonnette) croisé avec une houe agricole sur un livre ouvert.',
    mnemonic: 'Bandes vert, noir bordé de blanc, jaune avec un triangle rouge à gauche portant une étoile jaune, un livre ouvert, une houe et une Kalachnikov.',
    common_confusions: []
  },
  {
    id: 'mg',
    name: 'Madagascar',
    flagEmoji: '🇲🇬',
    difficulty: 'difficile',
    continent: 'Afrique',
    capital: 'Antananarivo',
    region: 'Afrique de l\'Est',
    fun_fact: 'Le blanc et rouge rappellent les couleurs du royaume Mérina de la reine Ranavalona III, le vert les peuples côtiers.',
    mnemonic: 'Bande blanche verticale à gauche le long de la hampe, deux bandes horizontales rouge (haut) et verte (bas) à droite.',
    isIsland: true,
    common_confusions: [
      { countryId: 'bj', countryName: 'Bénin', flagEmoji: '🇧🇯', explanation: 'Le Bénin a une bande VERTE à gauche, et jaune et rouge à droite.' }
    ]
  },
  {
    id: 'mu',
    name: 'Maurice',
    flagEmoji: '🇲🇺',
    difficulty: 'difficile',
    continent: 'Afrique',
    capital: 'Port-Louis',
    region: 'Afrique de l\'Est',
    fun_fact: 'Surnommé "Les Quatre Bandes" (The Four Bands) : rouge (lutte), bleu (l\'océan Indien), jaune (la lumière), vert (la canne à sucre).',
    mnemonic: '4 bandes horizontales régulières : rouge, bleu, jaune, vert.',
    isIsland: true,
    common_confusions: [
      { countryId: 'cf', countryName: 'Rép. centrafricaine', flagEmoji: '🇨🇫', explanation: 'La Centrafrique a une bande rouge verticale qui coupe ses 4 bandes horizontales.' }
    ]
  },
  {
    id: 'cv',
    name: 'Cap-Vert',
    flagEmoji: '🇨🇻',
    difficulty: 'difficile',
    continent: 'Afrique',
    capital: 'Praia',
    region: 'Afrique de l\'Ouest',
    fun_fact: 'Le cercle des 10 étoiles dorées représente les 10 îles principales de l\'archipel posées sur le bleu de l\'Atlantique.',
    mnemonic: 'Fond bleu profond avec une bande blanche coupée d\'un liséré rouge, surmontée d\'un cercle de 10 étoiles d\'or décentré vers la gauche.',
    isIsland: true,
    common_confusions: []
  },
  {
    id: 'gm',
    name: 'Gambie',
    flagEmoji: '🇬🇲',
    difficulty: 'difficile',
    continent: 'Afrique',
    capital: 'Banjul',
    region: 'Afrique de l\'Ouest',
    fun_fact: 'La bande bleue centrale bordée de blanc représente le fleuve Gambie qui serpente à travers la forêt (vert) et la savane (rouge).',
    mnemonic: 'Bandes rouge, liseré blanc, bleu au centre, liseré blanc, vert.',
    common_confusions: [
      { countryId: 'bw', countryName: 'Botswana', flagEmoji: '🇧🇼', explanation: 'Le Botswana n\'a pas de rouge ni de vert.' }
    ]
  },
  {
    id: 'sn',
    name: 'Sénégal',
    flagEmoji: '🇸🇳',
    difficulty: 'difficile',
    continent: 'Afrique',
    capital: 'Dakar',
    region: 'Afrique de l\'Ouest',
    fun_fact: 'L\'étoile verte centrale à cinq branches symbolise l\'ouverture spirituelle sur les cinq continents.',
    mnemonic: 'Trois bandes verticales vert, jaune, rouge avec une étoile verte à 5 branches au milieu de la bande jaune.',
    common_confusions: [
      { countryId: 'ml', countryName: 'Mali', flagEmoji: '🇲🇱', explanation: 'Le Mali a vert, jaune, rouge SANS étoile au centre.' },
      { countryId: 'cm', countryName: 'Cameroun', flagEmoji: '🇨🇲', explanation: 'Le Cameroun a une étoile JAUNE au centre de sa bande ROUGE (vert, rouge, jaune).' }
    ]
  },
  {
    id: 'gn',
    name: 'Guinée',
    flagEmoji: '🇬🇳',
    difficulty: 'difficile',
    continent: 'Afrique',
    capital: 'Conakry',
    region: 'Afrique de l\'Ouest',
    fun_fact: 'Premier pays d\'Afrique subsaharienne francophone indépendant en 1958 avec le fameux "Non" de Sékou Touré.',
    mnemonic: 'Trois bandes verticales : rouge, jaune, vert (exact miroir du Mali qui est vert-jaune-rouge).',
    common_confusions: [
      { countryId: 'ml', countryName: 'Mali', flagEmoji: '🇲🇱', explanation: 'Le Mali commence par le VERT à gauche (vert, jaune, rouge).' }
    ]
  },
  {
    id: 'sl',
    name: 'Sierra Leone',
    flagEmoji: '🇸🇱',
    difficulty: 'difficile',
    continent: 'Afrique',
    capital: 'Freetown',
    region: 'Afrique de l\'Ouest',
    fun_fact: 'Vert pour l\'agriculture et les collines, blanc pour l\'unité et la justice, bleu pour le port naturel de Freetown.',
    mnemonic: 'Trois bandes horizontales : vert en haut, blanc au milieu, bleu ciel en bas.',
    common_confusions: [
      { countryId: 'uz', countryName: 'Ouzbékistan', flagEmoji: '🇺🇿', explanation: 'L\'Ouzbékistan a le bleu en haut, le vert en bas avec un croissant et 12 étoiles.' }
    ]
  },
  {
    id: 'lr',
    name: 'Liberia',
    flagEmoji: '🇱🇷',
    difficulty: 'difficile',
    continent: 'Afrique',
    capital: 'Monrovia',
    region: 'Afrique de l\'Ouest',
    fun_fact: 'Fondé par des esclaves afro-américains libérés au XIXe siècle, son drapeau s\'inspire directement de la bannière américaine.',
    mnemonic: '11 bandes horizontales rouge et blanc, avec une SEULE grande étoile blanche dans le carré bleu en haut à gauche.',
    common_confusions: [
      { countryId: 'us', countryName: 'États-Unis', flagEmoji: '🇺🇸', explanation: 'Les USA ont 50 étoiles et 13 bandes.' },
      { countryId: 'my', countryName: 'Malaisie', flagEmoji: '🇲🇾', explanation: 'La Malaisie a un croissant et une étoile jaune à 14 branches.' }
    ]
  },
  {
    id: 'ci',
    name: 'Côte d\'Ivoire',
    flagEmoji: '🇨🇮',
    difficulty: 'difficile',
    continent: 'Afrique',
    capital: 'Yamoussoukro',
    region: 'Afrique de l\'Ouest',
    fun_fact: 'L\'orange évoque la savane du nord, le vert les forêts du sud, le blanc la paix.',
    mnemonic: 'Bandes verticales : ORANGE à la hampe, blanc au centre, vert au battant.',
    common_confusions: [
      { countryId: 'ie', countryName: 'Irlande', flagEmoji: '🇮🇪', explanation: 'L\'Irlande est inversée : VERT à la hampe, blanc au centre, orange au battant.' }
    ]
  },
  {
    id: 'bf',
    name: 'Burkina Faso',
    flagEmoji: '🇧🇫',
    difficulty: 'difficile',
    continent: 'Afrique',
    capital: 'Ouagadougou',
    region: 'Afrique de l\'Ouest',
    fun_fact: 'Adopté sous Thomas Sankara en 1984 en remplacement de l\'ancien drapeau de la Haute-Volta.',
    mnemonic: 'Deux bandes horizontales rouge en haut et vert en bas, avec une étoile dorée à 5 branches au centre.',
    common_confusions: [
      { countryId: 'cm', countryName: 'Cameroun', flagEmoji: '🇨🇲', explanation: 'Le Cameroun a des bandes verticales.' }
    ]
  },
  {
    id: 'ne',
    name: 'Niger',
    flagEmoji: '🇳🇪',
    difficulty: 'difficile',
    continent: 'Afrique',
    capital: 'Niamey',
    region: 'Afrique de l\'Ouest',
    fun_fact: 'Le disque orange central figure le soleil brûlant du Sahel.',
    mnemonic: 'Trois bandes horizontales orange safran, blanc, vert avec un rond orange au milieu de la bande blanche.',
    common_confusions: [
      { countryId: 'in', countryName: 'Inde', flagEmoji: '🇮🇳', explanation: 'L\'Inde a un disque/rouet bleu marine (Chakra) avec 24 rayons.' }
    ]
  },
  {
    id: 'tg',
    name: 'Togo',
    flagEmoji: '🇹🇬',
    difficulty: 'difficile',
    continent: 'Afrique',
    capital: 'Lomé',
    region: 'Afrique de l\'Ouest',
    fun_fact: 'Dessiné par Paul Ahyi, grand sculpteur togolais, avec le nombre d\'or dans ses proportions.',
    mnemonic: '5 bandes horizontales alternées vert et jaune, avec un carré rouge en haut à gauche portant une étoile blanche.',
    common_confusions: [
      { countryId: 'lr', countryName: 'Liberia', flagEmoji: '🇱🇷', explanation: 'Le Liberia a des bandes rouge et blanc et un carré bleu.' }
    ]
  },
  {
    id: 'bj',
    name: 'Bénin',
    flagEmoji: '🇧🇯',
    difficulty: 'difficile',
    continent: 'Afrique',
    capital: 'Porto-Novo',
    region: 'Afrique de l\'Ouest',
    fun_fact: 'Réadopté en 1990 lors du renouveau démocratique après l\'abandon du régime marxiste.',
    mnemonic: 'Bande verte verticale sur la gauche (deux cinquièmes), deux bandes horizontales jaune (haut) et rouge (bas) sur la droite.',
    common_confusions: [
      { countryId: 'mg', countryName: 'Madagascar', flagEmoji: '🇲🇬', explanation: 'Madagascar a une bande BLANCHE à gauche (pas verte).' }
    ]
  },
  {
    id: 'cf',
    name: 'République centrafricaine',
    flagEmoji: '🇨🇫',
    difficulty: 'difficile',
    continent: 'Afrique',
    capital: 'Bangui',
    region: 'Afrique centrale',
    fun_fact: 'Conçu par Barthélemy Boganda pour réunir les couleurs françaises (bleu, blanc, rouge) et panafricaines (vert, jaune, rouge).',
    mnemonic: '4 bandes horizontales bleu, blanc, vert, jaune, traversées au milieu par une bande verticale rouge, étoile dorée dans le coin supérieur gauche.',
    common_confusions: []
  },
  {
    id: 'cm',
    name: 'Cameroun',
    flagEmoji: '🇨🇲',
    difficulty: 'difficile',
    continent: 'Afrique',
    capital: 'Yaoundé',
    region: 'Afrique centrale',
    fun_fact: 'Surnommé "l\'Étoile de l\'Unité", deuxième pays africain à adopter le tricolore panafricain.',
    mnemonic: 'Trois bandes verticales vert, rouge, jaune avec une étoile dorée à 5 branches au centre de la bande rouge.',
    common_confusions: [
      { countryId: 'sn', countryName: 'Sénégal', flagEmoji: '🇸🇳', explanation: 'Le Sénégal a vert, jaune, rouge avec une étoile verte sur la bande jaune.' },
      { countryId: 'ml', countryName: 'Mali', flagEmoji: '🇲🇱', explanation: 'Le Mali a vert, jaune, rouge sans étoile.' }
    ]
  },
  {
    id: 'ng',
    name: 'Nigeria',
    flagEmoji: '🇳🇬',
    difficulty: 'difficile',
    continent: 'Afrique',
    capital: 'Abuja',
    region: 'Afrique de l\'Ouest',
    fun_fact: 'Conçu par Michael Taiwo Akinkunmi en 1959 alors qu\'il était étudiant à Norwich.',
    mnemonic: 'Trois bandes verticales : vert émeraude, blanc immaculé, vert émeraude.',
    common_confusions: []
  },
  {
    id: 'ml',
    name: 'Mali',
    flagEmoji: '🇲🇱',
    difficulty: 'difficile',
    continent: 'Afrique',
    capital: 'Bamako',
    region: 'Afrique de l\'Ouest',
    fun_fact: 'Portait à l\'origine un idéogramme noir "Kanaga" représentant un être humain stylisé, retiré en 1961.',
    mnemonic: 'Trois bandes verticales vert, jaune, rouge épurées sans aucune étoile ni emblème.',
    common_confusions: [
      { countryId: 'gn', countryName: 'Guinée', flagEmoji: '🇬🇳', explanation: 'La Guinée est inversée : rouge, jaune, vert.' },
      { countryId: 'sn', countryName: 'Sénégal', flagEmoji: '🇸🇳', explanation: 'Le Sénégal a une étoile verte au milieu.' }
    ]
  }
];
