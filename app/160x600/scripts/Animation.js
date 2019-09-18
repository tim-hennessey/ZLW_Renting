var app = app || {};


app.Animation = (function () {

	
	var t = TweenMax;
	var tl1 = new TimelineMax();
	var tl2 = new TimelineMax({paused:true});
	// var tl2 = new TimelineMax();
	var banner = document.getElementById('banner');
	var txt1a = document.getElementById('txt1a');
	var txt1b = document.getElementById('txt1b');
	var txt1c = document.getElementById('txt1c');
	var txt1d = document.getElementById('txt1d');

	var txt2a = document.getElementById('txt2a');
	var txt2b = document.getElementById('txt2b');
	var txt2c = document.getElementById('txt2c');
	
	var tagline = document.getElementById('tagline');
	
	var cta = document.getElementById('cta');
	var curtain = document.getElementById('curtain');
	var container = document.getElementsByClassName("container");
	var resolve = document.getElementsByClassName("resolve");
	

	// --------------------------------------------------------------------------------------
	// set default properties
	function initialize() {
		// DO NOT EDIT: reveals banner once loaded
		t.set(banner, {opacity:1});

		t.set(cta, {transformOrigin: "50% 65%"});
		t.set(container, {scale:.5});
	}

	// --------------------------------------------------------------------------------------
	// Starts the animation
	function start() {

		tl1.to(txt1a, .5, {y:"+=10", opacity: 1, ease: Sine.easeInOut})
		.to(txt1b, .5, {y:"+=10", opacity: 1, ease: Sine.easeInOut})
		.to(txt1c, .5, {y:"+=10", opacity: 1, ease: Sine.easeInOut})
		.to(txt1d, .5, {y:"+=10", opacity: 1, ease: Sine.easeInOut})

		.to(txt1a, .5, {opacity: 0}, "+=1.5")
		.to(txt1b, .5, {opacity: 0}, "-=.5")
		.to(txt1c, .5, {opacity: 0}, "-=.5")
		.to(txt1d, .5, {opacity: 0}, "-=.5")

		.to(txt2a, .5, {y:"+=10", opacity: 1, ease: Sine.easeInOut})
		.to(txt2b, .5, {y:"+=10", opacity: 1, ease: Sine.easeInOut})
		.to(txt2c, .5, {y:"+=10", opacity: 1, ease: Sine.easeInOut})

		

		.to(curtain, .75, {opacity: 1, onComplete: function () {tl2.play();}}, "+=1.5")

		.set(resolve, {display: "block"})

		.from(container, .5, {scale:0, opacity: 0, ease: Sine.easeInOut})

		.from(z, .5, {x: "-=10", opacity: 0, ease: Sine.easeInOut}, "-=.3")
		.from(i, .5, {x: "-=10", opacity: 0, ease: Sine.easeInOut}, "-=.3")
		.from(l1, .5, {x: "-=10", opacity: 0, ease: Sine.easeInOut}, "-=.3")
		.from(l2, .5, {x: "-=10", opacity: 0, ease: Sine.easeInOut}, "-=.3")
		.from(o, .5, {x: "-=10", opacity: 0, ease: Sine.easeInOut}, "-=.3")
		.from(w, .5, {x: "-=10", opacity: 0, ease: Sine.easeInOut}, "-=.3")

		.from(tagline, 1, {y: "-=10", ease: Sine.easeInOut}, "-=1")
		.from(tagline, .8, {opacity: 0}, "-=.8")

		.from(cta, .5, {scale: 0, opacity: 0, ease: Sine.easeInOut}, "-=.25");

		tl2.to(flag, 0.1, {display: "block"})
		.to(sprite, 1, {x: -846, ease: SteppedEase.config(18)}, "+=.25");
		
	}

	// --------------------------------------------------------------------------------------
	// Stops the animation
	function stop() {
		console.log("stopping animation");
	}

	// --------------------------------------------------------------------------------------
	// Publicly accessible methods and properties
	return {
		initialize:initialize,
		start:start,
		stop:stop
	}

})();
