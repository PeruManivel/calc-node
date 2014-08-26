 $().ready(function(){
				$(this).calculator();
 });
   (function ($) {
	  var _globalSettings = new Array();
	  var numObj = {curValue:''}
      var calculator_methods = {
        _init: function (option) {
          option = jQuery.extend({
            
			calc_keys_style: '.keys span',
			calc_key_clear_style: '.top .clear',
			calc_eval_style: 'eval',
			calc_output_style:'.screen'
           
          }, option);
          _globalSettings[jQuery(this).attr('id')] = option;
		  //show the calculator  by default
          $(this).calculator('showCalc');
         
        },/*END: _init function*/
        showCalc: function (){
			var elem = $(this);

			//register even handlers - on click of buttons
			$(_globalSettings[elem.attr('id')].calc_keys_style).on('click',function(e){
				if($(this).hasClass(_globalSettings[elem.attr('id')].calc_eval_style)){
					 $(_globalSettings[elem.attr('id')].calc_output_style).html(eval(numObj.curValue));
					 numObj.curValue = eval(numObj.curValue);

				}else{ 
					   numObj.curValue  += $(this).html();
					   $(_globalSettings[elem.attr('id')].calc_output_style).html(numObj.curValue);				
				}
			});
			//on click of C - clear contents
			$(_globalSettings[elem.attr('id')].calc_key_clear_style).on('click',function(e){		
				    $(_globalSettings[elem.attr('id')].calc_output_style).html('');
					numObj.curValue = '';
			})
        }
		//create all other functions related to calculators
	  };
      $.fn.calculator = function (method) {
        if (calculator_methods[method]) {
          return calculator_methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
          var e = this;
          var e_arguments = arguments[0];
          return calculator_methods._init.apply(e, [
            e_arguments
          ]);
        } else {
          $.error('Method ' + method + ' does not exist on calculator');
        }
      }

    })(jQuery);