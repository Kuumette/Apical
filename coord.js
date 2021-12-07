var reqURL = "./config/pointCoord_overlay.json";
var req = new XMLHttpRequest();
req.open("GET", reqURL);
req.responseType = "json";
req.send();

req.onload = function () {
	let marke = req.response;
	let X = marke.UT1.positionX;
	let Y = marke.UT1.positionY;

	let mark = document.createElement("img");
	mark.src = "marker.jpg";
	mark.id = "marker";
	mark.style.display = "none";
	document.body.appendChild(mark);
	console.log(mark);
	document
		.getElementById("checkbox_coord")
		.addEventListener("change", (e) => {
			checkboxValue = e.target.checked ? "on" : "off";
			if (checkboxValue == "off") {
				with (document.getElementById("marker")) {
					style.display = "none";
				}
			} else if (checkboxValue == "on") {
				with (document.getElementById("marker")) {
					style.left = Y;
					style.top = X;
					style.display = "block";
					style.zIndex = "1";
					style.position = "absolute";
				}
			}
		});
};
