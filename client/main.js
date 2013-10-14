
Meteor.subscribe('comments', Session.get('currentIngredeintId'));
Meteor.subscribe('singleIngredient', Session.get('currentIngredientId'));

ingredientsAllHandle = Meteor.subscribeWithPagination('ingredientsAll', 30);
ingredientsSweetHandle = Meteor.subscribeWithPagination('ingredientsSweet', 30);
ingredientsFlavourHandle = Meteor.subscribeWithPagination('ingredientsFlavour', 30);
ingredientsBitterHandle = Meteor.subscribeWithPagination('ingredientsBitter', 30);
ingredientsSpiceHandle = Meteor.subscribeWithPagination('ingredientsSpice', 30);
ingredientsSourHandle = Meteor.subscribeWithPagination('ingredientsSour', 30);
ingredientsSaltyHandle = Meteor.subscribeWithPagination('ingredientsSalty', 30);