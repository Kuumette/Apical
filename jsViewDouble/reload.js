let rURL = "https://kuumette.github.io/Api/configReload.json";
let r = new XMLHttpRequest();
r.open("GET", rURL);
r.responseType = "json";
r.send();

r.onload = function () {
	let reload = r.response;
	// fonction auto refresh
	const refresh = reload.reload.timer;
	function reloadPageGauche() {
		let refreshEnabled = document.getElementById("checkbox_gauche");

		if (refreshEnabled.checked) {
			$("#partieGauche").fadeOut("slow", function () {
				$(this).load("./Apical/viewDouble.html", function () {
					$(this).fadeIn("slow");
				});
			});
			//window.location.reload(1);
		}
	}
	setInterval(reloadPageGauche, refresh);

	function reloadPageDroite() {
		let refreshEnabled = document.getElementById("checkbox_droite");

		if (refreshEnabled.checked) {
			$("#partieDroite").fadeOut("slow", function () {
				$(this).load("./Apical/viewDouble.html", function () {
					$(this).fadeIn("slow");
				});
			});
			//window.location.reload(1);
		}
	}
	setInterval(reloadPageDroite, refresh);
};
