//publish entire ingredients collection

Meteor.publish('ingredients', function(){
	return Ingredients.find();
});

Meteor.publish('ingredientsSweet', function(limit){
	return Ingredients.find({}, {sort: {sweetness: -1}, limit: limit});
});

Meteor.publish('ingredientsFlavour', function(limit){
	return Ingredients.find({}, {sort: {flavorIntensity: -1}, limit: limit});
});