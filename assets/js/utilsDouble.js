/**
 * J'utilise le localStorage pour stocker les valeurs simples
 * qui ne sont pas de haute sécurité
 */
// const INPUTRANGE = document.querySelector("#inputRange");
const valueBritnessLeft = document.querySelector(".bLeft");
const valueBritnessRight = document.querySelector(".bRight");
const valueContrastLeft = document.querySelector(".cLeft");
const valueContrastRight = document.querySelector(".cRight");
const valueInvertLeft = document.querySelector(".iLeft");
const valueInvertRight = document.querySelector(".iRight");
const displayRight = document.querySelector("#reglageDroite");
const displayLeft = document.querySelector("#reglageGauche");

function init() {
	localStorage.setItem("init", "1");
	localStorage.setItem("display-leftSide", "none");
	localStorage.setItem("display-rightSide", "none");
	localStorage.setItem("type-leftSide", "lastImage");
	localStorage.setItem("type-rightSide", "lastSubstractionImage");

	displayRight.style.opacity = "0";
	displayLeft.style.opacity = "0";
}
init();
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
	console.log(setItem());
	localStorage.setItem("default", "1");
	localStorage.setItem("brightness-leftSide", "1");
	localStorage.setItem("contrast-leftSide", "1");
	localStorage.setItem("invert-leftSide", "0");

	localStorage.setItem("brightness-rightSide", valueBritnessRight.value);
	localStorage.setItem("contrast-rightSide", valueContrastRight.value);
	localStorage.setItem("invert-rightSide", valueInvertRight.value);
	displayLeft.style.opacity = "0";

	reload();
});
document.querySelector("#defaultRight").addEventListener("click", function () {
	localStorage.setItem("defaultRight", "1");
	localStorage.setItem("brightness-rightSide", "1");
	localStorage.setItem("contrast-rightSide", "1");
	localStorage.setItem("invert-rightSide", "0");
	displayRight.style.opacity = "0";

	reload();
});

document.querySelector("#invertDefault").addEventListener("click", function () {
	localStorage.setItem("invertDefault", "1");
	localStorage.setItem("brightness-leftSide", "1");
	localStorage.setItem("contrast-leftSide", "1");
	localStorage.setItem("invert-leftSide", "1");
	displayLeft.style.opacity = "0";

	reload();
});
document
	.querySelector("#invertDefaultRight")
	.addEventListener("click", function () {
		localStorage.setItem("invertDefaultRight", "1");
		localStorage.setItem("brightness-rightSide", "1");
		localStorage.setItem("contrast-rightSide", "1");
		localStorage.setItem("invert-rightSide", "1");
		displayRight.style.opacity = "0";
		location.reload();
	});

document.querySelector("#user").addEventListener("click", function () {
	localStorage.setItem("user", "1");
	localStorage.setItem("brightness-leftSide", valueBritnessLeft.value);
	localStorage.setItem("contrast-leftSide", valueContrastLeft.value);
	localStorage.setItem("invert-leftSide", valueInvertLeft.value);
	displayLeft.style.opacity = "1";

	reload();
});
document.querySelector("#userRight").addEventListener("click", function () {
	localStorage.setItem("userRight", "1");
	localStorage.setItem("brightness-rightSide", valueBritnessRight.value);
	localStorage.setItem("contrast-rightSide", valueContrastRight.value);
	localStorage.setItem("invert-rightSide", valueInvertRight.value);
	displayRight.style.opacity = "1";
	reload();
});
