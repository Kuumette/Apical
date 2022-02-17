/** La fonction de reload on peux la mettre ailleurs 😁 */
function loadView(type, side, displayImage, brightness, contrast) {
  /**
   * Pour accerder à une information de notre json
   * il faut écrire `displayImage[type]`
   */

  /** Je récupère les infos du DOM */
  const CONTENT = document.querySelector(`#${side} #content`);
  const INFO_IMG = document.querySelector(`#${side} #infoImg`);

  let html = "";

  // J'insere les information reçu depuis displayImage pour l'insérer dans le DOM
  const infoImg = `
  <p id="date">${displayImage[type].date}</p>
  <p id="heure">${displayImage[type].heure}</p>
  <p id="name">apicam</p>
  `;

  /** Si c'est une image alors */
  if (type === "lastImage" || type === "lastSubstractionImage") {
    html = `
    <div id="center-${side}" style="display: ${getItem(
      `display-${side}`
    )}"></div>
    <img src="${
      displayImage[type].img
    }" alt="description" id="img" name="img-${side}" style="filter: brightness(${brightness}) contrast(${contrast}) !important;"/>
    `;
    // Les informations sont necessaire que pour les images
    INFO_IMG.innerHTML = infoImg;
  } else {
    /** Sinon c'est une vidéo */
    html = `
    <div id="center" style="display: ${getItem(`display-${side}`)}"></div>

    <video src="${
      displayImage[type].img
    }" autoplay preload controls loop class="video-js"></video>`;
    // j'efface les informations pour les vidéos
    INFO_IMG.innerHTML = "";
  }

  CONTENT.innerHTML = html;
}
