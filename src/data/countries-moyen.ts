import { Country } from '../types';

export const COUNTRIES_MOYEN: Country[] = [
  {
    id: 'pt',
    name: 'Portugal',
    flagEmoji: '🇵🇹',
    difficulty: 'moyen',
    continent: 'Europe',
    capital: 'Lisbonne',
    region: 'Europe méridionale',
    fun_fact: 'La sphère armillaire derrière le bouclier symbolise les grandes découvertes maritimes portugaises.',
    mnemonic: 'Bicolore vert (2/5) et rouge (3/5) avec la sphère armillaire et le blason portugais sur la démarcation.',
    common_confusions: []
  },
  {
    id: 'nl',
    name: 'Pays-Bas',
    flagEmoji: '🇳🇱',
    difficulty: 'moyen',
    continent: 'Europe',
    capital: 'Amsterdam',
    region: 'Europe occidentale',
    fun_fact: 'Plus ancien tricolore horizontal encore en usage, dérivé de la bannière orange-blanc-bleu de Guillaume d\'Orange.',
    mnemonic: 'Rouge vermillon en haut, blanc au milieu, bleu cobalt en bas.',
    common_confusions: [
      { countryId: 'lu', countryName: 'Luxembourg', flagEmoji: '🇱🇺', explanation: 'Le Luxembourg utilise un bleu ciel beaucoup plus clair et un ratio plus allongé (1:2 vs 2:3).' },
      { countryId: 'fr', countryName: 'France', flagEmoji: '🇫🇷', explanation: 'La France a les mêmes couleurs mais disposées verticalement (bleu à la hampe).' }
    ]
  },
  {
    id: 'be',
    name: 'Belgique',
    flagEmoji: '🇧🇪',
    difficulty: 'moyen',
    continent: 'Europe',
    capital: 'Bruxelles',
    region: 'Europe occidentale',
    fun_fact: 'Le ratio officiel inhabituel est de 13:15, quasi carré.',
    mnemonic: 'Bandes verticales noir, jaune, rouge (le noir est toujours contre la hampe).',
    common_confusions: [
      { countryId: 'de', countryName: 'Allemagne', flagEmoji: '🇩🇪', explanation: 'L\'Allemagne a des bandes horizontales noir-rouge-jaune.' }
    ]
  },
  {
    id: 'ch',
    name: 'Suisse',
    flagEmoji: '🇨🇭',
    difficulty: 'moyen',
    continent: 'Europe',
    capital: 'Berne',
    region: 'Europe centrale',
    fun_fact: 'L\'un des deux seuls drapeaux d\'État souverain de forme parfaitement carrée (avec le Vatican).',
    mnemonic: 'Carré rouge avec une croix blanche équilatérale et alésée au centre.',
    common_confusions: []
  },
  {
    id: 'at',
    name: 'Autriche',
    flagEmoji: '🇦🇹',
    difficulty: 'moyen',
    continent: 'Europe',
    capital: 'Vienne',
    region: 'Europe centrale',
    fun_fact: 'La légende raconte que la tunique blanche du duc Léopold V était trempée de sang au siège de Saint-Jean-d\'Acre, sauf sous sa ceinture.',
    mnemonic: 'Trois bandes horizontales rouge, blanc, rouge sans motif.',
    common_confusions: [
      { countryId: 'lv', countryName: 'Lettonie', flagEmoji: '🇱🇻', explanation: 'La Lettonie utilise un rouge carmin beaucoup plus sombre et une bande blanche centrale étroite.' }
    ]
  },
  {
    id: 'se',
    name: 'Suède',
    flagEmoji: '🇸🇪',
    difficulty: 'moyen',
    continent: 'Europe',
    capital: 'Stockholm',
    region: 'Europe du Nord',
    fun_fact: 'Inspiré du Dannebrog danois mais reprenant l\'or et l\'azur des armoiries royales suédoises.',
    mnemonic: 'Croix scandinave jaune dorée sur fond bleu roi.',
    common_confusions: [
      { countryId: 'fi', countryName: 'Finlande', flagEmoji: '🇫🇮', explanation: 'La Finlande a une croix bleue sur fond blanc.' }
    ]
  },
  {
    id: 'no',
    name: 'Norvège',
    flagEmoji: '🇳🇴',
    difficulty: 'moyen',
    continent: 'Europe',
    capital: 'Oslo',
    region: 'Europe du Nord',
    fun_fact: 'Surnommé "la mère de tous les drapeaux" car on peut y découper les drapeaux de 6 autres nations.',
    mnemonic: 'Fond rouge vif avec une croix scandinave bleue bordée d\'un fin liséré blanc.',
    common_confusions: [
      { countryId: 'is', countryName: 'Islande', flagEmoji: '🇮🇸', explanation: 'L\'Islande a les couleurs inversées : croix rouge liserée de blanc sur fond BLEU.' }
    ]
  },
  {
    id: 'dk',
    name: 'Danemark',
    flagEmoji: '🇩🇰',
    difficulty: 'moyen',
    continent: 'Europe',
    capital: 'Copenhague',
    region: 'Europe du Nord',
    fun_fact: 'Le Dannebrog est le plus ancien drapeau national continu au monde (attesté dès 1219).',
    mnemonic: 'Croix scandinave blanche simple sur fond rouge vif.',
    common_confusions: [
      { countryId: 'ch', countryName: 'Suisse', flagEmoji: '🇨🇭', explanation: 'La Suisse a une croix carrée alésée qui ne touche pas les bords.' }
    ]
  },
  {
    id: 'fi',
    name: 'Finlande',
    flagEmoji: '🇫🇮',
    difficulty: 'moyen',
    continent: 'Europe',
    capital: 'Helsinki',
    region: 'Europe du Nord',
    fun_fact: 'Le bleu représente les milliers de lacs et le ciel, le blanc la neige finlandaise.',
    mnemonic: 'Croix scandinave bleue sur fond blanc pur.',
    common_confusions: [
      { countryId: 'gr', countryName: 'Grèce', flagEmoji: '🇬🇷', explanation: 'La Grèce a 9 bandes horizontales bleu et blanc avec un carré bleu à croix blanche.' }
    ]
  },
  {
    id: 'gr',
    name: 'Grèce',
    flagEmoji: '🇬🇷',
    difficulty: 'moyen',
    continent: 'Europe',
    capital: 'Athènes',
    region: 'Europe méridionale',
    fun_fact: 'Les 9 bandes horizontales correspondent aux 9 syllabes du cri d\'indépendance "É-lef-the-rí-a í thá-na-tos" (La liberté ou la mort).',
    mnemonic: 'Croix blanche dans un canton bleu en haut à gauche et 9 bandes bleu et blanc.',
    common_confusions: []
  },
  {
    id: 'ie',
    name: 'Irlande',
    flagEmoji: '🇮🇪',
    difficulty: 'moyen',
    continent: 'Europe',
    capital: 'Dublin',
    region: 'Europe occidentale',
    fun_fact: 'Le vert représente la tradition gaélique catholique, l\'orange les partisans de Guillaume d\'Orange, le blanc la paix entre eux.',
    mnemonic: 'Trois bandes verticales : vert, blanc, ORANGE.',
    common_confusions: [
      { countryId: 'ci', countryName: 'Côte d\'Ivoire', flagEmoji: '🇨🇮', explanation: 'La Côte d\'Ivoire est l\'exact miroir : ORANGE à la hampe, blanc, vert.' },
      { countryId: 'it', countryName: 'Italie', flagEmoji: '🇮🇹', explanation: 'L\'Italie a du ROUGE à droite, pas de l\'orange.' }
    ]
  },
  {
    id: 'is',
    name: 'Islande',
    flagEmoji: '🇮🇸',
    difficulty: 'moyen',
    continent: 'Europe',
    capital: 'Reykjavik',
    region: 'Europe du Nord',
    fun_fact: 'Bleu pour les montagnes de l\'Atlantique, blanc pour les glaciers, rouge pour le feu volcanique.',
    mnemonic: 'Croix scandinave rouge liserée de blanc sur fond bleu profond.',
    isIsland: true,
    common_confusions: [
      { countryId: 'no', countryName: 'Norvège', flagEmoji: '🇳🇴', explanation: 'La Norvège a le fond rouge et la croix bleue.' }
    ]
  },
  {
    id: 'cz',
    name: 'Tchéquie',
    flagEmoji: '🇨🇿',
    difficulty: 'moyen',
    continent: 'Europe',
    capital: 'Prague',
    region: 'Europe centrale',
    fun_fact: 'A conservé le drapeau originel de la Tchécoslovaquie après la partition pacifique en 1993.',
    mnemonic: 'Coin/triangle bleu à gauche sur deux bandes horizontales blanche en haut et rouge en bas.',
    common_confusions: [
      { countryId: 'ph', countryName: 'Philippines', flagEmoji: '🇵🇭', explanation: 'Les Philippines ont un triangle blanc avec un soleil doré et trois étoiles.' }
    ]
  },
  {
    id: 'sk',
    name: 'Slovaquie',
    flagEmoji: '🇸🇰',
    difficulty: 'moyen',
    continent: 'Europe',
    capital: 'Bratislava',
    region: 'Europe centrale',
    fun_fact: 'A ajouté son blason à double croix patriarcale pour se distinguer du drapeau russe.',
    mnemonic: 'Bandes blanc, bleu, rouge avec le blason à double croix sur trois monts bleus décentré à gauche.',
    common_confusions: [
      { countryId: 'si', countryName: 'Slovénie', flagEmoji: '🇸🇮', explanation: 'La Slovénie a un écusson triangulaire dans le coin supérieur gauche avec le mont Triglav et 3 étoiles dorées.' },
      { countryId: 'ru', countryName: 'Russie', flagEmoji: '🇷🇺', explanation: 'La Russie n\'a aucun blason sur ses trois bandes.' }
    ]
  },
  {
    id: 'hu',
    name: 'Hongrie',
    flagEmoji: '🇭🇺',
    difficulty: 'moyen',
    continent: 'Europe',
    capital: 'Budapest',
    region: 'Europe centrale',
    fun_fact: 'Rouge pour la force, blanc pour la fidélité, vert pour l\'espérance.',
    mnemonic: 'Trois bandes horizontales : rouge en haut, blanc au milieu, vert en bas.',
    common_confusions: [
      { countryId: 'it', countryName: 'Italie', flagEmoji: '🇮🇹', explanation: 'L\'Italie a les mêmes couleurs mais verticales (vert, blanc, rouge).' },
      { countryId: 'bg', countryName: 'Bulgarie', flagEmoji: '🇧🇬', explanation: 'La Bulgarie a BLANC en haut, vert au milieu et rouge en bas.' },
      { countryId: 'ir', countryName: 'Iran', flagEmoji: '🇮🇷', explanation: 'L\'Iran a le vert en haut et le rouge en bas.' }
    ]
  },
  {
    id: 'ro',
    name: 'Roumanie',
    flagEmoji: '🇷🇴',
    difficulty: 'moyen',
    continent: 'Europe',
    capital: 'Bucarest',
    region: 'Europe orientale',
    fun_fact: 'Quasiment identique au drapeau du Tchad (le bleu roumain est un soupçon plus clair).',
    mnemonic: 'Bandes verticales bleu cobalt, jaune, rouge.',
    common_confusions: [
      { countryId: 'td', countryName: 'Tchad', flagEmoji: '🇹🇩', explanation: 'Le Tchad a exactement les mêmes 3 bandes verticales ; son bleu est un bleu indigo légèrement plus foncé.' }
    ]
  },
  {
    id: 'bg',
    name: 'Bulgarie',
    flagEmoji: '🇧🇬',
    difficulty: 'moyen',
    continent: 'Europe',
    capital: 'Sofia',
    region: 'Europe orientale',
    fun_fact: 'A remplacé le bleu panslave traditionnel par le vert pour symboliser son agriculture et ses forêts.',
    mnemonic: 'Bandes horizontales : blanc en haut, vert au milieu, rouge en bas.',
    common_confusions: [
      { countryId: 'hu', countryName: 'Hongrie', flagEmoji: '🇭🇺', explanation: 'La Hongrie a le rouge en haut et le vert en bas.' }
    ]
  },
  {
    id: 'hr',
    name: 'Croatie',
    flagEmoji: '🇭🇷',
    difficulty: 'moyen',
    continent: 'Europe',
    capital: 'Zagreb',
    region: 'Europe méridionale',
    fun_fact: 'Le blason central à damier rouge et blanc est la célèbre "Šahovnica" surmontée d\'une couronne de 5 régions historiques.',
    mnemonic: 'Bandes rouge, blanc, bleu avec le blason en damier (échiquier rouge et blanc) au centre.',
    common_confusions: [
      { countryId: 'nl', countryName: 'Pays-Bas', flagEmoji: '🇳🇱', explanation: 'Les Pays-Bas n\'ont pas de blason.' },
      { countryId: 'rs', countryName: 'Serbie', flagEmoji: '🇷🇸', explanation: 'La Serbie a rouge en haut, bleu au milieu, blanc en bas avec l\'aigle bicéphale.' }
    ]
  },
  {
    id: 'rs',
    name: 'Serbie',
    flagEmoji: '🇷🇸',
    difficulty: 'moyen',
    continent: 'Europe',
    capital: 'Belgrade',
    region: 'Europe méridionale',
    fun_fact: 'Aigle bicéphale blanc de la dynastie Nemanjić sous couronne royale.',
    mnemonic: 'Bandes rouge en haut, bleu au milieu, blanc en bas avec l\'aigle blanc couronné décentré à gauche.',
    common_confusions: [
      { countryId: 'ru', countryName: 'Russie', flagEmoji: '🇷🇺', explanation: 'La Russie a le blanc en haut et le rouge en bas, sans blason.' }
    ]
  },
  {
    id: 'si',
    name: 'Slovénie',
    flagEmoji: '🇸🇮',
    difficulty: 'moyen',
    continent: 'Europe',
    capital: 'Ljubljana',
    region: 'Europe centrale',
    fun_fact: 'L\'écusson représente le mont Triglav, plus haut sommet du pays, surmonté de trois étoiles d\'or des comtes de Celje.',
    mnemonic: 'Bandes blanc, bleu, rouge avec blason mont Triglav et 3 étoiles dorées dans le coin supérieur gauche.',
    common_confusions: [
      { countryId: 'sk', countryName: 'Slovaquie', flagEmoji: '🇸🇰', explanation: 'La Slovaquie porte une double croix blanche sur fond rouge au centre.' }
    ]
  },
  {
    id: 'ba',
    name: 'Bosnie-Herzégovine',
    flagEmoji: '🇧🇦',
    difficulty: 'moyen',
    continent: 'Europe',
    capital: 'Sarajevo',
    region: 'Europe méridionale',
    fun_fact: 'Le triangle jaune figure la forme géographique du pays et ses trois communautés (Bosniaques, Croates, Serbes).',
    mnemonic: 'Fond bleu avec un triangle jaune et une diagonale d\'étoiles blanches coupées aux extrémités.',
    common_confusions: []
  },
  {
    id: 'al',
    name: 'Albanie',
    flagEmoji: '🇦🇱',
    difficulty: 'moyen',
    continent: 'Europe',
    capital: 'Tirana',
    region: 'Europe méridionale',
    fun_fact: 'L\'aigle bicéphale noir était le sceau du héros national Gjergj Kastrioti Skanderbeg au XVe siècle.',
    mnemonic: 'Fond rouge sang avec un imposant aigle bicéphale noir silhouette au centre.',
    common_confusions: [
      { countryId: 'me', countryName: 'Monténégro', flagEmoji: '🇲🇪', explanation: 'Le Monténégro a un aigle bicéphale DORÉ avec une bordure jaune tout autour du drapeau.' }
    ]
  },
  {
    id: 'ge',
    name: 'Géorgie',
    flagEmoji: '🇬🇪',
    difficulty: 'moyen',
    continent: 'Europe',
    capital: 'Tbilissi',
    region: 'Caucase',
    fun_fact: 'Le drapeau aux 5 croix (croix de Jérusalem) remonte au roi Georges V le Brillant au XIVe siècle.',
    mnemonic: 'Fond blanc avec une grande croix rouge de Saint-Georges et 4 petites croix bolnisi rouges dans chaque quartier.',
    common_confusions: [
      { countryId: 'gb', countryName: 'Angleterre', flagEmoji: '🇬🇧', explanation: 'L\'Angleterre n\'a qu\'une seule croix rouge sur fond blanc sans les 4 petites croix.' }
    ]
  },
  {
    id: 'am',
    name: 'Arménie',
    flagEmoji: '🇦🇲',
    difficulty: 'moyen',
    continent: 'Asie',
    capital: 'Erevan',
    region: 'Caucase',
    fun_fact: 'L\'orange vif du bas symbolise le courage et la terre de couleur abricot (Prunus armeniaca).',
    mnemonic: 'Trois bandes horizontales : rouge en haut, bleu au milieu, orange en bas.',
    common_confusions: [
      { countryId: 'co', countryName: 'Colombie', flagEmoji: '🇨🇴', explanation: 'La Colombie a jaune-bleu-rouge.' }
    ]
  },
  {
    id: 'az',
    name: 'Azerbaïdjan',
    flagEmoji: '🇦🇿',
    difficulty: 'moyen',
    continent: 'Asie',
    capital: 'Bakou',
    region: 'Caucase',
    fun_fact: 'L\'étoile à 8 branches symbolise les huit branches des peuples turcs.',
    mnemonic: 'Trois bandes horizontales bleu ciel, rouge, vert avec croissant et étoile à 8 pointes blancs sur la bande rouge.',
    common_confusions: []
  },
  {
    id: 'ir',
    name: 'Iran',
    flagEmoji: '🇮🇷',
    difficulty: 'moyen',
    continent: 'Asie',
    capital: 'Téhéran',
    region: 'Moyen-Orient',
    fun_fact: 'L\'emblème rouge stylisé au centre forme le mot "Allah" sous forme de tulipe.',
    mnemonic: 'Vert en haut, blanc, rouge en bas avec l\'emblème rouge au centre et 22 calligraphies koufiques répétées sur les bordures.',
    common_confusions: [
      { countryId: 'iq', countryName: 'Irak', flagEmoji: '🇮🇶', explanation: 'L\'Irak a le rouge en haut, le noir en bas et "Allahu Akbar" en vert.' }
    ]
  },
  {
    id: 'iq',
    name: 'Irak',
    flagEmoji: '🇮🇶',
    difficulty: 'moyen',
    continent: 'Asie',
    capital: 'Bagdad',
    region: 'Moyen-Orient',
    fun_fact: 'Porte l\'inscription "Allahu Akbar" (Dieu est le plus grand) en calligraphie koufique verte sur la bande blanche.',
    mnemonic: 'Trois bandes horizontales rouge, blanc, noir avec écriture koufique verte sur la bande blanche.',
    common_confusions: [
      { countryId: 'eg', countryName: 'Égypte', flagEmoji: '🇪🇬', explanation: 'L\'Égypte a l\'aigle de Saladin doré au milieu.' },
      { countryId: 'sy', countryName: 'Syrie', flagEmoji: '🇸🇾', explanation: 'La Syrie a 2 étoiles vertes sur la bande blanche.' }
    ]
  },
  {
    id: 'pk',
    name: 'Pakistan',
    flagEmoji: '🇵🇰',
    difficulty: 'moyen',
    continent: 'Asie',
    capital: 'Islamabad',
    region: 'Asie du Sud',
    fun_fact: 'La bande blanche verticale le long de la hampe représente les minorités religieuses non musulmanes.',
    mnemonic: 'Bande verticale blanche à gauche, champ vert sombre avec grand croissant et étoile blanche inclinée.',
    common_confusions: [
      { countryId: 'tr', countryName: 'Turquie', flagEmoji: '🇹🇷', explanation: 'La Turquie est sur fond rouge sans bande blanche.' }
    ]
  },
  {
    id: 'vn',
    name: 'Vietnam',
    flagEmoji: '🇻🇳',
    difficulty: 'moyen',
    continent: 'Asie',
    capital: 'Hanoï',
    region: 'Asie du Sud-Est',
    fun_fact: 'Les cinq branches de l\'étoile symbolisent les ouvriers, paysans, soldats, intellectuels et jeunes.',
    mnemonic: 'Fond rouge avec une unique grande étoile dorée à 5 branches au centre.',
    common_confusions: [
      { countryId: 'cn', countryName: 'Chine', flagEmoji: '🇨🇳', explanation: 'La Chine a 5 étoiles dans le coin supérieur gauche.' },
      { countryId: 'so', countryName: 'Somalie', flagEmoji: '🇸🇴', explanation: 'La Somalie a une étoile blanche sur fond bleu ciel.' }
    ]
  },
  {
    id: 'th',
    name: 'Thaïlande',
    flagEmoji: '🇹🇭',
    difficulty: 'moyen',
    continent: 'Asie',
    capital: 'Bangkok',
    region: 'Asie du Sud-Est',
    fun_fact: 'Appelé le "Trairanga" (tricolore). La bande bleue centrale est deux fois plus large que les autres.',
    mnemonic: '5 bandes horizontales symétriques : rouge, blanc, large bleu au centre, blanc, rouge.',
    common_confusions: [
      { countryId: 'cr', countryName: 'Costa Rica', flagEmoji: '🇨🇷', explanation: 'Le Costa Rica a les couleurs inversées : bleu en haut et bas, large rouge au centre.' }
    ]
  },
  {
    id: 'ph',
    name: 'Philippines',
    flagEmoji: '🇵🇭',
    difficulty: 'moyen',
    continent: 'Asie',
    capital: 'Manille',
    region: 'Asie du Sud-Est',
    fun_fact: 'Seul drapeau officiel au monde inversé en temps de guerre (la bande rouge passe alors au-dessus de la bleue).',
    mnemonic: 'Triangle blanc à gauche avec soleil doré à 8 rayons et 3 étoiles dorées, bande bleue en haut, rouge en bas.',
    isIsland: true,
    common_confusions: [
      { countryId: 'cz', countryName: 'Tchéquie', flagEmoji: '🇨🇿', explanation: 'La Tchéquie a un triangle bleu à gauche sans soleil.' }
    ]
  },
  {
    id: 'id',
    name: 'Indonésie',
    flagEmoji: '🇮🇩',
    difficulty: 'moyen',
    continent: 'Asie',
    capital: 'Jakarta',
    region: 'Asie du Sud-Est',
    fun_fact: 'Appelé "Sang Saka Merah-Putih", hérité de la bannière de l\'empire Majapahit au XIIIe siècle.',
    mnemonic: 'Deux bandes horizontales : rouge en haut, blanc en bas (ratio 2:3).',
    isIsland: true,
    common_confusions: [
      { countryId: 'mc', countryName: 'Monaco', flagEmoji: '🇲🇨', explanation: 'Monaco a les mêmes couleurs mais dans un ratio plus carré (4:5).' },
      { countryId: 'pl', countryName: 'Pologne', flagEmoji: '🇵🇱', explanation: 'La Pologne a le blanc en haut et le rouge en bas.' },
      { countryId: 'sg', countryName: 'Singapour', flagEmoji: '🇸🇬', explanation: 'Singapour a un croissant et 5 étoiles blanches dans le coin supérieur rouge.' }
    ]
  },
  {
    id: 'my',
    name: 'Malaisie',
    flagEmoji: '🇲🇾',
    difficulty: 'moyen',
    continent: 'Asie',
    capital: 'Kuala Lumpur',
    region: 'Asie du Sud-Est',
    fun_fact: 'Surnommé "Jalur Gemilang" (bandes de gloire), l\'étoile à 14 branches représente les 13 États plus le gouvernement fédéral.',
    mnemonic: '14 bandes rouge et blanc, canton bleu avec croissant de lune et étoile jaune à 14 branches.',
    common_confusions: [
      { countryId: 'us', countryName: 'États-Unis', flagEmoji: '🇺🇸', explanation: 'Les États-Unis ont 50 étoiles blanches et pas de croissant.' }
    ]
  },
  {
    id: 'sg',
    name: 'Singapour',
    flagEmoji: '🇸🇬',
    difficulty: 'moyen',
    continent: 'Asie',
    capital: 'Singapour',
    region: 'Asie du Sud-Est',
    fun_fact: 'Le croissant représente une jeune nation en ascension, les 5 étoiles incarnent démocratie, paix, progrès, justice et égalité.',
    mnemonic: 'Bande rouge en haut avec croissant et cercle de 5 étoiles blanches, bande blanche en bas.',
    isIsland: true,
    common_confusions: [
      { countryId: 'id', countryName: 'Indonésie', flagEmoji: '🇮🇩', explanation: 'L\'Indonésie n\'a aucun motif sur le rouge.' }
    ]
  },
  {
    id: 'nz',
    name: 'Nouvelle-Zélande',
    flagEmoji: '🇳🇿',
    difficulty: 'moyen',
    continent: 'Océanie',
    capital: 'Wellington',
    region: 'Australasie',
    fun_fact: 'Ses étoiles représentent la Croix du Sud mais sont ROUGES à bordure blanche, symbolisant le peuple maori et l\'océan.',
    mnemonic: 'Union Jack en haut à gauche, 4 étoiles ROUGES à liseré blanc à droite, pas de grosse étoile blanche.',
    isIsland: true,
    common_confusions: [
      { countryId: 'au', countryName: 'Australie', flagEmoji: '🇦🇺', explanation: 'L\'Australie a 6 étoiles BLANCHES (dont la grande étoile de la Fédération à 7 branches sous l\'Union Jack).' }
    ]
  }
];
