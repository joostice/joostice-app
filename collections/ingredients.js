//Collections 

Ingredients = new Meteor.Collection('ingredients');

Ingredients.allow({
	insert: isAdmin,
	update: isAdmin,
	remove: isAdmin,
});

Meteor.methods({
	// CRUD rules and methods go here
});