const BRIGHTNESS = document.querySelectorAll(".rangeBrightness");
const CONTRASTS = document.querySelectorAll(".rangeContrast");
const INVERT = document.querySelectorAll(".rangeInvert");

/** La fonction init() provient de utils.js et permet d'initialiser le localStorage */
/* je ne ces pas ??? */
//init();

// Sur mon tableau de BRIGHTNESS, je parcours chaque élément
BRIGHTNESS.forEach((range) => {
	// J'attend que l'élément change
	range.addEventListener("change", () => {
		// Je récupère la valeur de l'élément
		setItem(`brightness-${range.id}`, range.value);
		//console.log(`brightness-${range.id}`, "1");
		// synchronisation des valeurs
		synchro(range);
		//console.log(range);
		// Je reload l'image
		reload(getItem(`type-${range.id}`), range.id);
		//console.log(getItem(`type-${range.id}`), range.id);
	});
	// J'initialise la valeur de l'élément
	range.setAttribute("value", getItem(`brightness-${range.id}`, range.value));
	//console.log(getItem(`brightness-${range.id}`, range.value));
});

/** La même chose qu'au dessus */
CONTRASTS.forEach((range) => {
	range.addEventListener("change", () => {
		setItem(`contrast-${range.id}`, range.value);
		synchro(range);
		reload(getItem(`type-${range.id}`), range.id);
	});
	range.setAttribute("value", getItem(`contrast-${range.id}`, range.value));
});
INVERT.forEach((range) => {
	range.addEventListener("change", () => {
		setItem(`invert-${range.id}`, range.value);
		synchro(range);
		reload(getItem(`type-${range.id}`), range.id);
	});
	range.setAttribute("value", getItem(`invert-${range.id}`, range.value));
});

/** Permet de synchroniser les valeurs entre le range et le numérique */
function synchro(range) {
	// synchronisation des valeurs
	if (range.name === "amountRange") {
		range.nextElementSibling.value = range.value;

		//console.log(range.value);
	} else {
		range.previousElementSibling.value = range.value;
		//console.log(range.value);
	}
}
