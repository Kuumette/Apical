function lastModified(file) {
	let xmlObj = !window.XMLHttpRequest
		? new ActiveXObject("Microsoft.XMLHTTP")
		: new XMLHttpRequest();
	xmlObj.open("GET", file, false);
	try {
		xmlObj.send();
	} catch (y) {}
	let dt = xmlObj.getResponseHeader("Last-Modified");
	let e = new Date(dt);

	return e;
}
function dateDiff(date1, date2) {
	var diff = {}; // Initialisation du retour
	var tmp = date2 - date1;
	tmp = Math.floor(tmp / 1000); // Nombre de secondes entre les 2 dates
	diff.sec = tmp % 60; // Extraction du nombre de secondes
	tmp = Math.floor((tmp - diff.sec) / 60); // Nombre de minutes (partie entière)
	diff.min = tmp % 60; // Extraction du nombre de minutes
	tmp = Math.floor((tmp - diff.min) / 60); // Nombre d'heures (entières)
	diff.hour = tmp % 24; // Extraction du nombre d'heures
	tmp = Math.floor((tmp - diff.hour) / 24); // Nombre de jours restants
	diff.day = tmp;

	return diff;
}
const miseAJour = document.querySelector("#warning");
let dte = lastModified("ressources/lastImage.jpg");
let h = new Date();
date1 = new Date(dte);
date2 = new Date();
diff = dateDiff(date1, date2);
mj = `
	<p id="mj">derniere mise à jour depuis : ${diff.day}d ${diff.hour}h ${diff.min}m ${diff.sec}s</p>
	`;
miseAJour.innerHTML = mj;
function myTimer() {
	date1 = new Date(dte);
	date2 = new Date();
	diff = dateDiff(date1, date2);

	mj = `
	<p id="mj">derniere mise à jour depuis : ${diff.day}d ${diff.hour}h ${diff.min}m ${diff.sec}s</p>
	`;
	miseAJour.innerHTML = mj;
}

setInterval(myTimer, 20000);
