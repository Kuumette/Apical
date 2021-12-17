let zoomer = (function () {
	document.querySelector("#content").addEventListener(
		"mousemove",

		function (e) {
			let original = document.querySelector("#img"),
				magnified = document.querySelector("#img-2"),
				style = magnified.style,
				x = e.pageX - this.offsetLeft,
				y = e.pageY - this.offsetTop,
				imgWidth = original.offsetWidth,
				imgHeight = original.offsetHeight,
				xperc = (x / imgWidth) * 100,
				yperc = (y / imgHeight) * 100;

			//lets user scroll past right edge of image
			if (x > 0.01 * imgWidth) {
				xperc += 0.15 * xperc;
			}

			//lets user scroll past bottom edge of image
			if (y >= 0.01 * imgHeight) {
				yperc += 0.15 * yperc;
			}

			style.backgroundPositionX = xperc - 82 + "%";
			style.backgroundPositionY = yperc - -10 + "%";

			style.left = x - 115 + "px";
			style.top = y - 115 + "px";
		},
		false
	);
})();
