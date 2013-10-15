Deps.autorun(function(){
	Meteor.subscribe('comments', Session.get('currentIngredeintId'));
	Meteor.subscribe('singleIngredient', Session.get('currentIngredientId'));
});

var p = 30;

ingredientsAllHandle = Meteor.subscribeWithPagination('ingredientsAll', p);
ingredientsSweetHandle = Meteor.subscribeWithPagination('ingredientsSweet', p);
ingredientsFlavourHandle = Meteor.subscribeWithPagination('ingredientsFlavour', p);
ingredientsBitterHandle = Meteor.subscribeWithPagination('ingredientsBitter', p);
ingredientsSpiceHandle = Meteor.subscribeWithPagination('ingredientsSpice', p);
ingredientsSourHandle = Meteor.subscribeWithPagination('ingredientsSour', p);
ingredientsSaltyHandle = Meteor.subscribeWithPagination('ingredientsSalty', p);
ingredientsPopularHandle = Meteor.subscribeWithPagination('ingredientsPopular', p);

