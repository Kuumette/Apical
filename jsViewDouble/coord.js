var reqURL = "../config/pointCoord_overlay.json";
var req = new XMLHttpRequest();
req.open("GET", reqURL);
req.responseType = "json";
req.send();

req.onload = function () {
	let overlay = req.response;
	let parent = document.querySelector("#gauche");
	let gauche = document.createElement("img");
	gauche.src = overlay.img;
	gauche.id = "overlay";
	parent.appendChild(gauche);
	gauche.style.display = "none";
	document
		.getElementById("checkbox_coord")
		.addEventListener("change", (e) => {
			checkboxValue = e.target.checked ? "on" : "off";

			if (checkboxValue == "off") {
				console.log(checkboxValue);

				gauche.style.display = "none";
			} else if (checkboxValue == "on") {
				console.log(checkboxValue);
				gauche.style.display = "block";
			}
		});

	let parentDroite = document.querySelector("#droite");
	let droite = document.createElement("img");
	droite.src = overlay.img;
	droite.id = "overlay";
	parentDroite.appendChild(droite);
	droite.style.display = "none";
	document
		.getElementById("checkbox_coord_droite")
		.addEventListener("change", (e) => {
			checkboxValue = e.target.checked ? "on" : "off";

			if (checkboxValue == "off") {
				console.log(checkboxValue);

				droite.style.display = "none";
			} else if (checkboxValue == "on") {
				console.log(checkboxValue);
				droite.style.display = "block";
			}
		});
};
