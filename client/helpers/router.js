Meteor.Router.add({
	'/': {to: 'ingredientsAll', as: 'home'},
  '/submit': 'ingredientSubmit',
  '/sweet': 'ingredientsSweet',
  '/flavour':'ingredientsFlavour',
  '/all': 'ingredientsAll',
});

Meteor.Router.filters({
  'requireLogin': function(page) {
    if (Meteor.user())
      return page;
    else if (Meteor.loggingIn())
      return 'loading';
    else
      return 'accessDenied';
  },
  'clearErrors':function(page){
    clearErrors();
    return page;
  }
});


Meteor.Router.filter('clearErrors');