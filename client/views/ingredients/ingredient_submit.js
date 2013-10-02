Template.ingredientSubmit.events({
	'submit form': function(e){
		e.preventDefault();
	
		var ingredient = {
			title: $(e.target).find("[name=title]").val(),
			aka: $(e.target).find("[name=aka]").val(),
			flavorIntesity: $(e.target).find("[name=flavorIntesity]").val(),
			color: $(e.target).find("[name=color]").val(),
			sweetness: $(e.target).find("[name=sweetness]").val(),
			saltiness: $(e.target).find("[name=saltiness]").val(),
			bitterness: $(e.target).find("[name=bitterness]").val(),
			sourness: $(e.target).find("[name=sourness]").val(),
			spiciness: $(e.target).find("[name=spiciness]").val(),
			url: $(e.target).find("[name=url]").val(),
			benefits: $(e.target).find("[name=benefits]").val(),
		}

	Meteor.call('ingredientInsert', ingredient, function(error, id) {
      if (error){
        //display error to user
        throwError(error.reason);
      if(error.error === 302) {
        Meteor.Router.to('ingredientList', error.details)}
      }
      else {
        Meteor.Router.to('ingredientList', id);
      }

	});

  }
});
