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
			let UT1 = document.createElement("img");
			UT1.src = overlay.lastImage.UT1.id;
			UT1.id = "overlayUT1";
			UT1.style.display = "none";
			parent.appendChild(UT1);
			console.log(overlay.lastImage.UT1);
			checkboxValue = e.target.checked ? "on" : "off";
			if (checkboxValue == "off") {
				with (document.getElementById("overlayUT1")) {
					style.display = "none";
				}
			} else if (checkboxValue == "on") {
				with (document.getElementById("overlayUT1")) {
					let UT1X = overlay.lastImage.UT1.positionX;
					let UT1Y = overlay.lastImage.UT1.positionY;
					style.left = UT1Y;
					style.top = UT1X;
					style.display = "block";
					style.zIndex = "2";
					style.position = "absolute";
				}
			}
		});
	document
		.getElementById("checkbox_coord")
		.addEventListener("change", (e) => {
			let UT2 = document.createElement("img");
			UT2.src = overlay.lastImage.UT2.id;
			UT2.id = "overlayUT2";
			UT2.style.display = "none";
			parent.appendChild(UT2);
			console.log(overlay.lastImage.UT2);
			checkboxValue = e.target.checked ? "on" : "off";
			if (checkboxValue == "off") {
				with (document.getElementById("overlayUT2")) {
					style.display = "none";
				}
			} else if (checkboxValue == "on") {
				with (document.getElementById("overlayUT2")) {
					let UT2X = overlay.lastImage.UT2.positionX;
					let UT2Y = overlay.lastImage.UT2.positionY;
					style.left = UT2Y;
					style.top = UT2X;
					style.display = "block";
					style.zIndex = "2";
					style.position = "absolute";
				}
			}
		});
	document
		.getElementById("checkbox_coord")
		.addEventListener("change", (e) => {
			let UT3 = document.createElement("img");
			UT3.src = overlay.lastImage.UT3.id;
			UT3.id = "overlayUT3";
			UT3.style.display = "none";
			parent.appendChild(UT3);
			console.log(overlay.lastImage.UT3);
			checkboxValue = e.target.checked ? "on" : "off";
			if (checkboxValue == "off") {
				with (document.getElementById("overlayUT3")) {
					style.display = "none";
				}
			} else if (checkboxValue == "on") {
				with (document.getElementById("overlayUT3")) {
					let UT3X = overlay.lastImage.UT3.positionX;
					let UT3Y = overlay.lastImage.UT3.positionY;
					style.left = UT3Y;
					style.top = UT3X;
					style.display = "block";
					style.zIndex = "2";
					style.position = "absolute";
				}
			}
		});
	document
		.getElementById("checkbox_coord")
		.addEventListener("change", (e) => {
			let UT4 = document.createElement("img");
			UT4.src = overlay.lastImage.UT4.id;
			UT4.id = "overlayUT4";
			UT4.style.display = "none";
			parent.appendChild(UT4);
			console.log(overlay.lastImage.UT4);
			checkboxValue = e.target.checked ? "on" : "off";
			if (checkboxValue == "off") {
				with (document.getElementById("overlayUT4")) {
					style.display = "none";
				}
			} else if (checkboxValue == "on") {
				with (document.getElementById("overlayUT4")) {
					let UT4X = overlay.lastImage.UT4.positionX;
					let UT4Y = overlay.lastImage.UT4.positionY;
					style.left = UT4Y;
					style.top = UT4X;
					style.display = "block";
					style.zIndex = "2";
					style.position = "absolute";
				}
			}
		});
};
