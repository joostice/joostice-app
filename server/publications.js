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

Meteor.publish('ingredientsBitter', function(limit){
	return Ingredients.find({}, {sort: {bitterness: -1}, limit: limit});
});

Meteor.publish('ingredientsSour', function(limit){
	return Ingredients.find({}, {sort: {sourness: -1}, limit: limit});
});

Meteor.publish('ingredientsSalty', function(limit){
	return Ingredients.find({}, {sort: {saltiness: -1}, limit: limit});
});

Meteor.publish('ingredientsSpice', function(limit){
	return Ingredients.find({}, {sort: {spiciness: -1}, limit: limit});
});

Meteor.publish('singleIngredient', function(id) {
  return id && Ingredients.find(id);
});

Meteor.publish('comments', function(){
	return Comments.find();
});

Meteor.publish('currentUser', function() {
  return Meteor.users.find(this.userId, {fields: {createdAt: 1}});
});
