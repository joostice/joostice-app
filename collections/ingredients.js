//Collections 

Ingredients = new Meteor.Collection('ingredients');

Ingredients.allow({
	update: isAdmin,
	delete: isAdmin,
	create: isAdmin,
});

Meteor.methods({
	// CRUD rules and methods go here
});