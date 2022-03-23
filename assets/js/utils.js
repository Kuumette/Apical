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
	localStorage.setItem("display-main", "none");
	//localStorage.setItem("type-main", "lastImage");
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

document.querySelector("#default").addEventListener("click", function () {
	localStorage.setItem("init", "2");

	localStorage.setItem("brightness-main", "1");
	localStorage.setItem("contrast-main", "1");
	localStorage.setItem("invert-main", "0");

	INPUTRANGE.style.opacity = "0";
	INPUTRANGECOLOR.style.backgroundColor = "rgba(0, 0, 0, 0)";
	INPUTRANGECOLOR.style.border = "0px solid white";
	reload();
});

document.querySelector("#invertDefault").addEventListener("click", function () {
	localStorage.setItem("init", "3");
	localStorage.setItem("brightness-main", "1");
	localStorage.setItem("contrast-main", "1");
	localStorage.setItem("invert-main", "1");

	INPUTRANGE.style.opacity = "0";
	INPUTRANGECOLOR.style.backgroundColor = "rgba(0, 0, 0, 0)";
	INPUTRANGECOLOR.style.border = "0px solid white";
	reload();
});

document.querySelector("#user").addEventListener("click", function () {
	localStorage.setItem("init", "4");
	localStorage.setItem("brightness-main", valueBritnessMain.value);
	localStorage.setItem("brightnessUser-main", valueBritnessMain.value);

	localStorage.setItem("contrast-main", valueContrastMain.value);
	localStorage.setItem("contrastUser-main", valueContrastMain.value);

	localStorage.setItem("invert-main", valueInvertMain.value);
	localStorage.setItem("invertUser-main", valueInvertMain.value);

	INPUTRANGE.style.opacity = "1";
	INPUTRANGECOLOR.style.backgroundColor = "rgba(0, 0, 0, 0.712)";
	INPUTRANGECOLOR.style.border = "2px solid white";
	reload();
});

document
	.querySelector("#resetBrightness")
	.addEventListener("click", function () {
		//localStorage.clear();
		let btn1 = document.querySelector(".bNumber");
		let btn2 = document.querySelector(".bRange");
		btn1.value = 1;
		btn2.value = 1;

		localStorage.setItem("init", "5");

		localStorage.setItem("brightness-main", "1");
		localStorage.setItem("brightnessUser-main", "1");
		localStorage.setItem("contrast-main", valueContrastMain.value);
		localStorage.setItem("contrastUser-main", valueContrastMain.value);
		localStorage.setItem("invert-main", valueInvertMain.value);
		localStorage.setItem("invertUser-main", valueInvertMain.value);

		INPUTRANGE.style.opacity = "1";
		INPUTRANGECOLOR.style.backgroundColor = "rgba(0, 0, 0, 0.712)";
		INPUTRANGECOLOR.style.border = "2px solid white";
		reload();
	});

document.querySelector("#resetContrast").addEventListener("click", function () {
	//localStorage.clear();
	let btn3 = document.querySelector(".cNumber");
	let btn4 = document.querySelector(".cRange");
	btn3.value = 1;
	btn4.value = 1;

	localStorage.setItem("init", "6");

	localStorage.setItem("brightness-main", valueBritnessMain.value);
	localStorage.setItem("brightnessUser-main", valueBritnessMain.value);
	localStorage.setItem("contrast-main", "1");
	localStorage.setItem("contrastUser-main", "1");
	localStorage.setItem("invert-main", valueInvertMain.value);
	localStorage.setItem("invertUser-main", valueInvertMain.value);

	INPUTRANGE.style.opacity = "1";
	INPUTRANGECOLOR.style.backgroundColor = "rgba(0, 0, 0, 0.712)";
	INPUTRANGECOLOR.style.border = "2px solid white";
	reload();
});

document.querySelector("#resetInvert").addEventListener("click", function () {
	//localStorage.clear();
	let btn5 = document.querySelector(".iNumber");
	let btn6 = document.querySelector(".iRange");
	btn5.value = 0;
	btn6.value = 0;

	localStorage.setItem("init", "7");

	localStorage.setItem("brightness-main", valueBritnessMain.value);
	localStorage.setItem("brightnessUser-main", valueBritnessMain.value);
	localStorage.setItem("contrast-main", valueContrastMain.value);
	localStorage.setItem("contrastUser-main", valueContrastMain.value);
	localStorage.setItem("invert-main", "0");
	localStorage.setItem("invertUser-main", "0");

	INPUTRANGE.style.opacity = "1";
	INPUTRANGECOLOR.style.backgroundColor = "rgba(0, 0, 0, 0.712)";
	INPUTRANGECOLOR.style.border = "2px solid white";
	reload();
});
