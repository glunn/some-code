(function ($) {

  // init controller
	var controller = new ScrollMagic.Controller();

	$(function () { // wait for document ready
		// build scene
		var scene = new ScrollMagic.Scene({triggerElement: "#pin2"})
						.setPin("#pin2")
						.addIndicators({name: "2 (duration: 0)"}) // add indicators (requires plugin)
						.addTo(controller);
	});

}(jQuery));
