var reqURL = "./config/pointCoord_overlay.json";
var req = new XMLHttpRequest();
req.open("GET", reqURL);
req.responseType = "json";
req.send();

req.onload = function () {
	let overlay = req.response;
	let parent = document.querySelector("#content");
	document
		.getElementById("checkbox_coord")
		.addEventListener("change", (e) => {
			let UT1 = document.createElement("p");
			UT1.innerText = overlay.UT1.id;
			UT1.id = "overlayUT1";
			UT1.style.display = "none";
			parent.appendChild(UT1);
			checkboxValue = e.target.checked ? "on" : "off";

			if (checkboxValue == "off") {
				with (document.getElementById("overlayUT1")) {
					style.display = "none";
				}
			} else if (checkboxValue == "on") {
				with (document.getElementById("overlayUT1")) {
					let UT1X = overlay.UT1.positionX;
					let UT1Y = overlay.UT1.positionY;
					style.marginTop = UT1Y;
					style.marginLeft = UT1X;
					style.display = "block";
					style.zIndex = "2";
					style.position = "absolute";
				}
			}
		});
	document
		.getElementById("checkbox_coord")
		.addEventListener("change", (e) => {
			let UT2 = document.createElement("p");
			UT2.innerText = overlay.UT2.id;
			UT2.id = "overlayUT2";

			UT2.style.display = "none";
			parent.appendChild(UT2);
			checkboxValue = e.target.checked ? "on" : "off";

			if (checkboxValue == "off") {
				with (document.getElementById("overlayUT2")) {
					style.display = "none";
				}
			} else if (checkboxValue == "on") {
				with (document.getElementById("overlayUT2")) {
					let UT2X = overlay.UT2.positionX;
					let UT2Y = overlay.UT2.positionY;
					style.marginTop = UT2Y;
					style.marginLeft = UT2X;
					style.display = "block";
					style.zIndex = "2";
					style.position = "absolute";
				}
			}
		});
	document
		.getElementById("checkbox_coord")
		.addEventListener("change", (e) => {
			let UT3 = document.createElement("p");
			UT3.innerText = overlay.UT3.id;
			UT3.id = "overlayUT3";

			UT3.style.display = "none";
			parent.appendChild(UT3);
			checkboxValue = e.target.checked ? "on" : "off";

			if (checkboxValue == "off") {
				with (document.getElementById("overlayUT3")) {
					style.display = "none";
				}
			} else if (checkboxValue == "on") {
				with (document.getElementById("overlayUT3")) {
					let UT3X = overlay.UT3.positionX;
					let UT3Y = overlay.UT3.positionY;
					style.marginTop = UT3Y;
					style.marginLeft = UT3X;
					style.display = "block";
					style.zIndex = "2";
					style.position = "absolute";
				}
			}
		});
	document
		.getElementById("checkbox_coord")
		.addEventListener("change", (e) => {
			let UT4 = document.createElement("p");
			UT4.innerText = overlay.UT4.id;
			UT4.id = "overlayUT4";

			UT4.style.display = "none";
			parent.appendChild(UT4);
			checkboxValue = e.target.checked ? "on" : "off";

			if (checkboxValue == "off") {
				with (document.getElementById("overlayUT4")) {
					style.display = "none";
				}
			} else if (checkboxValue == "on") {
				with (document.getElementById("overlayUT4")) {
					let UT4X = overlay.UT4.positionX;
					let UT4Y = overlay.UT4.positionY;
					style.marginTop = UT4Y;
					style.marginLeft = UT4X;
					style.display = "block";
					style.zIndex = "2";
					style.position = "absolute";
				}
			}
		});
};
