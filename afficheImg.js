// fonction qui affiche l'image
function picture() {
	//Creation de l'élement img
	let img = document.createElement("img");
	// ajoute depuis mon config.js mon src de ma balise img
	img.src = mydata.image;
	// ajoute depuis mon config.js mon alt de ma balise img
	img.alt = mydata.desc;
	// ajoute un id a ma balise img
	img.id = "img";
	// ajoute a mon body la balise img
	document.body.appendChild(img);
}
picture();
