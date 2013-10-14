// pre-populate empty collection with data

if (Ingredients.find().count() === 0 ){
	// create data
	Ingredients.insert({
		title: 'Gala Apple',
		aka: [],
		color: '#B24B22',
		flavorIntensity: 40,
		sweetness: 65,
		saltiness: 3,
		bitterness: 3,
		sourness: 13,
		spiciness: 0,
		url: 'https://en.wikipedia.org/wiki/Gala_(apple)',
		votes: 0,
		upvoters: [],
		benefits: ['Dietary fibre, high in vitamin C, calcium and potassium.'],
		researchPapers: [],
		commentsCount: 0,
	});

Ingredients.insert({
		title: 'Granny Smith Apple',
		aka: [],
		color: '#A9CF07',
		flavorIntensity: 2,
		sweetness: 3,
		saltiness: 0,
		bitterness: 0,
		sourness: 2,
		spiciness: 0,
		url: 'https://en.wikipedia.org/wiki/Granny_Smith',
		votes: 0,
		upvoters: [],
		benefits: ['boast the highest concentration of phenols amongst the apple breeds'],
		researchPapers: [],
		commentsCount: 0,
	});

	Ingredients.insert({
		title: 'Navel Orange',
		aka: [],
		color: '#FF9B31',
		flavorIntensity: 2,
		sweetness: 3,
		saltiness: 0,
		bitterness: 0,
		sourness: 0,
		spiciness: 0,
		url: 'https://en.wikipedia.org/wiki/Orange_(fruit)',
		votes: 0,
		upvoters: [],
		benefits: ['Immune support, high in vitamin C, B1, fibre, folate, and calcium.'],
		researchPapers: [],
		commentsCount: 0,
	});

	Ingredients.insert({
		title: 'Lemon ',
		aka: [],
		color: '#FFED58',
		flavorIntensity: 50,
		sweetness: 3,
		saltiness: 0,
		bitterness: 0,
		sourness: 65,
		spiciness: 0,
		url: 'https://en.wikipedia.org/wiki/Lemon',
		votes: 0,
		upvoters: [],
		benefits: ['Alkalising, high in vitamin C, anti-bacterial, strong antioxidants.'],
		researchPapers: [],
		commentsCount: 0,
	});

	Ingredients.insert({
		title: 'Cavalo Nero',
		aka: ['Kale', 'Tuscan Cabbage'],
		color: '#405A5B',
		flavorIntensity: 4,
		sweetness: 5,
		saltiness: 2,
		bitterness: 4,
		sourness: 0,
		spiciness: 3,
		url: 'https://en.wikipedia.org/wiki/kale',
		votes: 0,
		upvoters: [],
		benefits: ['Supports detoxification, lowers cholesterol, exceptionally high in vitamin K.'],
		researchPapers: [],
		commentsCount: 0,
	});

	Ingredients.insert({
		title: 'Cayenne pepper',
		aka: [],
		color: '#D00C17',
		flavorIntensity: 5,
		sweetness: 10,
		saltiness: 29,
		bitterness: 0,
		sourness: 0,
		spiciness: 80,
		url: 'https://en.wikipedia.org/wiki/Chili_pepper',
		votes: 0,
		upvoters: [],
		benefits: ['High in vitamins A, E, C, B6, K and manganese, immune support.'],
		researchPapers: [],
		commentsCount: 0,
	});

	Ingredients.insert({
		title: 'Ginger',
		aka: [],
		color: '#FBD093',
		flavorIntensity: 85,
		sweetness: 0,
		saltiness: 2,
		bitterness: 0,
		sourness: 0,
		spiciness: 60,
		url: 'https://en.wikipedia.org/wiki/Ginger',
		votes: 0,
		upvoters: [],
		benefits: ['Anti-inflammatory, carminative, relieves motion sickness and nausea.'],
		researchPapers: [],
		commentsCount: 0,
	});

	Ingredients.insert({
		title: 'Watermelon',
		aka: [],
		color: '#ED4639',
		flavorIntensity: 3,
		sweetness: 59,
		saltiness: 1,
		bitterness: 0,
		sourness: 0,
		spiciness: 0,
		url: 'https://en.wikipedia.org/wiki/Watermelon',
		votes: 0,
		upvoters: [],
		benefits: ['Contains vitamin C, A and anti-inflammatory phytonutrients.'],
		researchPapers: [],
		commentsCount: 0,
	});


};