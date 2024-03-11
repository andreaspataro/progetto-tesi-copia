var colori = [
    { id: '0', color: '#3c096c', type: 'colors' },
    { id: '1', color: '#0052a3', type: 'colors' },
    { id: '2', color: '#5226ef', type: 'colors' },
    { id: '3', color: '#694a38', type: 'colors' },
    { id: '4', color: '#136f63', type: 'colors' },
    { id: '5', color: '#29524a', type: 'colors' },
    { id: '6', color: '#cf5c36', type: 'colors' },
    { id: '7', color: '#007e73', type: 'colors' },
    { id: '8', color: '#100b00', type: 'colors' },
    { id: '9', color: '#3a0ca3', type: 'colors' },
    { id: '10', color: '#ff9100', type: 'colors' },
    { id: '11', color: '#ff9e00', type: 'colors' },
    { id: '12', color: '#ff6d00', type: 'colors' },
    { id: '13', color: '#3626a7', type: 'colors' },
    { id: '14', color: '#f18805', type: 'colors' },
    { id: '15', color: '#f0a202', type: 'colors' },
    { id: '16', color: '#ffba49', type: 'colors' },
    { id: '17', color: '#f7b267', type: 'colors' },
    { id: '18', color: '#f98948', type: 'colors' },
    { id: '19', color: '#f5853f', type: 'colors' },
    { id: '20', color: '#e55934', type: 'colors' },
    { id: '21', color: '#ea6133', type: 'colors' },
    { id: '22', color: '#efa91d', type: 'colors' },
    { id: '23', color: '#9899a6', type: 'colors' },
    { id: '24', color: '#fb8b24', type: 'colors' },
    { id: '25', color: '#ffba43', type: 'colors' },
    { id: '26', color: '#32a287', type: 'colors' },
    { id: '27', color: '#4169e1', type: 'colors' },
    { id: '28', color: '#5d3a00', type: 'colors' },
    { id: '29', color: '#423b0b', type: 'colors' },
    { id: '30', color: '#197278', type: 'colors' },
    { id: '31', color: '#EDDDD4', type: 'colors' },
    { id: '32', color: '#C44536', type: 'colors' },
    { id: '33', color: '#772E25', type: 'colors' },
    { id: '34', color: '#C18C5D', type: 'colors' },
    { id: '35', color: '#CE796B', type: 'colors' },
    { id: '36', color: '#ECC8AF', type: 'colors' },
    { id: '37', color: '#498467', type: 'colors' },
    { id: '38', color: '#EDE5A6', type: 'colors' },
    { id: '39', color: '#1C2321', type: 'colors' },
    { id: '40', color: '#49392C', type: 'colors' },
    { id: '41', color: '#FF958C', type: 'colors' },
    { id: '42', color: '#F1E9DA', type: 'colors' },
    { id: '43', color: '#D90368', type: 'colors' },
    { id: '44', color: '#F6E7CB', type: 'colors' },
    { id: '45', color: '#F95738', type: 'colors' },
    { id: '46', color: '#EBEBD3', type: 'colors' },
    { id: '47', color: '#D7BBA8', type: 'colors' },
    { id: '48', color: '#E26D5A', type: 'colors' },
    { id: '49', color: '#0DAB76', type: 'colors' },
    { id: '50', color: '#FAFAFA', type: 'colors' },
    { id: '51', color: '#686963', type: 'colors' },
    { id: '52', color: '#DB5461', type: 'colors' },
    { id: '53', color: '#343330', type: 'colors' },
    { id: '54', color: '#FFA737', type: 'colors' },
    { id: '55', color: '#724CF9', type: 'colors' },
    { id: '56', color: '#BF4E30', type: 'colors' },
    { id: '57', color: '#E3655B', type: 'colors' },
    { id: '58', color: '#2B50AA', type: 'colors' },
    { id: '59', color: '#DA627D', type: 'colors' },
    { id: '60', color: '#FCA17D', type: 'colors' },
    { id: '61', color: '#F9DBBD', type: 'colors' },
    { id: '62', color: '#721817', type: 'colors' },
    { id: '63', color: '#FA9F42', type: 'colors' },
    { id: '64', color: '#684E32', type: 'colors' },
    { id: '65', color: '#DF9B6D', type: 'colors' },
    { id: '66', color: '#CCB69B', type: 'colors' },
    { id: '67', color: '#EFC69B', type: 'colors' },
    { id: '68', color: '#F26419', type: 'colors' },
    { id: '69', color: '#F6AE2D', type: 'colors' },
    { id: '70', color: '#F78154', type: 'colors' },
    { id: '71', color: '#755540', type: 'colors' },
    { id: '72', color: '#FCD581', type: 'colors' },
    { id: '73', color: '#D1462F', type: 'colors' },
    { id: '74', color: '#C1292E', type: 'colors' },
    { id: '75', color: '#594731', type: 'colors' },
    { id: '76', color: '#493E2D', type: 'colors' },
    { id: '77', color: '#172121', type: 'colors' },
    { id: '78', color: '#343434', type: 'colors' },
    { id: '79', color: '#453f3c', type: 'colors' },
    { id: '80', color: '#8d775f', type: 'colors' },
    { id: '81', color: '#EF946C', type: 'colors' },
    { id: '82', color: '#ad2e24', type: 'colors' },
    { id: '83', color: '#81171b', type: 'colors' }
]

