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

			style.backgroundPositionX = xperc - 80 + "%";
			style.backgroundPositionY = yperc - -13 + "%";

			style.left = x - 150 + "px";
			style.top = y - 120 + "px";
		},
		false
	);
})();
