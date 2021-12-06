var requestURL1 = "pointCoord_overlay.json";
var request1 = new XMLHttpRequest();
request1.open("GET", requestURL1);
request1.responseType = "json";
request1.send();

request1.onload = function () {
	var marke = request1.response;
	console.log(marke.obj.id);
	let X = marke.obj.positionX;
	let Y = marke.obj.positionY;

	let mark = document.createElement("img");
	mark.src = "marker.jpg";
	mark.id = "marker";
	mark.style.display = "none";
	document.body.appendChild(mark);
	document
		.getElementById("checkbox_coord")
		.addEventListener("change", (e) => {
			this.checkboxValue = e.target.checked ? "on" : "off";
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
