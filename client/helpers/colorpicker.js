$(function() {

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
      