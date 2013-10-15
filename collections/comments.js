Comments = new Meteor.Collection('comments');

Meteor.methods({
	comment: function(commentAttributes){
		var user = Meteor.user();
		var ingredient = Ingredients.findOne(commentAttributes.ingredientId);

		//ensure user is logged in
		if (!user)
			throw new Meteor.Error(401, "You need to login to make comments");

		if(commentAttributes.body.length < 2)
			throw new Meteor.Error(422, "Please write some content");

		if(!commentAttributes.ingredientId)
			throw new Meteor.Error(422, "You must comment on an ingredient");

		comment = _.extend(_.pick(commentAttributes,'ingredientId', 'body'),{
			userId: user._id,
			author: user.emails[0].address.split('@')[0],
			submitted: new Date().getTime()
		});

		// update comment count
		Ingredients.update(comment.ingredientId, {$inc: {commentsCount: 1}});

		// create the comment save the id
		comment._id = Comments.insert(comment);
		
		console.log('comment created!');
		console.log(comment);

		return comment._id;
	}
})