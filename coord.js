var requestURL1 = "pointCoord_overlay.json";
var request1 = new XMLHttpRequest();
request1.open("GET", requestURL1);
request1.responseType = "json";
request1.send();

request1.onload = function () {
	let mark = request1.response;
	console.log(mark.obj.id);
	let X = mark.obj.positionX;
	let Y = mark.obj.positionY;

	let marke = document.createElement("img");
	marke.src = "marker.jpg";
	marke.id = "marker";
	marke.style.display = "none";
	document.body.appendChild(marke);
	document
		.getElementById("checkbox_coord")
		.addEventListener("change", (e) => {
			this.checkboxValue = e.target.checked ? "on" : "off";
			console.log(checkboxValue);
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
