// JavaScript Document
$(document).ready(function(){

	// Init ScrollMagic
	var controller = new ScrollMagic.Controller();

	// build a scene
	var ourScene = new ScrollMagic.Scene({
		triggerElement: '#project01'
	})
	.setClassToggle('#project01', 'fade-in') // add class to project01
	 // this requires a plugin
	.addTo(controller);

});

TweenMax.from("#logo", 1, {y:20,delay:2,opacity:0});
