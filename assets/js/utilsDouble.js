/**
 * J'utilise le localStorage pour stocker les valeurs simples
 * qui ne sont pas de haute sécurité
 */
// const INPUTRANGE = document.querySelector("#inputRange");
// const valueBritnessLeft = document.querySelector(".bLeft");
// const valueBritnessRight = document.querySelector(".rangeBrightness");
// const valueContrastLeft = document.querySelector(".rangeContrast");
// const valueContrastRight = document.querySelector(".rangeContrast");
// const valueInvertLeft = document.querySelector(".rangeInvert");
// const valueInvertRight = document.querySelector(".rangeInvert");
const content = document.querySelector(".left");
console.log(content);

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
	//localStorage.setItem("display-main", "none");
	localStorage.setItem("type-leftSide", "lastImage");
	localStorage.setItem("type-rightSide", "lastSubstractionImage");
	//localStorage.setItem("type-main", "lastImage");
	// localStorage.setItem("invert-main", "0");
}

/** Permet d'avoir le localStorage plus rapidement */
function getItem(item) {
	return localStorage.getItem(item);
}

function setItem(item, value) {
	return localStorage.setItem(item, value);
}

/** Permet de rajouter un filter à l'image */
function addFilter(img, brightness, contrast, invert) {
	img.style.filter = `brightness(${brightness}) contrast(${contrast}) invert(${invert})`;
}

document.querySelector("#default").addEventListener("click", function () {
	localStorage.setItem("default", "0");

	localStorage.setItem("brightness-leftSide", "1");
	localStorage.setItem("contrast-leftSide", "1");
	localStorage.setItem("invert-leftSide", "0");

	reload();
});
document.querySelector("#defaultRight").addEventListener("click", function () {
	localStorage.setItem("defaultRight", "1");
	localStorage.setItem("brightness-rightSide", "1");
	localStorage.setItem("contrast-rightSide", "1");
	localStorage.setItem("invert-rightSide", "0");

	reload();
});

document.querySelector("#invertDefault").addEventListener("click", function () {
	//localStorage.clear();
	/** Init contrast et brightness ainsi que l'overlay */

	localStorage.setItem("invertDefault", "1");
	localStorage.setItem("brightness-leftSide", "1");
	localStorage.setItem("contrast-leftSide", "1");
	localStorage.setItem("invert-leftSide", "1");

	reload();
});
document
	.querySelector("#invertDefaultRight")
	.addEventListener("click", function () {
		//localStorage.clear();
		/** Init contrast et brightness ainsi que l'overlay */

		localStorage.setItem("invertDefaultRight", "1");
		localStorage.setItem("brightness-rightSide", "1");
		localStorage.setItem("contrast-rightSide", "1");
		localStorage.setItem("invert-rightSide", "1");

		reload();
	});

document.querySelector("#user").addEventListener("click", function () {
	//localStorage.clear();
	/** Init contrast et brightness ainsi que l'overlay */

	localStorage.setItem("custome", "1");
	localStorage.setItem("brightness-main", valueBritnessLeft.value);
	localStorage.setItem("contrast-main", valueContrastMain.value);
	localStorage.setItem("invert-main", valueInvertMain.value);

	reload();
});
document.querySelector("#userRight").addEventListener("click", function () {
	//localStorage.clear();
	/** Init contrast et brightness ainsi que l'overlay */

	localStorage.setItem("custome", "1");
	localStorage.setItem("brightness-main", valueBritnessLeft.value);
	localStorage.setItem("contrast-main", valueContrastMain.value);
	localStorage.setItem("invert-main", valueInvertMain.value);

	reload();
});
