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
	/** Je fetch les information dont j'ai besoins */
	const response = await fetch(
		"https://live.neos360.com/eso/paranal/apicam/assets/config/config.json"
		//"http://127.0.0.1:5502/assets/config/config.json"
		//"https://live.neos360.com/apical/test/apicam/assets/config/config.json"
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
		//getItem(`brightnessUser-${side}`),
		getItem(`brightness-${side}`),
		//getItem(`contrastUser-${side}`),
		getItem(`contrast-${side}`),
		//getItem(`invertUser-${side}`)
		getItem(`invert-${side}`),
		getItem(`reglage-${side}`)
		//console.log("je load la 1er image")
	);

	//if (type === "lastImage" || type === "lastSubstractionImage") {
	const viewCoords = loadCoords(tcs.img, side);
	//}
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
					// getItem(`brightnessUser-${side}`),
					// getItem(`invertUser-${side}`),
					// getItem(`contrastUser-${side}`),
					getItem(`brightness-${side}`),
					getItem(`contrast-${side}`),
					getItem(`invert-${side}`)
				);
				//console.log("load filtre");
				//addCoord(img, getItem(`display-${side}`, "block"));
			}
		});
	}

	/** Get TIMER */
	const refresh = json.timer;
	let refreshEnabled = document.querySelector(`#${side} #checkbox-${side}`);

	/** Get event if button changed */
	clearInterval(refreshTime);
	if (refreshEnabled.checked) {
		refreshTime = setInterval(() => {
			//console.log("refrsh");
			let refreshEnabled = document.querySelector(
				`#${side} #checkbox-${side}`
			);

			if (!refreshEnabled.checked) clearInterval(refreshTime);
			else
				loadView(
					getItem(`type-${side}`),
					side,
					displayImage,
					getItem(`brightness-${side}`),
					getItem(`contrast-${side}`),
					getItem(`invert-${side}`)

					//getItem(`brightnessUser-${side}`),
					//getItem(`contrastUser-${side}`),
					//getItem(`invertUser-${side}`)
				);
			//console.log("reload image + filtre");
			loadCoords(tcs.img, side);
		}, refresh);
	}
}
const SIDES = document.querySelectorAll(".side");

if (SIDES.length === 0) {
	reload(getItem("type-main"));
}

SIDES.forEach((side) => {
	if (side.id === "leftSide") {
		reload(getItem("type-leftSide"), side.id);
	} else {
		reload(getItem("type-rightSide"), side.id);
	}
});

// let refreshTime;
// const reload = (type, side = "main") => {
// 	fetch(
// 		"https://live.neos360.com/apical/test/apicam/assets/config/config.json"
// 	)
// 		.then((response = response.json()))
// 		.then((json) => {
// 			let urlImg =
// 				(serveur.isProd ? serveur.urlProd : serveur.urlDev) +
// 				json.images;
// 			let urlCoords =
// 				(serveur.isProd ? serveur.urlProd : serveur.urlDev) +
// 				json.coords;
// 			const images = await fetch(urlImg);
// 			const coords = await fetch(urlCoords);
// 			const displayImage = await images.json();
// 			const tcs = await coords.json();
// 			const view = loadView(
// 				getItem(`type-${side}`),
// 				side,
// 				displayImage,
// 				getItem(`brightness-${side}`),
// 				getItem(`contrast-${side}`),
// 				getItem(`invert-${side}`)
// 			);
// 			if (type === "lastImage" || type === "lastSubstractionImage") {
// 				const viewCoords = loadCoords(tcs.img, side);
// 			}
// 			/**
// 			 * Ici, en plus de reload mon composant IMAGE
// 			 * je dois aussi ajouter les filtres
// 			 */
// 			if (
// 				type === "lastImage" ||
// 				type === "lastSubstractionImage" ||
// 				type === "panorama"
// 			) {
// 				const IMG = document.querySelectorAll("#img");
// 				IMG.forEach((img) => {
// 					if (img.name === `img-${side}`) {
// 						addFilter(
// 							img,
// 							getItem(`brightness-${side}`),
// 							getItem(`contrast-${side}`),
// 							getItem(`invert-${side}`)
// 						);
// 					}
// 				});
// 			}

// 			/** Get TIMER */
// 			const refresh = json.timer;
// 			let refreshEnabled = document.querySelector(
// 				`#${side} #checkbox-${side}`
// 			);

// 			/** Get event if button changed */
// 			clearInterval(refreshTime);
// 			if (refreshEnabled.checked) {
// 				refreshTime = setInterval(() => {
// 					let refreshEnabled = document.querySelector(
// 						`#${side} #checkbox-${side}`
// 					);
// 					if (!refreshEnabled.checked) clearInterval(refreshTime);
// 					else
// 						loadView(
// 							getItem(`type-${side}`),
// 							side,
// 							displayImage,
// 							getItem(`brightness-${side}`),
// 							getItem(`contrast-${side}`),
// 							getItem(`invert-${side}`)
// 						);
// 					loadCoords(tcs.img, side);
// 				}, refresh);
// 			}
// 		});
// };
