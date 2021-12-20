var reqURL = "../config/pointCoord_overlay.json";
var req = new XMLHttpRequest();
req.open("GET", reqURL);
req.responseType = "json";
req.send();

req.onload = function () {
	let overlay = req.response;
	let parent = document.querySelector("#center");
	let UT1 = document.createElement("img");
	UT1.src = overlay.img;
	UT1.id = "overlay";
	parent.appendChild(UT1);
	UT1.style.display = "none";
	document
		.getElementById("checkbox_coord")
		.addEventListener("change", (e) => {
			checkboxValue = e.target.checked ? "on" : "off";

			if (checkboxValue == "off") {
				console.log(checkboxValue);

				UT1.style.display = "none";
			} else if (checkboxValue == "on") {
				console.log(checkboxValue);
				UT1.style.display = "block";
			}
		});
};
