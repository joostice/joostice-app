/*

Template.ingredientEdit.helpers({
	post: function(){
		return Ingredients.findOne(Session.get('currentIngredientId'));
	}
});

Template.ingredientEdit.events({
	'submit form': function(e){
		e.preventDefault();

		var currentIngredientId = Session.get('currentIngredientId');

		var postProperties = {
			url: $(e.target).find('[name= url]').val(),
			title: $(e.target).find('[name= title]').val()
		}

		Ingredients.update(currentIngredientId, {$set: postProperties}, function(error){
			if(error){
				//display error to user
				alert(error.reason);
			}
			else{
				Meteor.Router.to('postPage', currentIngredientId);
			}

		});
	},

		'click .delete': function(e){
			e.preventDefault();

			if (confirm("Delete this post?")){
				var currentIngredientId = Session.get('currentIngredientId');
				Ingredients.remove(currentIngredientId);
				Meteor.Router.to('postsList');
			}
		}
});


*/