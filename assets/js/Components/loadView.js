/** La fonction de reload on peux la mettre ailleurs 😁 */
function loadView(type, side, displayImage, brightness, contrast) {
	/**
	 * Pour accerder à une information de notre json
	 * il faut écrire `displayImage[type]`
	 */

	/** Je récupère les infos du DOM */
	const CONTENT = document.querySelector(`#${side} #content`);
	const INFO_IMG = document.querySelector(`#${side} #infoImg`);
	const TOGGLE_COORDS = document.querySelector("#last");
	const TOGGLE_COORDS_G = document.querySelector("#lastGauche");
	const TOGGLE_COORDS_D = document.querySelector("#lastDroite");
	const REGLAGE_GAUCHE = document.querySelector("#footerGauche");
	const REGLAGE_DROITE = document.querySelector("#footerDroite");

	const REGLAGE = document.querySelector(".reglage");
	let html = "";

	// J'insere les information reçu depuis displayImage pour l'insérer dans le DOM
	const infoImg = `
  <p id="date">${displayImage[type].date}</p>
  <p id="heure">${displayImage[type].heure}</p>
  <p id="name">apicam</p>
  `;

	/** Si c'est lastImage ou lastSubstractionImage alors */
	if (type === "lastImage" || type === "lastSubstractionImage") {
		let tmp = new Date();
		html = `
			<div id="center-${side}" style="display: ${getItem(`display-${side}`)}"></div>
			<img src="${
				displayImage[type].img + "?" + tmp.getTime()
			}" alt="description" id="img" name="img-${side}" style="filter: brightness(${brightness}) contrast(${contrast}) !important;"/>
    	`;
		// Les informations sont necessaire que pour les images

		INFO_IMG.innerHTML = infoImg;
		if (side === "main") {
			if (type === "lastImage" || type === "lastSubstractionImage") {
				TOGGLE_COORDS.style.opacity = "1";
				REGLAGE.style.display = "block";
			}
		} else if (side === "leftSide") {
			if (type === "lastImage" || type === "lastSubstractionImage") {
				TOGGLE_COORDS_G.style.opacity = "1";
				REGLAGE_GAUCHE.style.display = "block";
			}
		} else if (side === "rightSide") {
			if (type === "lastImage" || type === "lastSubstractionImage") {
				TOGGLE_COORDS_D.style.opacity = "1";
				REGLAGE_DROITE.style.display = "block";
			}
		}
		/** Si c'est lastAnimation ou lastSubstractionAnimation alors */
	} else if (
		type === "lastAnimation" ||
		type === "lastSubstractionAnimation"
	) {
		let tmp = new Date();
		/** Sinon c'est une vidéo */
		html = `
			<div id="center" style="display: ${getItem(`display-${side}`)}"></div>

			<video src="${
				displayImage[type].img + "?" + tmp.getTime()
			}" autoplay preload controls loop class="video-js"></video>
		`;
		// j'efface les informations pour les vidéos
		INFO_IMG.innerHTML = "";
		if (side === "main") {
			TOGGLE_COORDS.style.opacity = "0";
			REGLAGE.style.display = "none";
		} else if (side === "leftSide") {
			TOGGLE_COORDS_G.style.opacity = "0";
			REGLAGE_GAUCHE.style.display = "none";
		} else if (side === "rightSide") {
			TOGGLE_COORDS_D.style.opacity = "0";
			REGLAGE_DROITE.style.display = "none";
		}
		/** Si c'est attenuation alors */
	} else if (type === "attenuation") {
		let tmp = new Date();
		html = `
			<img src="${
				displayImage[type].img + "?" + tmp.getTime()
			}" alt="description" id="imgAttenuation" name="img-${side}" style="filter: brightness(1) contrast(1) !important;"/>
    	`;
		// Les informations sont necessaire que pour les images

		INFO_IMG.innerHTML = infoImg;
		if (side === "main") {
			if (type === "attenuation") {
				REGLAGE.style.display = "none";
				TOGGLE_COORDS.style.opacity = "0";
			}
		} else if (side === "leftSide") {
			TOGGLE_COORDS_G.style.opacity = "0";
			REGLAGE_GAUCHE.style.display = "none";
		} else if (side === "rightSide") {
			TOGGLE_COORDS_D.style.opacity = "0";
			REGLAGE_DROITE.style.display = "none";
		}
		/** Si c'est panorama alors */
	} else if (type === "panorama") {
		let tmp = new Date();
		html = `
			<img src="${
				displayImage[type].img + "?" + tmp.getTime()
			}" alt="description" id="imgAttenuation" name="img-${side}" style="filter: brightness(${brightness}) contrast(${contrast}) !important;"/>
    	`;
		// Les informations sont necessaire que pour les images

		INFO_IMG.innerHTML = infoImg;
		if (side === "main") {
			TOGGLE_COORDS.style.opacity = "0";
			REGLAGE.style.display = "block";
		} else if (side === "leftSide") {
			TOGGLE_COORDS_G.style.opacity = "0";
			REGLAGE_GAUCHE.style.display = "block";
		} else if (side === "rightSide") {
			TOGGLE_COORDS_D.style.opacity = "0";
			REGLAGE_DROITE.style.display = "block";
		}
	}

	CONTENT.innerHTML = html;
}
