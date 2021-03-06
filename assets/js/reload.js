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
let refreshTime;
async function reload(type, side = "main") {
	console.log(side);
	/** Je fetch les information dont j'ai besoins */
	const response = await fetch(
		//"https://live.neos360.com/eso/paranal/apicam/assets/config/config.json"
		"http://127.0.0.1:5502/assets/config/config.json"
		//"https://live.neos360.com/apical/test/apicam/assets/config/config.json"
	);

	let tmp = new Date();

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
		getItem(`contrast-${side}`),
		getItem(`invert-${side}`),
		getItem(`reglage-${side}`)
	);

	if (type === "lastImage" || type === "lastSubstractionImage") {
		const viewCoords = loadCoords(tcs.img, side);
	}
	/**
	 * Ici, en plus de load mon composant IMAGE
	 * je dois aussi ajouter les filtres
	 */
	if (
		type === "lastImage" ||
		type === "lastSubstractionImage" ||
		type === "panorama"
	) {
		const IMG = document.querySelectorAll("#img");
		IMG.forEach((img) => {
			if (img.name === `img-${side}`) {
				addFilter(
					img,
					getItem(`brightness-${side}`),
					getItem(`contrast-${side}`),
					getItem(`invert-${side}`)
				);
			}
		});
	}

	/** Get TIMER */
	const refresh = json.timer;
	// let refreshEnabled = document.querySelector(`#${side} #checkbox-${side}`);
	/** Get event if button changed */
	// clearInterval(refreshTime);
	// if (refreshEnabled.checked) {
	// 	refreshTime = setInterval(() => {
	// 		let refreshEnabled = document.querySelector(
	// 			`#${side} #checkbox-${side}`
	// 		);
	// 		console.log(refreshEnabled);

	// 		if (!refreshEnabled.checked) {
	// 			clearInterval(refreshTime);
	// 		} else {
	// 			console.log("je suis dans le else");
	// 			loadView(
	// 				getItem(`type-${side}`),
	// 				side,
	// 				displayImage,
	// 				getItem(`brightness-${side}`),
	// 				getItem(`contrast-${side}`),
	// 				getItem(`invert-${side}`)
	// 			);
	// 			loadCoords(tcs.img, side);
	// 			reload();
	// 		}
	// 	}, 10000);
	// }

	refreshTime = setInterval(() => {
		loadView(
			getItem(`type-${side}`),
			side,
			displayImage,
			getItem(`brightness-${side}`),
			getItem(`contrast-${side}`),
			getItem(`invert-${side}`)
		);
		loadCoords(tcs.img, side);
		reload(displayImage);
		//console.log(displayImage);
	}, 10000);
}

const SIDES = document.querySelectorAll(".side");
console.log(SIDES);
if (SIDES.length === 0) {
	reload(getItem("type-main"));
} else {
	SIDES.forEach((side) => {
		if (side.id === "leftSide") {
			reload(getItem("type-leftSide"), side.id);
		} else {
			reload(getItem("type-rightSide"), side.id);
		}
	});
}
