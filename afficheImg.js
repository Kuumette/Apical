var requestURL = "image.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function () {
	var image = request.response;
	//Creation de l'élement img
	let img = document.createElement("img");
	// ajoute depuis mon config.js mon src de ma balise img
	img.src = image.img;
	// ajoute depuis mon config.js mon alt de ma balise img
	img.alt = image.desc;
	// ajoute un id a ma balise img
	img.id = "img";
	// ajoute a mon body la balise img
	document.body.appendChild(img);

	let date = document.createElement("p");
	let heure = document.createElement("p");
	let name = document.createElement("p");
	// recup les element de type texte dans mon config.js
	date.textContent = image.date;
	heure.textContent = image.heure;
	name.textContent = "Apicam";
	// ajoute un id a ma balise p
	date.id = "date";
	heure.id = "heure";
	name.id = "name";
	// ajoute a mon body les element p
	document.body.appendChild(date);
	document.body.appendChild(heure);
	document.body.appendChild(name);
};
