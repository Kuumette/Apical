// fonction image info
function infoImg() {
	//Creation de l'élement p
	let date = document.createElement("p");
	let heure = document.createElement("p");
	let name = document.createElement("p");
	// recup les element de type texte dans mon config.js
	date.textContent = mydata.date;
	heure.textContent = mydata.heure;
	name.textContent = "Apicam";
	// ajoute un id a ma balise p
	date.id = "date";
	heure.id = "heure";
	name.id = "name";
	// ajoute a mon body les element p
	document.body.appendChild(date);
	document.body.appendChild(heure);
	document.body.appendChild(name);
}
infoImg();
