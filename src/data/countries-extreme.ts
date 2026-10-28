import { Country } from '../types';

export const COUNTRIES_EXTREME: Country[] = [
  {
    id: 'ao',
    name: 'Angola',
    flagEmoji: '🇦🇴',
    difficulty: 'extreme',
    continent: 'Afrique',
    capital: 'Luanda',
    region: 'Afrique centrale',
    fun_fact: 'L\'emblème doré associe une demi-roue dentée industrielle, une machette agricole et une étoile, inspiré du marteau et de la faucille.',
    mnemonic: 'Deux bandes horizontales rouge (sang) et noir (continent africain) avec machette, demi-roue dentée et étoile dorées au centre.',
    common_confusions: []
  },
  {
    id: 'cg',
    name: 'République du Congo',
    flagEmoji: '🇨🇬',
    difficulty: 'extreme',
    continent: 'Afrique',
    capital: 'Brazzaville',
    region: 'Afrique centrale',
    fun_fact: 'Brazzaville se trouve juste en face de Kinshasa, séparées par le fleuve Congo.',
    mnemonic: 'Bande diagonale jaune traversant de bas en haut, séparant un triangle vert (haut gauche) et un triangle rouge (bas droite).',
    common_confusions: [
      { countryId: 'cd', countryName: 'RDC (Congo-Kinshasa)', flagEmoji: '🇨🇩', explanation: 'La RDC est sur fond bleu ciel avec une diagonale rouge liserée de jaune et une étoile jaune.' }
    ]
  },
  {
    id: 'cd',
    name: 'République démocratique du Congo',
    flagEmoji: '🇨🇩',
    difficulty: 'extreme',
    continent: 'Afrique',
    capital: 'Kinshasa',
    region: 'Afrique centrale',
    fun_fact: 'Le bleu ciel symbolise la paix, le rouge le sang des martyrs et le jaune la richesse minière du pays.',
    mnemonic: 'Fond bleu céleste avec une diagonale rouge bordée de deux liserés dorés et une étoile dorée dans le coin supérieur gauche.',
    common_confusions: [
      { countryId: 'cg', countryName: 'République du Congo', flagEmoji: '🇨🇬', explanation: 'Le Congo-Brazzaville a du vert, du jaune et du rouge sans aucun bleu ni étoile.' }
    ]
  },
  {
    id: 'ga',
    name: 'Gabon',
    flagEmoji: '🇬🇦',
    difficulty: 'extreme',
    continent: 'Afrique',
    capital: 'Libreville',
    region: 'Afrique centrale',
    fun_fact: 'La bande jaune centrale symbolise la ligne de l\'équateur qui traverse le pays ainsi que le soleil.',
    mnemonic: 'Trois bandes horizontales : vert émeraude (forêt), jaune d\'or (équateur), bleu azur (mer).',
    common_confusions: [
      { countryId: 'rw', countryName: 'Rwanda', flagEmoji: '🇷🇼', explanation: 'Le Rwanda a une large moitié supérieure bleue avec un soleil rayonnant.' }
    ]
  },
  {
    id: 'td',
    name: 'Tchad',
    flagEmoji: '🇹🇩',
    difficulty: 'extreme',
    continent: 'Afrique',
    capital: 'N\'Djaména',
    region: 'Afrique centrale',
    fun_fact: 'Pratiquement identique au drapeau roumain, le Tchad utilise une nuance de bleu indigo un soupçon plus sombre.',
    mnemonic: 'Trois bandes verticales : bleu indigo foncé, jaune, rouge.',
    common_confusions: [
      { countryId: 'ro', countryName: 'Roumanie', flagEmoji: '🇷🇴', explanation: 'La Roumanie a exactement les mêmes 3 bandes verticales ; son bleu est un bleu cobalt légèrement plus clair.' },
      { countryId: 'ad', countryName: 'Andorre', flagEmoji: '🇦🇩', explanation: 'Andorre a les mêmes couleurs mais avec ses armoiries au centre.' }
    ]
  },
  {
    id: 'mr',
    name: 'Mauritanie',
    flagEmoji: '🇲🇷',
    difficulty: 'extreme',
    continent: 'Afrique',
    capital: 'Nouakchott',
    region: 'Afrique de l\'Ouest',
    fun_fact: 'Deux bandes rouges ont été ajoutées en 2017 en haut et en bas pour honorer le sang versé pour la patrie.',
    mnemonic: 'Fond vert émeraude bordé d\'une bande rouge en haut et en bas, avec croissant d\'or tourné vers le haut et étoile d\'or.',
    common_confusions: [
      { countryId: 'pk', countryName: 'Pakistan', flagEmoji: '🇵🇰', explanation: 'Le Pakistan a un croissant blanc tourné vers la droite et une bande blanche à gauche.' }
    ]
  },
  {
    id: 'np',
    name: 'Népal',
    flagEmoji: '🇳🇵',
    difficulty: 'extreme',
    continent: 'Asie',
    capital: 'Katmandou',
    region: 'Asie du Sud',
    fun_fact: 'Seul drapeau national au monde non quadrilatère (composé de deux pennons triangulaires superposés).',
    mnemonic: 'Forme unique en deux triangles superposés rouge carmin à bordure bleue, lune blanche en haut, soleil blanc en bas.',
    common_confusions: []
  },
  {
    id: 'la',
    name: 'Laos',
    flagEmoji: '🇱🇦',
    difficulty: 'extreme',
    continent: 'Asie',
    capital: 'Vientiane',
    region: 'Asie du Sud-Est',
    fun_fact: 'Le disque blanc central représente la pleine lune brillant au-dessus du fleuve Mékong (la bande bleue).',
    mnemonic: 'Deux bandes rouges encadrant une large bande bleue centrale (deux fois plus haute) avec un grand disque blanc centré.',
    common_confusions: [
      { countryId: 'bz', countryName: 'Belize', flagEmoji: '🇧🇿', explanation: 'Le Belize a un blason avec deux bûcherons au centre.' }
    ]
  },
  {
    id: 'kh',
    name: 'Cambodge',
    flagEmoji: '🇰🇭',
    difficulty: 'extreme',
    continent: 'Asie',
    capital: 'Phnom Penh',
    region: 'Asie du Sud-Est',
    fun_fact: 'L\'un des rares drapeaux nationaux figurant un bâtiment réel au monde : le temple d\'Angkor Vat.',
    mnemonic: 'Bande centrale rouge bordée de deux bandes bleues, avec le temple d\'Angkor Vat en blanc au centre.',
    common_confusions: []
  },
  {
    id: 'mm',
    name: 'Myanmar',
    flagEmoji: '🇲🇲',
    difficulty: 'extreme',
    continent: 'Asie',
    capital: 'Naypyidaw',
    region: 'Asie du Sud-Est',
    fun_fact: 'Adopté en 2010 lors de l\'entrée en vigueur de la nouvelle constitution.',
    mnemonic: 'Trois bandes horizontales jaune, vert, rouge avec une très grande étoile blanche à 5 branches recouvrant les trois bandes.',
    common_confusions: [
      { countryId: 'lt', countryName: 'Lituanie', flagEmoji: '🇱🇹', explanation: 'La Lituanie a les mêmes bandes jaune, vert, rouge mais SANS étoile.' }
    ]
  },
  {
    id: 'mn',
    name: 'Mongolie',
    flagEmoji: '🇲🇳',
    difficulty: 'extreme',
    continent: 'Asie',
    capital: 'Oulan-Bator',
    region: 'Asie de l\'Est',
    fun_fact: 'L\'emblème "Soyombo" dans la bande rouge gauche est une écriture géométrique symbolisant feu, soleil, lune et deux poissons yin-yang.',
    mnemonic: 'Trois bandes verticales rouge, bleu azur au milieu, rouge, avec le symbole national Soyombo doré dans la bande rouge de gauche.',
    common_confusions: []
  },
  {
    id: 'kz',
    name: 'Kazakhstan',
    flagEmoji: '🇰🇿',
    difficulty: 'extreme',
    continent: 'Asie',
    capital: 'Astana',
    region: 'Asie centrale',
    fun_fact: 'L\'aigle des steppes (aigle royal) sous un soleil à 32 rayons survole l\'ornement traditionnel koshkar-muiz sur la gauche.',
    mnemonic: 'Fond bleu ciel azur orné d\'un soleil doré à 32 rayons au-dessus d\'un aigle doré en vol, avec motif ornemental kazakh vertical le long de la hampe.',
    common_confusions: []
  },
  {
    id: 'kg',
    name: 'Kirghizistan',
    flagEmoji: '🇰🇬',
    difficulty: 'extreme',
    continent: 'Asie',
    capital: 'Bichkek',
    region: 'Asie centrale',
    fun_fact: 'Le motif au centre du soleil à 40 rayons représente le toundouk, anneau sommital ouvrant le toit d\'une yourte traditionnelle.',
    mnemonic: 'Fond rouge vif avec un soleil jaune à 40 rayons entourant le toit stylisé d\'une yourte nomade (tunduk).',
    common_confusions: [
      { countryId: 'mk', countryName: 'Macédoine du Nord', flagEmoji: '🇲🇰', explanation: 'La Macédoine du Nord a 8 rayons solaires jaunes qui s\'étendent jusqu\'aux bords du drapeau.' }
    ]
  },
  {
    id: 'tj',
    name: 'Tadjikistan',
    flagEmoji: '🇹🇯',
    difficulty: 'extreme',
    continent: 'Asie',
    capital: 'Douchanbé',
    region: 'Asie centrale',
    fun_fact: 'La couronne dorée surmontée de 7 étoiles rappelle l\'étymologie populaire rattachant les Tadjiks à la couronne (Tâj).',
    mnemonic: 'Trois bandes horizontales rouge, large blanc au centre, vert, avec couronne dorée et demi-cercle de 7 étoiles dorées au milieu.',
    common_confusions: [
      { countryId: 'hu', countryName: 'Hongrie', flagEmoji: '🇭🇺', explanation: 'La Hongrie a rouge, blanc, vert sans couronne.' }
    ]
  },
  {
    id: 'tm',
    name: 'Turkménistan',
    flagEmoji: '🇹🇲',
    difficulty: 'extreme',
    continent: 'Asie',
    capital: 'Achgabat',
    region: 'Asie centrale',
    fun_fact: 'Le drapeau le plus détaillé et complexe du monde, arborant une bande de 5 motifs traditionnels de tapis turkmènes ("göls").',
    mnemonic: 'Fond vert sombre avec croissant et 5 étoiles blanches, flanqué d\'une bande verticale rouge bordeaux aux motifs géométriques de tapis.',
    common_confusions: []
  },
  {
    id: 'uz',
    name: 'Ouzbékistan',
    flagEmoji: '🇺🇿',
    difficulty: 'extreme',
    continent: 'Asie',
    capital: 'Tachkent',
    region: 'Asie centrale',
    fun_fact: 'Les 12 étoiles blanches sont disposées en trois rangées (3, 4 et 5 étoiles) correspondant aux 12 mois et aux 12 signes du zodiaque.',
    mnemonic: 'Bandes horizontales bleu ciel, liseré rouge, blanc, liseré rouge, vert clair, avec croissant blanc et 12 étoiles dans le coin supérieur gauche.',
    common_confusions: []
  },
  {
    id: 'md',
    name: 'Moldavie',
    flagEmoji: '🇲🇩',
    difficulty: 'extreme',
    continent: 'Europe',
    capital: 'Chisinau',
    region: 'Europe orientale',
    fun_fact: 'Partage les couleurs roumaines mais arbore un aigle tenant une croix dans son bec et un écu à tête d\'aurochs.',
    mnemonic: 'Trois bandes verticales bleu, jaune, rouge avec les armoiries nationales moldaves (aigle et tête d\'aurochs) au centre.',
    common_confusions: [
      { countryId: 'ro', countryName: 'Roumanie', flagEmoji: '🇷🇴', explanation: 'La Roumanie n\'a pas d\'armoiries au centre.' },
      { countryId: 'ad', countryName: 'Andorre', flagEmoji: '🇦🇩', explanation: 'Andorre porte un écu à 4 quartiers sans aigle.' }
    ]
  },
  {
    id: 'by',
    name: 'Biélorussie',
    flagEmoji: '🇧🇾',
    difficulty: 'extreme',
    continent: 'Europe',
    capital: 'Minsk',
    region: 'Europe orientale',
    fun_fact: 'Le motif ornemental rouge sur blanc le long de la hampe est la "Ruchnik", broderie paysanne folklorique traditionnelle.',
    mnemonic: 'Deux tiers rouge en haut, un tiers vert en bas, bordé le long de la hampe par un motif ornemental géométrique traditionnel blanc et rouge.',
    common_confusions: [
      { countryId: 'mg', countryName: 'Madagascar', flagEmoji: '🇲🇬', explanation: 'Madagascar a une bande blanche unie à gauche.' }
    ]
  },
  {
    id: 'lv',
    name: 'Lettonie',
    flagEmoji: '🇱🇻',
    difficulty: 'extreme',
    continent: 'Europe',
    capital: 'Riga',
    region: 'Europe du Nord',
    fun_fact: 'Son rouge carmin foncé unique ("rouge letton") est attesté dans la Chronique rimée de Livonie dès 1280.',
    mnemonic: 'Trois bandes horizontales : rouge carmin foncé ("rouge letton"), fine bande blanche centrale (ratio 2:1:2), rouge carmin foncé.',
    common_confusions: [
      { countryId: 'at', countryName: 'Autriche', flagEmoji: '🇦🇹', explanation: 'L\'Autriche a un rouge vif écarlate et les trois bandes ont une largeur strictement égale.' }
    ]
  },
  {
    id: 'lt',
    name: 'Lituanie',
    flagEmoji: '🇱🇹',
    difficulty: 'extreme',
    continent: 'Europe',
    capital: 'Vilnius',
    region: 'Europe du Nord',
    fun_fact: 'Jaune pour les champs de blé dorés, vert pour les forêts profondes, rouge pour le sang versé pour la patrie.',
    mnemonic: 'Trois bandes horizontales : jaune en haut, vert au milieu, rouge en bas.',
    common_confusions: [
      { countryId: 'mm', countryName: 'Myanmar', flagEmoji: '🇲🇲', explanation: 'Le Myanmar a une grande étoile blanche au centre.' }
    ]
  },
  {
    id: 'me',
    name: 'Monténégro',
    flagEmoji: '🇲🇪',
    difficulty: 'extreme',
    continent: 'Europe',
    capital: 'Podgorica',
    region: 'Europe méridionale',
    fun_fact: 'Un des rares drapeaux au monde avec une bordure dorée encadrant tout le pourtour.',
    mnemonic: 'Fond rouge cerise encadré d\'une fine bordure dorée, avec l\'aigle bicéphale impérial doré au centre portant un écu au lion passant.',
    common_confusions: [
      { countryId: 'al', countryName: 'Albanie', flagEmoji: '🇦🇱', explanation: 'L\'Albanie a un aigle bicéphale NOIR sans bordure dorée.' }
    ]
  },
  {
    id: 'mk',
    name: 'Macédoine du Nord',
    flagEmoji: '🇲🇰',
    difficulty: 'extreme',
    continent: 'Europe',
    capital: 'Skopje',
    region: 'Europe méridionale',
    fun_fact: 'Évoque le "nouveau soleil de la liberté" mentionné dans l\'hymne national.',
    mnemonic: 'Soleil d\'or au centre d\'où jaillissent 8 rayons solaires divergents jaunes vers les bords sur fond rouge.',
    common_confusions: [
      { countryId: 'kg', countryName: 'Kirghizistan', flagEmoji: '🇰🇬', explanation: 'Le Kirghizistan a 40 rayons solaires en couronne autour d\'un toit de yourte.' }
    ]
  },
  {
    id: 'mt',
    name: 'Malte',
    flagEmoji: '🇲🇹',
    difficulty: 'extreme',
    continent: 'Europe',
    capital: 'La Valette',
    region: 'Europe méridionale',
    fun_fact: 'La George Cross dans le coin supérieur gauche a été décernée à l\'île entière par le roi George VI en 1942 pour son héroïsme.',
    mnemonic: 'Deux bandes verticales : blanc à gauche avec la croix de Georges liserée de rouge dans le coin supérieur, rouge à droite.',
    isIsland: true,
    common_confusions: [
      { countryId: 'pl', countryName: 'Pologne', flagEmoji: '🇵🇱', explanation: 'La Pologne a des bandes horizontales blanc et rouge.' }
    ]
  },
  {
    id: 'cy',
    name: 'Chypre',
    flagEmoji: '🇨🇾',
    difficulty: 'extreme',
    continent: 'Europe',
    capital: 'Nicosie',
    region: 'Europe méridionale',
    fun_fact: 'La silhouette de l\'île est de couleur cuivre (orange cuivré), métal auquel Chypre a donné son nom (cuprum).',
    mnemonic: 'Fond blanc avec la silhouette cartographique de l\'île en couleur cuivre au-dessus de deux rameaux d\'olivier verts croisés.',
    isIsland: true,
    common_confusions: [
      { countryId: 'xk', countryName: 'Kosovo', flagEmoji: '🇽🇰', explanation: 'Le Kosovo est sur fond bleu avec 6 étoiles blanches.' }
    ]
  },
  {
    id: 'lb',
    name: 'Liban',
    flagEmoji: '🇱🇧',
    difficulty: 'extreme',
    continent: 'Asie',
    capital: 'Beyrouth',
    region: 'Moyen-Orient',
    fun_fact: 'Le cèdre du Liban (Cedrus libani) est mentionné plus de 70 fois dans la Bible, symbole de sainteté et d\'éternité.',
    mnemonic: 'Trois bandes horizontales rouge, large blanc au centre (deux fois plus haut), rouge, avec un grand cèdre vert centré.',
    common_confusions: [
      { countryId: 'at', countryName: 'Autriche', flagEmoji: '🇦🇹', explanation: 'L\'Autriche a rouge-blanc-rouge sans arbre.' }
    ]
  },
  {
    id: 'jo',
    name: 'Jordanie',
    flagEmoji: '🇯🇴',
    difficulty: 'extreme',
    continent: 'Asie',
    capital: 'Amman',
    region: 'Moyen-Orient',
    fun_fact: 'L\'étoile blanche à 7 branches représente les 7 versets de la première sourate du Coran (Al-Fatiha).',
    mnemonic: 'Bandes noir, blanc, vert avec un chevron/triangle rouge à la hampe orné d\'une étoile blanche à 7 branches.',
    common_confusions: [
      { countryId: 'ps', countryName: 'Palestine', flagEmoji: '🇵🇸', explanation: 'La Palestine a un triangle rouge sans étoile.' },
      { countryId: 'sd', countryName: 'Soudan', flagEmoji: '🇸🇩', explanation: 'Le Soudan a un triangle vert à gauche.' }
    ]
  },
  {
    id: 'ee',
    name: 'Estonie',
    flagEmoji: '🇪🇪',
    difficulty: 'extreme',
    continent: 'Europe',
    capital: 'Tallinn',
    region: 'Europe du Nord',
    fun_fact: 'Bleu pour le ciel et la mer Baltique, noir pour la terre fertile et les vestes des paysans, blanc pour la neige et la pureté.',
    mnemonic: 'Trois bandes horizontales : bleu roi en haut, noir au milieu, blanc en bas.',
    common_confusions: [
      { countryId: 'bw', countryName: 'Botswana', flagEmoji: '🇧🇼', explanation: 'Le Botswana a une bande noire fine liserée de blanc sur fond bleu ciel.' }
    ]
  },
  {
    id: 'lu',
    name: 'Luxembourg',
    flagEmoji: '🇱🇺',
    difficulty: 'extreme',
    continent: 'Europe',
    capital: 'Luxembourg',
    region: 'Europe occidentale',
    fun_fact: 'Distinct des Pays-Bas par son ratio plus allongé (1:2 ou 3:5) et surtout son bleu ciel très lumineux.',
    mnemonic: 'Trois bandes horizontales : rouge vif, blanc, bleu ciel très clair.',
    common_confusions: [
      { countryId: 'nl', countryName: 'Pays-Bas', flagEmoji: '🇳🇱', explanation: 'Les Pays-Bas ont un bleu cobalt sombre et un ratio 2:3.' }
    ]
  },
  {
    id: 'li',
    name: 'Liechtenstein',
    flagEmoji: '🇱🇮',
    difficulty: 'extreme',
    continent: 'Europe',
    capital: 'Vaduz',
    region: 'Europe centrale',
    fun_fact: 'La couronne dorée a été ajoutée en 1937 après s\'être rendu compte aux JO de 1936 que le drapeau était identique à celui d\'Haïti.',
    mnemonic: 'Deux bandes horizontales bleu en haut et rouge en bas avec une couronne princière dorée dans le coin supérieur gauche.',
    common_confusions: [
      { countryId: 'ht', countryName: 'Haïti', flagEmoji: '🇭🇹', explanation: 'Haïti a ses armoiries dans un rectangle blanc au centre.' }
    ]
  },
  {
    id: 'sm',
    name: 'Saint-Marin',
    flagEmoji: '🇸🇲',
    difficulty: 'extreme',
    continent: 'Europe',
    capital: 'Saint-Marin',
    region: 'Europe méridionale',
    fun_fact: 'Plus ancienne république constitutionnelle du monde encore en existence, fondée en 301.',
    mnemonic: 'Deux bandes horizontales blanc et bleu ciel avec les armoiries nationales (les 3 tours du mont Titano) au centre.',
    common_confusions: [
      { countryId: 'va', countryName: 'Vatican', flagEmoji: '🇻🇦', explanation: 'Le Vatican a des bandes verticales jaune et blanc avec les clés papales.' }
    ]
  },
  {
    id: 'ad',
    name: 'Andorre',
    flagEmoji: '🇦🇩',
    difficulty: 'extreme',
    continent: 'Europe',
    capital: 'Andorre-la-Vieille',
    region: 'Europe méridionale',
    fun_fact: 'Combine les couleurs de la France (bleu et rouge) et de la Catalogne (jaune et rouge) avec la devise "Virtus Unita Fortior".',
    mnemonic: 'Trois bandes verticales bleu, jaune (légèrement plus large), rouge avec les armoiries andorranes au centre de la bande jaune.',
    common_confusions: [
      { countryId: 'md', countryName: 'Moldavie', flagEmoji: '🇲🇩', explanation: 'La Moldavie porte un aigle avec une croix dans le bec.' },
      { countryId: 'ro', countryName: 'Roumanie', flagEmoji: '🇷🇴', explanation: 'La Roumanie n\'a aucun blason.' }
    ]
  },
  {
    id: 'mc',
    name: 'Monaco',
    flagEmoji: '🇲🇨',
    difficulty: 'extreme',
    continent: 'Europe',
    capital: 'Monaco',
    region: 'Europe occidentale',
    fun_fact: 'Couleurs des armoiries de la maison Grimaldi depuis au moins 1339.',
    mnemonic: 'Deux bandes horizontales rouge en haut et blanc en bas, avec des proportions presque carrées (4:5).',
    common_confusions: [
      { countryId: 'id', countryName: 'Indonésie', flagEmoji: '🇮🇩', explanation: 'L\'Indonésie a les mêmes couleurs mais dans un ratio plus allongé (2:3).' },
      { countryId: 'pl', countryName: 'Pologne', flagEmoji: '🇵🇱', explanation: 'La Pologne a le blanc en haut et le rouge en bas.' }
    ]
  },
  {
    id: 'uy',
    name: 'Uruguay',
    flagEmoji: '🇺🇾',
    difficulty: 'extreme',
    continent: 'Amérique du Sud',
    capital: 'Montevideo',
    region: 'Amérique du Sud',
    fun_fact: 'Le Soleil de Mai à 16 rayons alternés droits et ondulés se trouve dans le canton blanc supérieur gauche.',
    mnemonic: '9 bandes horizontales alternées blanc et bleu azur, avec un carré blanc en haut à gauche abritant le Soleil de Mai doré.',
    common_confusions: [
      { countryId: 'ar', countryName: 'Argentine', flagEmoji: '🇦🇷', explanation: 'L\'Argentine a 3 bandes horizontales et le soleil au centre.' },
      { countryId: 'gr', countryName: 'Grèce', flagEmoji: '🇬🇷', explanation: 'La Grèce a une croix blanche sur fond bleu dans son canton.' }
    ]
  },
  {
    id: 'py',
    name: 'Paraguay',
    flagEmoji: '🇵🇾',
    difficulty: 'extreme',
    continent: 'Amérique du Sud',
    capital: 'Asuncion',
    region: 'Amérique du Sud',
    fun_fact: 'Seul drapeau national officiel au monde dont l\'avers et le revers sont différents (lion avec bonnet phrygien au dos).',
    mnemonic: 'Trois bandes horizontales rouge, blanc, bleu avec les armoiries nationales (étoile de mai dans des rameaux) au milieu de la bande blanche.',
    common_confusions: [
      { countryId: 'nl', countryName: 'Pays-Bas', flagEmoji: '🇳🇱', explanation: 'Les Pays-Bas n\'ont pas de motif sur la bande blanche.' }
    ]
  },
  {
    id: 'pe',
    name: 'Pérou',
    flagEmoji: '🇵🇪',
    difficulty: 'extreme',
    continent: 'Amérique du Sud',
    capital: 'Lima',
    region: 'Amérique du Sud',
    fun_fact: 'Inspiré par le vol d\'un vol de flamants roses aux ailes rouges et poitrines blanches observé par le général San Martín.',
    mnemonic: 'Trois bandes verticales rouge, blanc, rouge.',
    common_confusions: [
      { countryId: 'ca', countryName: 'Canada', flagEmoji: '🇨🇦', explanation: 'Le Canada a une feuille d\'érable au milieu.' }
    ]
  }
];
