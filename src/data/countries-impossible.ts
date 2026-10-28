import { Country } from '../types';

export const COUNTRIES_IMPOSSIBLE: Country[] = [
  {
    id: 'bs',
    name: 'Bahamas',
    flagEmoji: '🇧🇸',
    difficulty: 'impossible',
    continent: 'Amérique du Nord',
    capital: 'Nassau',
    region: 'Caraïbes',
    fun_fact: 'L\'aigue-marine symbolise l\'eau turquoise des Caraïbes, l\'or les plages de sable, le triangle noir la force du peuple uni.',
    mnemonic: 'Bandes aigue-marine, or au milieu, aigue-marine avec un triangle noir pointant vers la droite à la hampe.',
    isIsland: true,
    common_confusions: []
  },
  {
    id: 'bb',
    name: 'Barbade',
    flagEmoji: '🇧🇧',
    difficulty: 'impossible',
    continent: 'Amérique du Nord',
    capital: 'Bridgetown',
    region: 'Caraïbes',
    fun_fact: 'Le trident noir brisé au centre est celui de Neptune, symbolisant la rupture avec le passé colonial britannique.',
    mnemonic: 'Trois bandes verticales outremer, or, outremer avec une tête de trident noir brisé au milieu.',
    isIsland: true,
    common_confusions: []
  },
  {
    id: 'dm',
    name: 'Dominique',
    flagEmoji: '🇩🇲',
    difficulty: 'impossible',
    continent: 'Amérique du Nord',
    capital: 'Roseau',
    region: 'Caraïbes',
    fun_fact: 'Un des deux seuls drapeaux au monde avec du violet/pourpre (sur les plumes du perroquet Sisserou).',
    mnemonic: 'Fond vert forêt avec une croix tricolore jaune-blanc-noir et un disque rouge central abritant le perroquet Sisserou violet entouré de 10 étoiles vertes.',
    isIsland: true,
    common_confusions: []
  },
  {
    id: 'ht',
    name: 'Haïti',
    flagEmoji: '🇭🇹',
    difficulty: 'impossible',
    continent: 'Amérique du Nord',
    capital: 'Port-au-Prince',
    region: 'Caraïbes',
    fun_fact: 'Créé en 1803 par Jean-Jacques Dessalines en arrachant la bande blanche du drapeau français.',
    mnemonic: 'Bicolore horizontal bleu en haut et rouge en bas avec un carré blanc central affichant le palmier royal surmonté du bonnet phrygien et entouré de canons.',
    isIsland: true,
    common_confusions: [
      { countryId: 'li', countryName: 'Liechtenstein', flagEmoji: '🇱🇮', explanation: 'Le Liechtenstein a une couronne dorée dans le coin supérieur gauche.' }
    ]
  },
  {
    id: 'jm',
    name: 'Jamaïque',
    flagEmoji: '🇯🇲',
    difficulty: 'impossible',
    continent: 'Amérique du Nord',
    capital: 'Kingston',
    region: 'Caraïbes',
    fun_fact: 'L\'unique drapeau national actuel qui ne contient aucune des couleurs rouge, blanc ou bleu.',
    mnemonic: 'Croix de Saint-André dorée en sautoir divisant 4 triangles : deux verts (haut et bas) et deux noirs (gauche et droite).',
    isIsland: true,
    common_confusions: []
  },
  {
    id: 'tt',
    name: 'Trinité-et-Tobago',
    flagEmoji: '🇹🇹',
    difficulty: 'impossible',
    continent: 'Amérique du Nord',
    capital: 'Port-d\'Espagne',
    region: 'Caraïbes',
    fun_fact: 'Le rouge représente le feu et l\'énergie, le noir la terre et le dévouement, le blanc l\'eau et l\'égalité.',
    mnemonic: 'Fond rouge vif traversé diagonalement du coin supérieur gauche au coin inférieur droit par une large bande noire bordée de deux liserés blancs.',
    isIsland: true,
    common_confusions: []
  },
  {
    id: 'do',
    name: 'République dominicaine',
    flagEmoji: '🇩🇴',
    difficulty: 'impossible',
    continent: 'Amérique du Nord',
    capital: 'Saint-Domingue',
    region: 'Caraïbes',
    fun_fact: 'Seul drapeau national avec une Bible ouverte au centre de ses armoiries (ouverte sur Jean 8:32 : "La vérité vous rendra libres").',
    mnemonic: 'Croix blanche centrée divisant 4 quartiers alternés bleu outremer et rouge, avec le blason national au centre.',
    isIsland: true,
    common_confusions: []
  },
  {
    id: 'cu',
    name: 'Cuba',
    flagEmoji: '🇨🇺',
    difficulty: 'impossible',
    continent: 'Amérique du Nord',
    capital: 'La Havane',
    region: 'Caraïbes',
    fun_fact: 'Créé en 1849 par Narciso López, la "Estrella Solitaria" illumine la marche vers la liberté.',
    mnemonic: '5 bandes horizontales alternées bleu et blanc, avec un triangle équilatéral rouge à la hampe abritant une étoile blanche.',
    isIsland: true,
    common_confusions: [
      { countryId: 'pr', countryName: 'Porto Rico', flagEmoji: '🇵🇷', explanation: 'Porto Rico a les couleurs inversées : triangle bleu et bandes rouges.' }
    ]
  },
  {
    id: 'fj',
    name: 'Fidji',
    flagEmoji: '🇫🇯',
    difficulty: 'impossible',
    continent: 'Océanie',
    capital: 'Suva',
    region: 'Mélanésie',
    fun_fact: 'Le lion britannique tient une cabosse de cacao entre ses pattes sur le blason.',
    mnemonic: 'Fond bleu ciel clair (pavillon colonial) avec l\'Union Jack dans le canton supérieur gauche et le blason fidjien à droite.',
    isIsland: true,
    common_confusions: [
      { countryId: 'tv', countryName: 'Tuvalu', flagEmoji: '🇹🇻', explanation: 'Tuvalu a des étoiles jaunes disposées en constellation au lieu d\'un blason.' }
    ]
  },
  {
    id: 'pg',
    name: 'Papouasie-Nouvelle-Guinée',
    flagEmoji: '🇵🇬',
    difficulty: 'impossible',
    continent: 'Océanie',
    capital: 'Port Moresby',
    region: 'Mélanésie',
    fun_fact: 'Conçu en 1971 par Susan Karike, une écolière de 15 ans, lors d\'un concours national.',
    mnemonic: 'Divisé en diagonale : triangle noir en bas à gauche avec la Croix du Sud blanche, triangle rouge en haut à droite avec un Paradisier de Raggi doré en vol.',
    isIsland: true,
    common_confusions: []
  },
  {
    id: 'ws',
    name: 'Samoa',
    flagEmoji: '🇼🇸',
    difficulty: 'impossible',
    continent: 'Océanie',
    capital: 'Apia',
    region: 'Polynésie',
    fun_fact: 'Les 5 étoiles blanches dans le canton bleu forment la constellation de la Croix du Sud.',
    mnemonic: 'Fond rouge avec un canton bleu dans le coin supérieur gauche abritant 5 étoiles blanches de tailles inégales.',
    isIsland: true,
    common_confusions: [
      { countryId: 'tw', countryName: 'Taïwan', flagEmoji: '🇹🇼', explanation: 'Taïwan a un soleil blanc à 12 pointes dans son canton bleu.' }
    ]
  },
  {
    id: 'to',
    name: 'Tonga',
    flagEmoji: '🇹🇴',
    difficulty: 'impossible',
    continent: 'Océanie',
    capital: 'Nuku\'alofa',
    region: 'Polynésie',
    fun_fact: 'La constitution stipule que le drapeau ne peut jamais être modifié.',
    mnemonic: 'Fond rouge éclatant avec un canton blanc en haut à gauche contenant une croix grecque rouge.',
    isIsland: true,
    common_confusions: [
      { countryId: 'ch', countryName: 'Suisse', flagEmoji: '🇨🇭', explanation: 'La Suisse a une croix blanche sur fond rouge.' }
    ]
  },
  {
    id: 'va',
    name: 'Vatican',
    flagEmoji: '🇻🇦',
    difficulty: 'impossible',
    continent: 'Europe',
    capital: 'Cité du Vatican',
    region: 'Europe méridionale',
    fun_fact: 'L\'un des deux seuls drapeaux nationaux carrés au monde (avec la Suisse).',
    mnemonic: 'Bicolore vertical jaune à la hampe et blanc au battant avec les clés de Saint-Pierre croisées (or et argent) surmontées de la tiare papale.',
    common_confusions: []
  },
  {
    id: 'mv',
    name: 'Maldives',
    flagEmoji: '🇲🇻',
    difficulty: 'impossible',
    continent: 'Asie',
    capital: 'Malé',
    region: 'Asie du Sud',
    fun_fact: 'Le pays le plus bas et le plus plat du monde (altitude moyenne de 1,5 mètre).',
    mnemonic: 'Fond rouge avec un rectangle vert en son centre portant un croissant de lune blanc tourné vers la droite.',
    isIsland: true,
    common_confusions: []
  },
  {
    id: 'bh',
    name: 'Bahreïn',
    flagEmoji: '🇧🇭',
    difficulty: 'impossible',
    continent: 'Asie',
    capital: 'Manama',
    region: 'Moyen-Orient',
    fun_fact: 'Les 5 pointes blanches en dents de scie représentent les 5 piliers de l\'islam.',
    mnemonic: 'Bande blanche à gauche séparée du champ rouge vif à droite par une ligne en dents de scie à 5 pointes.',
    isIsland: true,
    common_confusions: [
      { countryId: 'qa', countryName: 'Qatar', flagEmoji: '🇶🇦', explanation: 'Le Qatar est marron bordeaux/marron et compte 9 pointes blanches au lieu de 5.' }
    ]
  },
  {
    id: 'kw',
    name: 'Koweït',
    flagEmoji: '🇰🇼',
    difficulty: 'impossible',
    continent: 'Asie',
    capital: 'Koweït',
    region: 'Moyen-Orient',
    fun_fact: 'Inspiré d\'un poème de Safie Al-Deen Al-Hali célébrant les actes blancs, batailles noires, terres vertes et épées rouges.',
    mnemonic: 'Trois bandes horizontales vert, blanc, rouge avec un trapèze noir tronqué le long de la hampe.',
    common_confusions: [
      { countryId: 'ae', countryName: 'Émirats arabes unis', flagEmoji: '🇦🇪', explanation: 'Les Émirats ont une bande verticale rouge simple à gauche (pas un trapèze).' },
      { countryId: 'jo', countryName: 'Jordanie', flagEmoji: '🇯🇴', explanation: 'La Jordanie a un triangle pointu rouge avec une étoile.' }
    ]
  },
  {
    id: 'qa',
    name: 'Qatar',
    flagEmoji: '🇶🇦',
    difficulty: 'impossible',
    continent: 'Asie',
    capital: 'Doha',
    region: 'Moyen-Orient',
    fun_fact: 'Le seul drapeau national dont la largeur dépasse le double de la hauteur (ratio exceptionnel de 11:28).',
    mnemonic: 'Bande blanche à gauche et couleur pourpre/marron bordeaux à droite séparées par une ligne en dents de scie à 9 pointes.',
    common_confusions: [
      { countryId: 'bh', countryName: 'Bahreïn', flagEmoji: '🇧🇭', explanation: 'Bahreïn est rouge vif avec seulement 5 pointes et un ratio standard.' }
    ]
  },
  {
    id: 'ye',
    name: 'Yémen',
    flagEmoji: '🇾🇪',
    difficulty: 'impossible',
    continent: 'Asie',
    capital: 'Sanaa',
    region: 'Moyen-Orient',
    fun_fact: 'Adopté lors de la réunification du Yémen du Nord et du Yémen du Sud en 1990.',
    mnemonic: 'Trois bandes horizontales rouge, blanc, noir sans le moindre symbole ni blason.',
    common_confusions: [
      { countryId: 'eg', countryName: 'Égypte', flagEmoji: '🇪🇬', explanation: 'L\'Égypte a l\'aigle doré au milieu.' },
      { countryId: 'sy', countryName: 'Syrie', flagEmoji: '🇸🇾', explanation: 'La Syrie a 2 étoiles vertes sur la bande blanche.' }
    ]
  },
  {
    id: 'om',
    name: 'Oman',
    flagEmoji: '🇴🇲',
    difficulty: 'impossible',
    continent: 'Asie',
    capital: 'Mascate',
    region: 'Moyen-Orient',
    fun_fact: 'Le poignard recourbé dans son fourreau au centre du canton s\'appelle le "khanjar", symbole traditionnel omani.',
    mnemonic: 'Bande verticale rouge à gauche portant le Khanjar blanc au sommet, trois bandes horizontales blanc, rouge, vert à droite.',
    common_confusions: []
  },
  {
    id: 'ae',
    name: 'Émirats arabes unis',
    flagEmoji: '🇦🇪',
    difficulty: 'impossible',
    continent: 'Asie',
    capital: 'Abou Dabi',
    region: 'Moyen-Orient',
    fun_fact: 'Créé en 1971 lors de l\'unification des sept émirats sous la direction du Cheikh Zayed.',
    mnemonic: 'Bande verticale rouge à gauche le long de la hampe, trois bandes horizontales vert (haut), blanc (milieu), noir (bas).',
    common_confusions: [
      { countryId: 'kw', countryName: 'Koweït', flagEmoji: '🇰🇼', explanation: 'Le Koweït a un trapèze noir à gauche au lieu d\'une bande rouge.' }
    ]
  },
  {
    id: 'ps',
    name: 'Palestine',
    flagEmoji: '🇵🇸',
    difficulty: 'impossible',
    continent: 'Asie',
    capital: 'Jérusalem-Est / Ramallah',
    region: 'Moyen-Orient',
    fun_fact: 'Drapeau de la Révolte arabe de 1916 contre l\'Empire ottoman.',
    mnemonic: 'Trois bandes horizontales noir (haut), blanc (milieu), vert (bas) avec un triangle rouge à la hampe.',
    common_confusions: [
      { countryId: 'jo', countryName: 'Jordanie', flagEmoji: '🇯🇴', explanation: 'La Jordanie a une étoile blanche à 7 branches dans le triangle rouge.' },
      { countryId: 'sd', countryName: 'Soudan', flagEmoji: '🇸🇩', explanation: 'Le Soudan a le triangle VERT et la bande du haut rouge.' }
    ]
  },
  {
    id: 'sy',
    name: 'Syrie',
    flagEmoji: '🇸🇾',
    difficulty: 'impossible',
    continent: 'Asie',
    capital: 'Damas',
    region: 'Moyen-Orient',
    fun_fact: 'Les deux étoiles vertes représentaient à l\'origine la Syrie et l\'Égypte au sein de la République arabe unie (1958-1961).',
    mnemonic: 'Trois bandes horizontales rouge, blanc, noir avec deux étoiles vertes à 5 branches alignées sur la bande blanche.',
    common_confusions: [
      { countryId: 'iq', countryName: 'Irak', flagEmoji: '🇮🇶', explanation: 'L\'Irak a l\'inscription en arabe "Allahu Akbar".' },
      { countryId: 'eg', countryName: 'Égypte', flagEmoji: '🇪🇬', explanation: 'L\'Égypte a un aigle doré.' }
    ]
  },
  {
    id: 'af',
    name: 'Afghanistan',
    flagEmoji: '🇦🇫',
    difficulty: 'impossible',
    continent: 'Asie',
    capital: 'Kaboul',
    region: 'Asie du Sud',
    fun_fact: 'Le pays qui a le plus changé de drapeau national au XXe siècle (plus de 25 fois).',
    mnemonic: 'Tricolore vertical noir, rouge, vert avec les armoiries nationales traditionnelles blanches (mosquée avec mirhab et minbar entourée d\'épis de blé) au centre.',
    common_confusions: []
  },
  {
    id: 'bd',
    name: 'Bangladesh',
    flagEmoji: '🇧🇩',
    difficulty: 'impossible',
    continent: 'Asie',
    capital: 'Dacca',
    region: 'Asie du Sud',
    fun_fact: 'Le disque rouge est volontairement décalé vers la hampe pour paraître parfaitement centré lorsque le drapeau flotte au vent.',
    mnemonic: 'Fond vert bouteille sombre avec un disque rouge plein légèrement décentré vers la gauche.',
    common_confusions: [
      { countryId: 'jp', countryName: 'Japon', flagEmoji: '🇯🇵', explanation: 'Le Japon a un fond BLANC avec disque centré.' },
      { countryId: 'pw', countryName: 'Palaos', flagEmoji: '🇵🇼', explanation: 'Palaos a un disque JAUNE sur fond BLEU azur.' }
    ]
  },
  {
    id: 'lk',
    name: 'Sri Lanka',
    flagEmoji: '🇱🇰',
    difficulty: 'impossible',
    continent: 'Asie',
    capital: 'Sri Jayawardenepura Kotte',
    region: 'Asie du Sud',
    fun_fact: 'Le Lion d\'or armé d\'un sabre (Kastane) représente la majorité cinghalaise ("peuple du lion").',
    mnemonic: 'Panneau bordeaux avec un lion doré tenant une épée entouré de 4 feuilles de pipal, flanqué à gauche de deux bandes verte et orange dans un cadre doré.',
    isIsland: true,
    common_confusions: []
  },
  {
    id: 'kp',
    name: 'Corée du Nord',
    flagEmoji: '🇰🇵',
    difficulty: 'impossible',
    continent: 'Asie',
    capital: 'Pyongyang',
    region: 'Asie de l\'Est',
    fun_fact: 'Adopté en 1948 lors de la fondation de la république, l\'étoile rouge symbolise le socialisme et la flamme révolutionnaire.',
    mnemonic: 'Large bande rouge centrale bordée de liserés blancs et de bandes bleues en haut et en bas, avec une étoile rouge dans un cercle blanc décentrée à gauche.',
    common_confusions: [
      { countryId: 'la', countryName: 'Laos', flagEmoji: '🇱🇦', explanation: 'Le Laos a du bleu au centre et un disque blanc plein sans étoile.' }
    ]
  },
  {
    id: 'bz',
    name: 'Belize',
    flagEmoji: '🇧🇿',
    difficulty: 'impossible',
    continent: 'Amérique du Nord',
    capital: 'Belmopan',
    region: 'Amérique centrale',
    fun_fact: 'Seul drapeau national officiel représentant des êtres humains au centre (deux bûcherons d\'ethnies différentes armés d\'outils).',
    mnemonic: 'Fond bleu roi encadré d\'une fine bande rouge en haut et en bas, avec un grand disque blanc portant le blason aux deux bûcherons et l\'acajou.',
    common_confusions: []
  },
  {
    id: 'cr',
    name: 'Costa Rica',
    flagEmoji: '🇨🇷',
    difficulty: 'impossible',
    continent: 'Amérique du Nord',
    capital: 'San José',
    region: 'Amérique centrale',
    fun_fact: 'Inspiré du drapeau français par Pacífica Fernández Oreamuno, épouse du président, en 1848.',
    mnemonic: '5 bandes horizontales symétriques : bleu, blanc, large bande rouge au centre (deux fois plus large), blanc, bleu.',
    common_confusions: [
      { countryId: 'th', countryName: 'Thaïlande', flagEmoji: '🇹🇭', explanation: 'La Thaïlande a les couleurs inversées : rouge aux extrémités et BLEU au milieu.' }
    ]
  },
  {
    id: 'pa',
    name: 'Panama',
    flagEmoji: '🇵🇦',
    difficulty: 'impossible',
    continent: 'Amérique du Nord',
    capital: 'Panama',
    region: 'Amérique centrale',
    fun_fact: 'Quatre quartiers représentant l\'alternance pacifique entre libéraux (rouge) et conservateurs (bleu).',
    mnemonic: 'Quatre quartiers : en haut à gauche blanc avec étoile bleue, en haut à droite rouge, en bas à gauche bleu, en bas à droite blanc avec étoile rouge.',
    common_confusions: []
  },
  {
    id: 'sv',
    name: 'El Salvador',
    flagEmoji: '🇸🇻',
    difficulty: 'impossible',
    continent: 'Amérique du Nord',
    capital: 'San Salvador',
    region: 'Amérique centrale',
    fun_fact: 'L\'écusson central comprend un triangle équilatéral symbolisant l\'égalité, cinq volcans et le bonnet phrygien.',
    mnemonic: 'Trois bandes horizontales bleu cobalt, blanc, bleu cobalt avec les armoiries nationales au centre de la bande blanche.',
    common_confusions: [
      { countryId: 'ni', countryName: 'Nicaragua', flagEmoji: '🇳🇮', explanation: 'Le Nicaragua a un triangle similaire mais les inscriptions circulaires autour diffèrent.' },
      { countryId: 'hn', countryName: 'Honduras', flagEmoji: '🇭🇳', explanation: 'Le Honduras a 5 étoiles bleues au milieu au lieu d\'un blason.' }
    ]
  },
  {
    id: 'gt',
    name: 'Guatemala',
    flagEmoji: '🇬🇹',
    difficulty: 'impossible',
    continent: 'Amérique du Nord',
    capital: 'Guatemala',
    region: 'Amérique centrale',
    fun_fact: 'L\'oiseau perché sur le parchemin est le Quetzal resplendissant, symbole sacré de liberté qui ne peut vivre en cage.',
    mnemonic: 'Trois bandes verticales bleu ciel, blanc, bleu ciel avec le quetzal perché sur un parchemin au-dessus de deux fusils croisés au centre.',
    common_confusions: []
  },
  {
    id: 'hn',
    name: 'Honduras',
    flagEmoji: '🇭🇳',
    difficulty: 'impossible',
    continent: 'Amérique du Nord',
    capital: 'Tegucigalpa',
    region: 'Amérique centrale',
    fun_fact: 'Les 5 étoiles bleues au centre représentent les 5 anciennes nations de la République fédérale d\'Amérique centrale.',
    mnemonic: 'Trois bandes horizontales bleu turquoise, blanc, bleu turquoise avec 5 étoiles bleues disposées en X au centre.',
    common_confusions: [
      { countryId: 'sv', countryName: 'El Salvador', flagEmoji: '🇸🇻', explanation: 'El Salvador a des armoiries circulaires au centre au lieu d\'étoiles.' }
    ]
  },
  {
    id: 'ni',
    name: 'Nicaragua',
    flagEmoji: '🇳🇮',
    difficulty: 'impossible',
    continent: 'Amérique du Nord',
    capital: 'Managua',
    region: 'Amérique centrale',
    fun_fact: 'Comprend un arc-en-ciel au sommet du triangle des armoiries, ce qui en fait l\'un des seuls drapeaux avec du violet.',
    mnemonic: 'Trois bandes horizontales bleu cobalt, blanc, bleu cobalt avec le blason triangulaire aux 5 volcans et arc-en-ciel au centre.',
    common_confusions: [
      { countryId: 'sv', countryName: 'El Salvador', flagEmoji: '🇸🇻', explanation: 'El Salvador a des rameaux d\'olivier entourant son triangle.' }
    ]
  },
  {
    id: 'gy',
    name: 'Guyana',
    flagEmoji: '🇬🇾',
    difficulty: 'impossible',
    continent: 'Amérique du Sud',
    capital: 'Georgetown',
    region: 'Amérique du Sud',
    fun_fact: 'Surnommé "La Pointe de flèche dorée" (The Golden Arrowhead), conçu par le célèbre vexillologue Whitney Smith.',
    mnemonic: 'Champ vert orné d\'un grand triangle doré bordé de blanc et d\'un triangle rouge bordé de noir à la hampe formant une pointe de flèche.',
    common_confusions: []
  },
  {
    id: 'sr',
    name: 'Suriname',
    flagEmoji: '🇸🇷',
    difficulty: 'impossible',
    continent: 'Amérique du Sud',
    capital: 'Paramaribo',
    region: 'Amérique du Sud',
    fun_fact: 'L\'étoile dorée à 5 branches au centre symbolise l\'unité des 5 grands groupes ethniques du pays.',
    mnemonic: '5 bandes horizontales vert, liseré blanc, large rouge au centre, liseré blanc, vert avec une étoile dorée à 5 branches au centre.',
    common_confusions: []
  },
  {
    id: 'ec',
    name: 'Équateur',
    flagEmoji: '🇪🇨',
    difficulty: 'impossible',
    continent: 'Amérique du Sud',
    capital: 'Quito',
    region: 'Amérique du Sud',
    fun_fact: 'Le condor des Andes aux ailes déployées au sommet du blason veille sur le mont Chimborazo et le fleuve Guayas.',
    mnemonic: 'Bandes jaune (50% de la hauteur), bleu et rouge avec les armoiries complètes au condor au centre.',
    common_confusions: [
      { countryId: 'co', countryName: 'Colombie', flagEmoji: '🇨🇴', explanation: 'La Colombie a exactement les mêmes bandes mais SANS blason.' },
      { countryId: 've', countryName: 'Venezuela', flagEmoji: '🇻🇪', explanation: 'Le Venezuela a trois bandes d\'égale largeur avec un arc d\'étoiles.' }
    ]
  },
  {
    id: 've',
    name: 'Venezuela',
    flagEmoji: '🇻🇪',
    difficulty: 'impossible',
    continent: 'Amérique du Sud',
    capital: 'Caracas',
    region: 'Amérique du Sud',
    fun_fact: 'Les 8 étoiles blanches en arc de cercle représentent les huit provinces historiques signataires de l\'indépendance.',
    mnemonic: 'Trois bandes horizontales de même largeur jaune, bleu, rouge avec un arc de 8 étoiles blanches au centre de la bande bleue.',
    common_confusions: [
      { countryId: 'co', countryName: 'Colombie', flagEmoji: '🇨🇴', explanation: 'La Colombie n\'a pas d\'étoiles et sa bande jaune est deux fois plus large.' }
    ]
  },
  {
    id: 'bo',
    name: 'Bolivie',
    flagEmoji: '🇧🇴',
    difficulty: 'impossible',
    continent: 'Amérique du Sud',
    capital: 'Sucre / La Paz',
    region: 'Amérique du Sud',
    fun_fact: 'La constitution bolivienne reconnaît également la Wiphala carrée multicolore comme drapeau national officiel.',
    mnemonic: 'Trois bandes horizontales : rouge en haut, jaune au milieu, vert en bas.',
    common_confusions: [
      { countryId: 'gh', countryName: 'Ghana', flagEmoji: '🇬🇭', explanation: 'Le Ghana a une étoile noire au centre.' },
      { countryId: 'et', countryName: 'Éthiopie', flagEmoji: '🇪🇹', explanation: 'L\'Éthiopie a vert en haut et rouge en bas avec un pentagramme.' }
    ]
  },
  {
    id: 'gh',
    name: 'Ghana',
    flagEmoji: '🇬🇭',
    difficulty: 'impossible',
    continent: 'Afrique',
    capital: 'Accra',
    region: 'Afrique de l\'Ouest',
    fun_fact: 'Premier État d\'Afrique noire à accéder à l\'indépendance en 1957, créateur de l\'Étoile Noire africaine (Black Star).',
    mnemonic: 'Trois bandes horizontales rouge, jaune, vert avec une étoile noire à 5 branches au centre de la bande jaune.',
    common_confusions: [
      { countryId: 'sn', countryName: 'Sénégal', flagEmoji: '🇸🇳', explanation: 'Le Sénégal a des bandes verticales et une étoile verte.' },
      { countryId: 'bo', countryName: 'Bolivie', flagEmoji: '🇧🇴', explanation: 'La Bolivie n\'a pas d\'étoile noire.' }
    ]
  },
  {
    id: 'tl',
    name: 'Timor oriental',
    flagEmoji: '🇹🇱',
    difficulty: 'impossible',
    continent: 'Asie',
    capital: 'Dili',
    region: 'Asie du Sud-Est',
    fun_fact: 'L\'étoile blanche guidant vers la paix est inclinée pour pointer vers le coin supérieur gauche.',
    mnemonic: 'Fond rouge avec un triangle jaune à la hampe recouvert d\'un triangle noir plus petit portant une étoile blanche inclinée.',
    isIsland: true,
    common_confusions: []
  }
];
