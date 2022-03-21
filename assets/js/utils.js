/**
 * J'utilise le localStorage pour stocker les valeurs simples
 * qui ne sont pas de haute sécurité
 */
const INPUTRANGE = document.querySelector("#inputRange");
const INPUTRANGECOLOR = document.querySelector(".reglage");

const valueBritnessMain = document.querySelector(".rangeBrightness");
const valueContrastMain = document.querySelector(".rangeContrast");
const valueInvertMain = document.querySelector(".rangeInvert");

function init() {
	localStorage.setItem("init", "1");
	localStorage.setItem("display-main", "block");
	localStorage.setItem("type-main", "lastImage");

	INPUTRANGE.style.opacity = "0";
	INPUTRANGECOLOR.style.backgroundColor = "rgba(0, 0, 0, 0)";
	INPUTRANGECOLOR.style.border = "0px solid white";
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
function addCoord() {
	img.style.display = "block";
}

document.querySelector("#default").addEventListener("click", function () {
	localStorage.setItem("default", "1");

	localStorage.setItem("brightness-main", "1");
	localStorage.setItem("contrast-main", "1");
	localStorage.setItem("invert-main", "0");
	localStorage.setItem("display-main", "block");
	INPUTRANGE.style.opacity = "0";
	INPUTRANGECOLOR.style.backgroundColor = "rgba(0, 0, 0, 0)";
	INPUTRANGECOLOR.style.border = "0px solid white";
	reload();
});

document.querySelector("#invertDefault").addEventListener("click", function () {
	localStorage.setItem("invertDefault", "1");
	localStorage.setItem("brightness-main", "1");
	localStorage.setItem("contrast-main", "1");
	localStorage.setItem("invert-main", "1");
	localStorage.setItem("display-main", "block");
	INPUTRANGE.style.opacity = "0";
	INPUTRANGECOLOR.style.backgroundColor = "rgba(0, 0, 0, 0)";
	INPUTRANGECOLOR.style.border = "0px solid white";
	reload();
});

document.querySelector("#user").addEventListener("click", function () {
	localStorage.setItem("custome", "1");
	localStorage.setItem("brightness-main", valueBritnessMain.value);
	localStorage.setItem("contrast-main", valueContrastMain.value);
	localStorage.setItem("invert-main", valueInvertMain.value);
	localStorage.setItem("display-main", "");
	INPUTRANGE.style.opacity = "1";
	INPUTRANGECOLOR.style.backgroundColor = "rgba(0, 0, 0, 0.712)";
	INPUTRANGECOLOR.style.border = "2px solid white";
	reload();
});
