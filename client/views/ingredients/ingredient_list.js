Template.ingredientsSweet.helpers({
  options: function() {
    return {
      sort: {sweetness: -1},
      handle: ingredientsSweetHandle,
    }
  }
});

Template.ingredientsFlavour.helpers({
  options: function() {
    return {
      sort: {flavorIntensity: -1},
      handle: ingredientsFlavourHandle,
    }
  }
});

Template.ingredientsBitter.helpers({
  options: function() {
    return {
      sort: {bitterness: -1},
      handle: ingredientsBitterHandle,
    }
  }
});

Template.ingredientsAll.helpers({
  options: function() {
    return {
      sort: {},
      handle: ingredientsAllHandle,
    }
  }
});

Template.ingredientsSalty.helpers({
  options: function() {
    return {
      sort: {saltiness: -1},
      handle: ingredientsSaltyHandle,
    }
  }
});

Template.ingredientsSour.helpers({
  options: function() {
    return {
      sort: {sourness: -1},
      handle: ingredientsSourHandle,
    }
  }
});

Template.ingredientsSpice.helpers({
  options: function() {
    return {
      sort: {spiciness: -1},
      handle: ingredientsSpiceHandle,
    }
  }
});

Template.ingredientList.helpers({
	ingredients: function(){
		return Ingredients.find({}, {sort: this.sort, limit: this.handle.limit()});
	},
	ingredientsReady: function(){
		return this.handle.ready();
	},
	allIngredientsLoaded: function(){
		return this.handle.ready() &&
		Ingredients.find().count() < this.handle.loaded();
	},
	ingredientsWithRank: function(){
		var i=0, options={sort: this.sort, limit: this.handle.limit()};
		return Ingredients.find({}, options).map(function(ingredient){
			ingredient._rank = i;
			i +=1;
			return ingredient;
		});
	}
});