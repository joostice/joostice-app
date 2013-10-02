Meteor.Router.add({
	'/': 'ingredientList',
  '/submit': 'ingredientSubmit',
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