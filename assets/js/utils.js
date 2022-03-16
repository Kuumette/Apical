/**
 * J'utilise le localStorage pour stocker les valeurs simples
 * qui ne sont pas de haute sécurité
 */

function init() {
	// localStorage.clear();
	/** Init contrast et brightness ainsi que l'overlay */
	localStorage.setItem("init", "1");
	// localStorage.setItem("brightness-leftSide", "1");
	// localStorage.setItem("contrast-leftSide", "1");
	localStorage.setItem("display-leftSide", "none");
	// localStorage.setItem("brightness-rightSide", "1");
	// localStorage.setItem("contrast-rightSide", "1");
	localStorage.setItem("display-rightSide", "none");
	// localStorage.setItem("brightness-main", "1");
	// localStorage.setItem("contrast-main", "1");
	localStorage.setItem("display-main", "none");
	localStorage.setItem("type-leftSide", "lastImage");
	localStorage.setItem("type-rightSide", "lastSubstractionImage");
	localStorage.setItem("type-main", "lastImage");
}

/** Permet d'avoir le localStorage plus rapidement */
function getItem(item) {
	return localStorage.getItem(item);
}

function setItem(item, value) {
	return localStorage.setItem(item, value);
}

/** Permet de rajouter un filter à l'image */
function addFilter(img, brightness, contrast) {
	img.style.filter = `brightness(${brightness}) contrast(${contrast})`;
}

document.querySelector("#default").addEventListener("click", function () {
	//localStorage.clear();
	/** Init contrast et brightness ainsi que l'overlay */
	console.log("coucou");
	localStorage.setItem("d", "1");
	localStorage.setItem("brightness-leftSide", "1");
	localStorage.setItem("contrast-leftSide", "1");
	localStorage.setItem("display-leftSide", "none");
	localStorage.setItem("brightness-rightSide", "1");
	localStorage.setItem("contrast-rightSide", "1");
	localStorage.setItem("display-rightSide", "none");
	localStorage.setItem("brightness-main", "1");
	localStorage.setItem("contrast-main", "1");
	localStorage.setItem("display-main", "none");
	localStorage.setItem("type-leftSide", "lastImage");
	localStorage.setItem("type-rightSide", "lastSubstractionImage");
	localStorage.setItem("type-main", "lastImage");

	reload();
});

document.querySelector("#reglage1").addEventListener("click", function () {
	//localStorage.clear();
	/** Init contrast et brightness ainsi que l'overlay */

	localStorage.setItem("r1", "1");
	localStorage.setItem("brightness-leftSide", "1.5");
	localStorage.setItem("contrast-leftSide", "1");
	localStorage.setItem("display-leftSide", "none");
	localStorage.setItem("brightness-rightSide", "1.5");
	localStorage.setItem("contrast-rightSide", "1");
	localStorage.setItem("display-rightSide", "none");
	localStorage.setItem("brightness-main", "1.5");
	localStorage.setItem("contrast-main", "1");
	localStorage.setItem("display-main", "none");
	localStorage.setItem("type-leftSide", "lastImage");
	localStorage.setItem("type-rightSide", "lastSubstractionImage");
	localStorage.setItem("type-main", "lastImage");

	reload();
});
