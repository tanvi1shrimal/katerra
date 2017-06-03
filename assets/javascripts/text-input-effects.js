// Hello.
//
// This is The Scripts used for ___________ Theme
//
//

function main() {( function() {
			'use strict';

			/** text-input effects javascript **/
			(function() {
				// trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
				if (!String.prototype.trim) {
					(function() {
						// Make sure we trim BOM and NBSP
						var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
						String.prototype.trim = function() {
							return this.replace(rtrim, '');
						};
					})();
				}

				[].slice.call(document.querySelectorAll('input.input__field')).forEach(function(inputEl) {
					// in case the input is already filled..
					if (inputEl.value.trim() !== '') {
						classie.add(inputEl.parentNode, 'input--filled');
					}

					// events:
					inputEl.addEventListener('focus', onInputFocus);
					inputEl.addEventListener('blur', onInputBlur);
				});

				function onInputFocus(ev) {
					classie.add(ev.target.parentNode, 'input--filled');
				}

				function onInputBlur(ev) {
					if (ev.target.value.trim() === '') {
						classie.remove(ev.target.parentNode, 'input--filled');
					}
				}

			})();

		}());
	$(function() {

		$("input,textarea").jqBootstrapValidation({
			preventSubmit : true,
			submitError : function($form, event, errors) {
				// something to have when submit produces an error ?
				// Not decided if I need it yet
			},
			submitSuccess : function($form, event) {	
				event.preventDefault();
				// prevent default submit behaviour
				// get values from FORM

				var email = $("input#email").val();
				var password = $("input#password").val();

			},
			filter : function() {
				return $(this).is(":visible");
			},
		});

		// $("a[data-toggle=\"tab\"]").click(function(e) {
			// e.preventDefault();
			// $(this).tab("show");
		// });
	});

	/*When clicking on Full hide fail/success boxes */

	$('#submit').focus(function() {
		$('#success').html('');
	});

}

main();