var fonts = [
    { id: '0', font: "Besley", link: "https://fonts.googleapis.com/css2?family=Besley&display=swap", type: 'fonts' },
    { id: '1', font: "Slabo 27px", link: "https://fonts.googleapis.com/css2?family=Slabo+27px&display=swap", type: 'fonts' },
    { id: '2', font: "Rokkitt", link: "https://fonts.googleapis.com/css2?family=Rokkitt&display=swap", type: 'fonts' },
    { id: '3', font: "Playfair Display", link: "https://fonts.googleapis.com/css2?family=Playfair+Display&display=swap", type: 'fonts' },
    { id: '4', font: "Libre Baskerville", link: "https://fonts.googleapis.com/css2?family=Libre+Baskerville&display=swap", type: 'fonts' },
    { id: '5', font: "Bitter", link: "https://fonts.googleapis.com/css2?family=Bitter&display=swap", type: 'fonts' },
    { id: '6', font: "EB Garamond", link: "https://fonts.googleapis.com/css2?family=EB+Garamond&display=swap", type: 'fonts' },
    { id: '7', font: "DM Serif Display", link: "https://fonts.googleapis.com/css2?family=DM+Serif+Display&display=swap", type: 'fonts' },
    { id: '8', font: "Cormorant Garamond", link: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond&display=swap", type: 'fonts' },
    { id: '9', font: "Montserrat", link: "https://fonts.googleapis.com/css2?family=Montserrat&display=swap", type: 'fonts' },
    { id: '10', font: "Poppins", link: "https://fonts.googleapis.com/css2?family=Poppins&display=swap", type: 'fonts' },
    { id: '11', font: "Inter", link: "https://fonts.googleapis.com/css2?family=Inter&display=swap", type: 'fonts' },
    { id: '12', font: "Noto Sans", link: "https://fonts.googleapis.com/css2?family=Noto+Sans&display=swap", type: 'fonts' },
    { id: '13', font: "Nunito", link: "https://fonts.googleapis.com/css2?family=Nunito&display=swap", type: 'fonts' },
    { id: '14', font: "Quicksand", link: "https://fonts.googleapis.com/css2?family=Quicksand&display=swap", type: 'fonts' },
    { id: '15', font: "Jost", link: "https://fonts.googleapis.com/css2?family=Jost&display=swap", type: 'fonts' },
    { id: '16', font: "Hind", link: "https://fonts.googleapis.com/css2?family=Hind&display=swap", type: 'fonts' },
    { id: '17', font: "Signika Negative", link: "https://fonts.googleapis.com/css2?family=Signika+Negative&display=swap", type: 'fonts' },
    { id: '18', font: "Roboto Flex", link: "https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,XTRA,YOPQ,YTDE,YTFI,YTLC,YTUC@8..144,400,116,-250,600,500,725&display=swap", type: 'fonts' },
    { id: '19', font: "Pacifico", link: "https://fonts.googleapis.com/css2?family=Pacifico&display=swap", type: 'fonts' },
    { id: '20', font: "Caveat", link: "https://fonts.googleapis.com/css2?family=Caveat&display=swap", type: 'fonts' },
    { id: '21', font: "Sacramento", link: "https://fonts.googleapis.com/css2?family=Sacramento&display=swap", type: 'fonts' },
    { id: '22', font: "Yellowtail", link: "https://fonts.googleapis.com/css2?family=Yellowtail&display=swap", type: 'fonts' },
    { id: '23', font: "Cookie", link: "https://fonts.googleapis.com/css2?family=Cookie&display=swap", type: 'fonts' },
    { id: '24', font: "Gloria Hallelujah", link: "https://fonts.googleapis.com/css2?family=Gloria+Hallelujah&display=swap", type: 'fonts' },
    { id: '25', font: "Dosis", link: "https://fonts.googleapis.com/css2?family=Dosis&display=swap", type: 'fonts' },
    { id: '26', font: "Single Day", link: "https://fonts.googleapis.com/css2?family=Single+Day&display=swap", type: 'fonts' },
    { id: '27', font: "Roboto Mono", link: "https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap", type: 'fonts' },
    { id: '28', font: "IBM Plex Mono", link: "https://fonts.googleapis.com/css2?family=IBM+Plex+Mono&display=swap", type: 'fonts' },
    { id: '29', font: "Open Sans", link: "https://fonts.googleapis.com/css2?family=Open+Sans&display=swap", type: 'fonts' },
    { id: '30', font: "Roboto", link: "https://fonts.googleapis.com/css2?family=Roboto&display=swap", type: 'fonts' },
    { id: '31', font: "Lato", link: "https://fonts.googleapis.com/css2?family=Lato&display=swap", type: 'fonts' },
    { id: '32', font: "Ubuntu", link: "https://fonts.googleapis.com/css2?family=Ubuntu&display=swap", type: 'fonts' },
    { id: '33', font: "Archivo Black", link: "https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap", type: 'fonts' },
    { id: '34', font: "Asap", link: "https://fonts.googleapis.com/css2?family=Asap&display=swap", type: 'fonts' },
    { id: '35', font: "Red Hat Display", link: "https://fonts.googleapis.com/css2?family=Red+Hat+Display&display=swap", type: 'fonts' },
    { id: '36', font: "DM Sans", link: "https://fonts.googleapis.com/css2?family=DM+Sans:opsz@9..40&display=swap", type: 'fonts' },
    { id: '37', font: "Abril Fatface", link: "https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap", type: 'fonts' },
    { id: '38', font: "Acme", link: "https://fonts.googleapis.com/css2?family=Acme&display=swap", type: 'fonts' },
    { id: '39', font: "Belanosima", link: "https://fonts.googleapis.com/css2?family=Belanosima&display=swap", type: 'fonts' },
    { id: '40', font: "Bowlby One", link: "https://fonts.googleapis.com/css2?family=Bowlby+One&display=swap", type: 'fonts' },
    { id: '41', font: "Chelsea Market", link: "https://fonts.googleapis.com/css2?family=Chelsea+Market&display=swap", type: 'fonts' },
    { id: '42', font: "Fugaz One", link: "https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap", type: 'fonts' },
    { id: '43', font: "Josefin Sans", link: "https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap", type: 'fonts' },
    { id: '44', font: "Staatliches", link: "https://fonts.googleapis.com/css2?family=Staatliches&display=swap", type: 'fonts' },
    { id: '45', font: "Tilt Warp", link: "https://fonts.googleapis.com/css2?family=Tilt+Warp&display=swap", type: 'fonts' }
];

var materiali = [];
var interiors = [];
var exteriors = [];
var places = [];

for (let i = 0; i < 74; i++) {
    materiali[i] = { id: "" + i + "", link: 'img/materiali/img_materiali_' + i + ".jpg", type: "textures"};
}

for (let i = 0; i < 72; i++) {
    interiors[i] = { id: "" + i + "", link: 'img/interiors/img_interiors_' + i + ".jpg", type: "interiors" };
}

for (let i = 0; i < 85; i++) {
    exteriors[i] = { id: "" + i + "", link: 'img/exteriors/img_exteriors_' + i + ".jpg", type: "exteriors" };
}

for (let i = 0; i < 76; i++) {
    places[i] = { id: "" + i + "", link: 'img/places/img_places_' + i + ".jpg", type: "places" };
}

var moods = [
    { id: '0', word: 'joyful', type: 'moods' },
    { id: '1', word: 'euphoric', type: 'moods' },
    { id: '2', word: 'ecstatic', type: 'moods' },
    { id: '3', word: 'thrilled', type: 'moods' },
    { id: '4', word: 'grateful', type: 'moods' },
    { id: '5', word: 'radiant', type: 'moods' },
    { id: '6', word: 'happy', type: 'moods' },
    { id: '7', word: 'blue', type: 'moods' },
    { id: '8', word: 'sad', type: 'moods' },
    { id: '9', word: 'heartbroken', type: 'moods' },
    { id: '10', word: 'somber', type: 'moods' },
    { id: '11', word: 'melancholic', type: 'moods' },
    { id: '12', word: 'terrified', type: 'moods' },
    { id: '13', word: 'scared', type: 'moods' },
    { id: '14', word: 'nervous', type: 'moods' },
    { id: '15', word: 'worried', type: 'moods' },
    { id: '16', word: 'hesitant', type: 'moods' },
    { id: '17', word: 'frightened', type: 'moods' },
    { id: '18', word: 'paralyzed', type: 'moods' },
    { id: '19', word: 'alarmed', type: 'moods' },
    { id: '20', word: 'hated', type: 'moods' },
    { id: '21', word: 'sickened', type: 'moods' },
    { id: '22', word: 'irritated', type: 'moods' },
    { id: '23', word: 'annoyed', type: 'moods' },
    { id: '24', word: 'hateful', type: 'moods' },
    { id: '25', word: 'bitter', type: 'moods' },
    { id: '26', word: 'offended', type: 'moods' },
    { id: '27', word: 'appalled', type: 'moods' },
    { id: '28', word: 'angry', type: 'moods' },
    { id: '29', word: 'resentful', type: 'moods' },
    { id: '30', word: 'hostile', type: 'moods' },
    { id: '31', word: 'mad', type: 'moods' },
    { id: '32', word: 'frustrated', type: 'moods' },
    { id: '33', word: 'surprised', type: 'moods' },
    { id: '34', word: 'shocked', type: 'moods' },
    { id: '35', word: 'amazed', type: 'moods' },
    { id: '36', word: 'overwhelmed', type: 'moods' },
    { id: '37', word: 'unprepared', type: 'moods' },
    { id: '38', word: 'impressed', type: 'moods' },
    { id: '39', word: 'confused', type: 'moods' },
    { id: '40', word: 'upset', type: 'moods' },
    { id: '41', word: 'doubtful', type: 'moods' },
    { id: '42', word: 'shy', type: 'moods' },
    { id: '43', word: 'unsure', type: 'moods' },
    { id: '44', word: 'positive', type: 'moods' },
    { id: '45', word: 'pessimistic', type: 'moods' },
    { id: '46', word: 'optimistic', type: 'moods' },
    { id: '47', word: 'amused', type: 'moods' },
    { id: '48', word: 'perplexed', type: 'moods' },
    { id: '49', word: 'embarrassed', type: 'moods' },
    { id: '50', word: 'lost', type: 'moods' },
    { id: '51', word: 'tense', type: 'moods' },
    { id: '52', word: 'in love', type: 'moods' },
    { id: '53', word: 'charmed', type: 'moods' },
    { id: '54', word: 'powerful', type: 'moods' },
    { id: '55', word: 'confident', type: 'moods' },
    { id: '56', word: 'empowered', type: 'moods' },
    { id: '57', word: 'unique', type: 'moods' },
    { id: '58', word: 'sure', type: 'moods' },
    { id: '59', word: 'dynamic', type: 'moods' },
    { id: '60', word: 'determined', type: 'moods' },
    { id: '61', word: 'ambitious', type: 'moods' },
    { id: '62', word: 'motivated', type: 'moods' },
    { id: '63', word: 'healthy', type: 'moods' },
    { id: '64', word: 'focused', type: 'moods' },
    { id: '65', word: 'refreshed', type: 'moods' },
    { id: '66', word: 'calm', type: 'moods' },
    { id: '67', word: 'carefree', type: 'moods' },
    { id: '68', word: 'caring', type: 'moods' },
    { id: '69', word: 'blissful', type: 'moods' },
    { id: '70', word: 'stressed', type: 'moods' },
    { id: '71', word: 'loved', type: 'moods' },
    { id: '72', word: 'lonely', type: 'moods' },
    { id: '73', word: 'weird', type: 'moods' },
    { id: '74', word: 'uncomfortable', type: 'moods' },
    { id: '75', word: 'accomplished', type: 'moods' },
    { id: '76', word: 'accepting', type: 'moods' },
    { id: '77', word: 'chill', type: 'moods' },
    { id: '78', word: 'cold', type: 'moods' },
    { id: '79', word: 'comfortable', type: 'moods' },
    { id: '80', word: 'composed', type: 'moods' },
    { id: '81', word: 'cool', type: 'moods' },
    { id: '82', word: 'cordial', type: 'moods' },
    { id: '83', word: 'courageous', type: 'moods' },
    { id: '84', word: 'curious', type: 'moods' },
    { id: '85', word: 'dreamy', type: 'moods' },
    { id: '86', word: 'energetic', type: 'moods' },
    { id: '87', word: 'excited', type: 'moods' },
    { id: '88', word: 'fearless', type: 'moods' },
    { id: '89', word: 'festive', type: 'moods' },
    { id: '90', word: 'friendly', type: 'moods' },
    { id: '91', word: 'fulfilled', type: 'moods' },
    { id: '92', word: 'funny', type: 'moods' },
    { id: '93', word: 'gracious', type: 'moods' },
    { id: '94', word: 'honest', type: 'moods' },
    { id: '95', word: 'hot', type: 'moods' },
    { id: '96', word: 'hyper', type: 'moods' },
    { id: '97', word: 'important', type: 'moods' },
    { id: '98', word: 'liberating', type: 'moods' },
    { id: '99', word: 'light', type: 'moods' },
    { id: '100', word: 'nostalgic', type: 'moods' },
    { id: '101', word: 'open', type: 'moods' },
    { id: '102', word: 'outgoing', type: 'moods' },
    { id: '103', word: 'quiet', type: 'moods' },
    { id: '104', word: 'reserved', type: 'moods' },
    { id: '105', word: 'sentimental', type: 'moods' },
    { id: '106', word: 'serene', type: 'moods' },
    { id: '107', word: 'sunny', type: 'moods' },
    { id: '108', word: 'tender', type: 'moods' },
    { id: '109', word: 'upbeat', type: 'moods' },
    { id: '110', word: 'warm', type: 'moods' },
    { id: '111', word: 'vivacious', type: 'moods' },
    { id: '112', word: 'anxious', type: 'moods' },
    { id: '113', word: 'bored', type: 'moods' },
    { id: '114', word: 'betrayed', type: 'moods' },
    { id: '115', word: 'difficult', type: 'moods' },
    { id: '116', word: 'distressed', type: 'moods' },
    { id: '117', word: 'exhausted', type: 'moods' },
    { id: '118', word: 'moody', type: 'moods' },
    { id: '119', word: 'patient', type: 'moods' },
    { id: '120', word: 'sexy', type: 'moods' }
]

var adjectives = [
    { id: '0', word: 'standard', type: 'adjectives' },
    { id: '1', word: 'nonconformist', type: 'adjectives' },
    { id: '2', word: 'minimalism', type: 'adjectives' },
    { id: '3', word: 'maximalism', type: 'adjectives' },
    { id: '4', word: 'liquid', type: 'adjectives' },
    { id: '5', word: 'rebel', type: 'adjectives' },
    { id: '6', word: 'rigid', type: 'adjectives' },
    { id: '7', word: 'retro', type: 'adjectives' },
    { id: '8', word: 'psychedelic', type: 'adjectives' },
    { id: '9', word: 'geometric', type: 'adjectives' },
    { id: '10', word: 'modern', type: 'adjectives' },
    { id: '11', word: 'brutalism', type: 'adjectives' },
    { id: '12', word: 'dark', type: 'adjectives' },
    { id: '13', word: 'bright', type: 'adjectives' },
    { id: '14', word: 'asymmetrical', type: 'adjectives' },
    { id: '15', word: 'grid', type: 'adjectives' },
    { id: '16', word: 'collage', type: 'adjectives' },
    { id: '17', word: 'abstract', type: 'adjectives' },
    { id: '18', word: 'vintage', type: 'adjectives' },
    { id: '19', word: 'perspective', type: 'adjectives' },
    { id: '20', word: 'illusion', type: 'adjectives' },
    { id: '21', word: 'hot', type: 'adjectives' },
    { id: '22', word: 'cold', type: 'adjectives' },
    { id: '23', word: 'large', type: 'adjectives' },
    { id: '24', word: 'narrow', type: 'adjectives' },
    { id: '25', word: 'new', type: 'adjectives' },
    { id: '26', word: 'imitation', type: 'adjectives' },
    { id: '27', word: 'distortion', type: 'adjectives' },
    { id: '28', word: 'clean', type: 'adjectives' },
    { id: '29', word: 'blur', type: 'adjectives' },
    { id: '30', word: 'popular', type: 'adjectives' },
    { id: '31', word: 'exclusive', type: 'adjectives' },
    { id: '32', word: 'chaos', type: 'adjectives' },
    { id: '33', word: 'natural', type: 'adjectives' },
    { id: '34', word: 'artificial', type: 'adjectives' },
    { id: '35', word: 'divine', type: 'adjectives' },
    { id: '36', word: 'spiritual', type: 'adjectives' },
    { id: '37', word: 'holy', type: 'adjectives' },
    { id: '38', word: 'serious', type: 'adjectives' },
    { id: '39', word: 'ambitious', type: 'adjectives' },
    { id: '40', word: 'repetition', type: 'adjectives' },
    { id: '41', word: 'original', type: 'adjectives' },
    { id: '42', word: 'explicit', type: 'adjectives' },
    { id: '43', word: 'mono', type: 'adjectives' },
    { id: '44', word: 'stereo', type: 'adjectives' },
    { id: '45', word: 'experiment', type: 'adjectives' },
    { id: '46', word: 'by the book', type: 'adjectives' },
    { id: '47', word: 'magic', type: 'adjectives' },
    { id: '48', word: 'insecure', type: 'adjectives' },
    { id: '49', word: 'movement', type: 'adjectives' },
    { id: '50', word: 'attention', type: 'adjectives' },
    { id: '51', word: 'detailed', type: 'adjectives' },
    { id: '52', word: 'plain', type: 'adjectives' },
    { id: '53', word: 'crisp', type: 'adjectives' },
    { id: '54', word: 'funky', type: 'adjectives' },
    { id: '55', word: 'symbolism', type: 'adjectives' },
    { id: '56', word: 'hidden', type: 'adjectives' },
    { id: '57', word: 'precise', type: 'adjectives' },
    { id: '58', word: 'loose', type: 'adjectives' },
    { id: '59', word: 'uptempo', type: 'adjectives' },
    { id: '60', word: 'slow', type: 'adjectives' },
    { id: '61', word: 'iconic', type: 'adjectives' },
    { id: '62', word: 'shiny', type: 'adjectives' },
    { id: '63', word: 'sharp', type: 'adjectives' },
    { id: '64', word: 'solo', type: 'adjectives' },
    { id: '65', word: 'group', type: 'adjectives' },
    { id: '66', word: 'structure', type: 'adjectives' },
    { id: '67', word: 'digital', type: 'adjectives' },
    { id: '68', word: 'analog', type: 'adjectives' },
    { id: '69', word: 'real', type: 'adjectives' },
    { id: '70', word: 'raw', type: 'adjectives' },
    { id: '71', word: 'spirit', type: 'adjectives' },
    { id: '72', word: 'human', type: 'adjectives' },
    { id: '73', word: 'self', type: 'adjectives' },
    { id: '74', word: 'balance', type: 'adjectives' },
    { id: '75', word: 'messy', type: 'adjectives' },
    { id: '76', word: 'clear', type: 'adjectives' },
    { id: '77', word: 'strict', type: 'adjectives' },
    { id: '78', word: 'pop', type: 'adjectives' },
    { id: '79', word: 'spectrum', type: 'adjectives' },
    { id: '80', word: 'symbolic', type: 'adjectives' },
    { id: '81', word: 'glossy', type: 'adjectives' },
    { id: '82', word: 'croud', type: 'adjectives' },
    { id: '83', word: 'company', type: 'adjectives' },
    { id: '84', word: 'shape', type: 'adjectives' }
]


var elements = [
    {
        type: "colors",
        set: colori
    },
    {
        type: "colors",
        set: colori
    },
    {
        type: "fonts",
        set: fonts
    },
    {
        type: "fonts",
        set: fonts
    },
    {
        type: "textures",
        set: materiali
    },
    {
        type: "interiors",
        set: interiors
    },
    {
        type: "exteriors",
        set: exteriors
    },
    {
        type: "places",
        set: places
    },
    {
        type: "moods",
        set: moods
    },
    {
        type: "adjectives",
        set: adjectives
    }
];

var elements_unique = [
    {
        type: "colors",
        set: colori
    },
    {
        type: "fonts",
        set: fonts
    },
    {
        type: "textures",
        set: materiali
    },
    {
        type: "interiors",
        set: interiors
    },
    {
        type: "exteriors",
        set: exteriors
    },
    {
        type: "places",
        set: places
    },
    {
        type: "moods",
        set: moods
    },
    {
        type: "adjectives",
        set: adjectives
    }
];

var random_mode = false;

var elements_titles = [
    'Select a primary color to associate with your project',
    'Select a secondary color to associate with your project',
    'Select a primary font that fits your project',
    'Select a secondary font that fits your project',
    'Select a texture that fits your project',
    'Select an interior design style that reflects your project',
    'Select an exterior architecture style that reflects your project',
    'Select a scenery that represents your project',
    'Select a mood to associate with your project',
    'Select an adjective or a word that fits your project',
]

var random_titles = [
    'Select a random card as a primary color to associate with your project',
    'Select a random card as a secondary color to associate with your project',
    'Select a random card as a primary font that fits your project',
    'Select a random card as a secondary font that fits your project',
    'Select a random card as a texture that fits your project',
    'Select a random card as an interior design style that reflects your project',
    'Select a random card as an exterior architecture style that reflects your project',
    'Select a random card as a scenery that represents your project',
    'Select a random card as a mood to associate with your project',
    'Select a random card as an adjective or a word that fits your project',
]

function ismobile() {
    if (window.innerWidth < 1050) {
        return true;
    } else {
        return false;
    }
}
