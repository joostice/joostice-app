Template.ingredientEdit.helpers({
	post: function(){
		return Ingredients.findOne(Session.get('currentPostId'));
	}
});

Template.ingredientEdit.events({
	'submit form': function(e){
		e.preventDefault();

		var currentPostId = Session.get('currentPostId');

		var postProperties = {
			url: $(e.target).find('[name= url]').val(),
			title: $(e.target).find('[name= title]').val()
		}

		Ingredients.update(currentPostId, {$set: postProperties}, function(error){
			if(error){
				//display error to user
				alert(error.reason);
			}
			else{
				Meteor.Router.to('postPage', currentPostId);
			}

		});
	},

		'click .delete': function(e){
			e.preventDefault();

			if (confirm("Delete this post?")){
				var currentPostId = Session.get('currentPostId');
				Ingredients.remove(currentPostId);
				Meteor.Router.to('postsList');
			}
		}
});