// pre-populate empty collection with data

if (Ingredients.find().count() === 0 ){
	// create data
	Ingredients.insert({
		title: 'Gala Apple',
		aka: [],
		color: '#B24B22',
		flavorIntesity: '1',
		sweetness: '4',
		saltiness: '0',
		bitterness: '0',
		sourness: '1',
		spiciness: '0',
		url: 'https://en.wikipedia.org/wiki/Gala_(apple)',
		votes: 0,
		upvoters: [],
		benefits: ['brain food', 'stimulates the production of saliva', 'boost immune system'],
		researchPapers: [],
	})

Ingredients.insert({
		title: 'Granny Smith Apple',
		aka: [],
		color: '#A9CF07',
		flavorIntesity: '2',
		sweetness: '3',
		saltiness: '0',
		bitterness: '0',
		sourness: '2',
		spiciness: '0',
		url: 'https://en.wikipedia.org/wiki/Granny_Smith',
		votes: 0,
		upvoters: [],
		benefits: ['boast the highest concentration of phenols amongst the apple breeds'],
		researchPapers: [],
	})

	Ingredients.insert({
		title: 'Navel Orange',
		aka: [],
		color: '#FF9B31',
		flavorIntesity: '2',
		sweetness: '3',
		saltiness: '0',
		bitterness: '0',
		sourness: '0',
		spiciness: '0',
		url: 'https://en.wikipedia.org/wiki/Orange_(fruit)',
		votes: 0,
		upvoters: [],
		benefits: ['high in vitamin C'],
		researchPapers: [],
	})

	Ingredients.insert({
		title: 'Cavalo Nero',
		aka: ['Kale', 'Tuscan Cabbage'],
		color: '#405A5B',
		flavorIntesity: '4',
		sweetness: '0',
		saltiness: '2',
		bitterness: '4',
		sourness: '0',
		spiciness: '0',
		url: 'https://en.wikipedia.org/wiki/kale',
		votes: 0,
		upvoters: [],
		benefits: ['high in vitamin K', 'alkalising'],
		researchPapers: [],
	})

	Ingredients.insert({
		title: 'Chili',
		aka: ['Cayenne pepper'],
		color: '#D00C17',
		flavorIntesity: '5',
		sweetness: '0',
		saltiness: '2',
		bitterness: '0',
		sourness: '0',
		spiciness: '5',
		url: 'https://en.wikipedia.org/wiki/Chili_pepper',
		votes: 0,
		upvoters: [],
		benefits: ['can help with weight-loss', 'pain-relief', 'cholesterol'],
		researchPapers: [],
	})

	Ingredients.insert({
		title: 'Ginger',
		aka: [],
		color: '#FBD093',
		flavorIntesity: '5',
		sweetness: '0',
		saltiness: '2',
		bitterness: '0',
		sourness: '0',
		spiciness: '4',
		url: 'https://en.wikipedia.org/wiki/Ginger',
		votes: 0,
		upvoters: [],
		benefits: ['traditional remedy for common cold', 'aids digestion', 'Ayurvedic aphrodisiac', 'improves absorption of essential nutrients'],
		researchPapers: [],
	})

	Ingredients.insert({
		title: 'Watermelon',
		aka: [],
		color: '#ED4639',
		flavorIntesity: '1',
		sweetness: '4',
		saltiness: '1',
		bitterness: '0',
		sourness: '0',
		spiciness: '0',
		url: 'https://en.wikipedia.org/wiki/Watermelon',
		votes: 0,
		upvoters: [],
		benefits: ['cardiovascular health'],
		researchPapers: [],
	})


};