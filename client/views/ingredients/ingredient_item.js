Template.ingredientItem.helpers({
	//hide vote button if user has already voted
	upvotedClass: function() {
    var userId = Meteor.userId();
    if (userId && !_.include(this.upvoters, userId)) {
      return 'btn-primary upvotable';
    } else {
      return 'disabled';
    };
   }
});

Template.ingredientItem.events({
	'click .upvotable': function(e){
		e.preventDefault();
		Meteor.call('upvote', this._id);
		console.log('voted');
	}
});