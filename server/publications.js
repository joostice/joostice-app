//publish entire ingredients collection

Meteor.publish('ingredients', function(){
	return Ingredients.find();
});