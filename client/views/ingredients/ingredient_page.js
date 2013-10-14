Template.ingredientPage.helpers({
  currentIngredient: function() {
    return Ingredients.findOne(Session.get('currentIngredientId'));
  },
  comments: function(){
  	return Comments.find({ingredientId: this._id});
  }
}); 

console.log("hey!");
console.log(Session.get('currentIngredientId'));