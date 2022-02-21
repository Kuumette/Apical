/**
 * Je créer une function qui m'affiche chaque x seconde mon dernier élément
 * setInterval de timer qui m'appel afficheImage.js
 * AfficheImage.js prend en paramètre le tableau de mes images avec comme clé
 * lastImage / lastSubstractionImage / lastAnimation / lastSubstractionAnimation
 * qui ont tous comme data 
 * - "img": "./ressources/lastImage.jpg",
	 -	"desc": "last picture",
	 -	"date": "2020-02-16",
	 -	"heure": "03:48 UT"
*/

/**
 *
 * @param {string} type
 * @param {string} side default value is main
 * @description reload la vue demandé par l'utilisateur
 */
async function reload(type, side = "main") {
	console.log(`${type} loaded on ${side}`);
	/** Je fetch les information dont j'ai besoins */
	const response = await fetch(
		"https://live.neos360.com/eso/paranal/apicam/config/config.json"
		//"http://127.0.0.1:5502/assets/config/config.json"
	);
	const { json, serveur } = await response.json();

	let urlImg = "";
	if (serveur.isProd === false) {
		urlImg = serveur.urlDev + json.images;
	} else {
		urlImg = serveur.urlProd + json.images;
	}

	let urlCoords = "";
	if (serveur.isProd === false) {
		urlCoords = serveur.urlDev + json.coords;
	} else {
		urlCoords = serveur.urlProd + json.coords;
	}

	const images = await fetch(urlImg);
	const coords = await fetch(urlCoords);

	/** Je les transformes en JSON */
	const displayImage = await images.json();
	const tcs = await coords.json();

	// Je load la 1er image avec les paramètres par défaut.
	const view = loadView(
		getItem(`type-${side}`),
		side,
		displayImage,
		getItem(`brightness-${side}`),
		getItem(`contrast-${side}`)
	);

	const viewCoords = loadCoords(tcs.img, side);

	/**
	 * Ici, en plus de reload mon composant IMAGE
	 * je dois aussi ajouter les filtres
	 */
	if (
		type === "lastImage" ||
		type === "lastSubstractionImage" ||
		type === "panorama" ||
		type === "attenuation"
	) {
		const IMG = document.querySelectorAll("#img");
		IMG.forEach((img) => {
			if (img.name === `img-${side}`) {
				addFilter(
					img,
					getItem(`brightness-${side}`),
					getItem(`contrast-${side}`)
				);
			}
		});
	}

	/** Get TIMER */
	const refresh = json.timer;
	let refreshEnabled = document.querySelector(`#${side} #checkbox-${side}`);
	let refreshTime = null;

	/** Get event if button changed */
	refreshEnabled.addEventListener("change", function () {
		if (refreshEnabled.checked) {
			refreshTime = setInterval(() => {
				loadView(
					getItem(`type-${side}`),
					side,
					displayImage,
					getItem(`brightness-${side}`),
					getItem(`contrast-${side}`)
				);
				console.log(getItem(`type-${side}`));
				loadCoords(tcs.img, side);
			}, refresh);
		} else {
			clearInterval(refreshTime);
		}
	});
}

const SIDES = document.querySelectorAll(".side");

if (SIDES.length === 0) {
	reload(getItem("type-main"));
	console.log(getItem("type-main"));
}

SIDES.forEach((side) => {
	if (side.id === "leftSide") {
		reload(getItem("type-leftSide"), side.id);
	} else {
		reload(getItem("type-rightSide"), side.id);
	}
});
