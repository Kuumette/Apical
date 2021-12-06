let X = mydata.X;
let Y = mydata.Y;

function coordonnée() {
	let mark = document.createElement("img");
	mark.src = "marker.jpg";
	mark.id = "marker";
	mark.style.display = "none";
	document.body.appendChild(mark);
	let checkbox = document
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
}

coordonnée();
