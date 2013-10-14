//Collections 

Ingredients = new Meteor.Collection('ingredients');

Ingredients.allow({
	insert: isAdmin,
	update: isAdmin,
	remove: isAdmin,
});

Meteor.methods({
 	ingredientInsert: function(ingredientAttributes) {
    var user = Meteor.user(),
      // same link test could be expanded to include www. and other variations on same link
      ingredientWithSameTitle = Ingredients.findOne({title: ingredientAttributes.title } );
      ingredientWithSameLink = Ingredients.findOne({url: ingredientAttributes.url});
    
    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to post new ingredients");
    
    // ensure the ingredient has a title
    if (!ingredientAttributes.title)
      throw new Meteor.Error(422, 'Please fill in a title for the ingredient');
    
    // check that there are no previous ingredients with the same title
    if (ingredientAttributes.title && ingredientWithSameTitle) {
      throw new Meteor.Error(302, 
        'This ingredient has already been posted', 
        ingredientWithSameTitle._id);
    }

    //check that there are no previous ingredients pointing to the same wiki link
    if (ingredientAttributes.url && ingredientWithSameLink) {
      throw new Meteor.Error(302, 
        'This ingredient has already been posted', 
        ingredientWithSameLink._id);
    }

    
    // pick out the whitelisted keys
    // need to make sure to save certain attributes as integers
    var ingredient = _.extend(_.pick(ingredientAttributes,
     'title', 'aka', 'flavorIntensity', 'color', 'sweetness', 'saltiness', 'bitterness', 'sourness', 'spiciness', 'url', 'benefits'), {
      userId: user._id, 
      author: user.username, 
      submitted: new Date().getTime(),
      upvoters: [],
      votes:0,
      commentsCount:0,
    });
    
    var ingredientId = Ingredients.insert(ingredient);
    
    return ingredientId;
  },
});



