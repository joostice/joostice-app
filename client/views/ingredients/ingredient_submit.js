Template.ingredientSubmit.rendered = function(){

    $(function() {
    	//create colorpicker
                var _createColorpickers = function() {
                    $('#cp1').colorpicker({
                        format: 'hex'
                    });
                }

                _createColorpickers();

                $('.bscp-destroy').click(function(e) {
                    e.preventDefault();
                    $('.bscp').colorpicker('destroy');
                });

                $('.bscp-create').click(function(e) {
                    e.preventDefault();
                    _createColorpickers();
                });
            });

  if (top.location != location) {
    top.location.href = document.location.href ;
  }
		$(function(){
			window.prettyPrint && prettyPrint();

		//create sliders for each attribute
        $('.flavorIntensity').slider({
          formater: function(value) {
            return 'Current value: '+value;
          },
          tooltip: 'hide',
          min: 0,
          max: 100,

        });

     $('.flavorIntensity').on('slide', function(ev){
     $('[name=flavorIntensity]').val(ev.value);
  });

 $('.sweetness').slider({
          formater: function(value) {
            return 'Current value: '+value;
          },
          tooltip: 'hide',
          min: 0,
          max: 100,

        });

     $('.sweetness').on('slide', function(ev){
     $('[name=sweetness]').val(ev.value);
  });

  $('.saltiness').slider({
          formater: function(value) {
            return 'Current value: '+value;
          },
          tooltip: 'hide',
          min: 0,
          max: 100,

        });

     $('.saltiness').on('slide', function(ev){
     $('[name=saltiness]').val(ev.value);
  });


  $('.bitterness').slider({
          formater: function(value) {
            return 'Current value: '+value;
          },
          tooltip: 'hide',
          min: 0,
          max: 100,

        });

     $('.bitterness').on('slide', function(ev){
     $('[name=bitterness]').val(ev.value);
  });

   $('.sourness').slider({
          formater: function(value) {
            return 'Current value: '+value;
          },
          tooltip: 'hide',
          min: 0,
          max: 100,

        });

     $('.sourness').on('slide', function(ev){
     $('[name=sourness]').val(ev.value);
  });


  $('.spiciness').slider({
          formater: function(value) {
            return 'Current value: '+value;
          },
          tooltip: 'hide',
          min: 0,
          max: 100,

        });

     $('.spiciness').on('slide', function(ev){
     $('[name=spiciness]').val(ev.value);
  });

  

    });
};


Template.ingredientSubmit.events({
	'submit form': function(e){
		e.preventDefault();
	
		var ingredient = {
			title: $(e.target).find("[name=title]").val(),
			aka: $(e.target).find("[name=aka]").val(),
			flavorIntensity: $(e.target).find("[name=flavorIntensity]").val(),
			color: $(e.target).find("[name=color]").val(),
			sweetness: $(e.target).find("[name=sweetness]").val(),
			saltiness: $(e.target).find("[name=saltiness]").val(),
			bitterness: $(e.target).find("[name=bitterness]").val(),
			sourness: $(e.target).find("[name=sourness]").val(),
			spiciness: $(e.target).find("[name=spiciness]").val(),
			url: $(e.target).find("[name=url]").val(),
			benefits: $(e.target).find("[name=benefits]").val(),
			awesomeness: $(e.target).find("[name=awesomeness]").val(),
		}

	Meteor.call('ingredientInsert', ingredient, function(error, id) {
      if (error){
        //display error to user
        throwError(error.reason);
      if(error.error === 302) {
        Meteor.Router.to('ingredientsAll', error.details)}
      }
      else {
        Meteor.Router.to('ingredientsAll', id);
      }

	});

  }
});
