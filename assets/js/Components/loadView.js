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
		if (type === "lastImage" || type === "lastSubstractionImage") {
			TOGGLE_COORDS.style.opacity = "1";
			REGLAGE.style.display = "block";
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
		TOGGLE_COORDS.style.opacity = "0";
		REGLAGE.style.display = "none";
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
		if (type === "attenuation") {
			REGLAGE.style.display = "none";
			TOGGLE_COORDS.style.opacity = "0";
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
		if (type === "panorama") {
			REGLAGE.style.display = "block";
			TOGGLE_COORDS.style.opacity = "0";
		}
	}

	CONTENT.innerHTML = html;
}
