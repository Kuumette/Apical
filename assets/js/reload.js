/**
 * 
 * Je créer une function qui m'affiche chaque x seconde mon dernier élément
 * 
 * setInterval de timer qui m'appel afficheImage.js
 * 
 * AfficheImage.js prend en paramètre le tableau de mes images avec comme clé
 * lastImage / lastSubstractionImage / lastAnimation / lastSubstractionAnimation
 * qui ont tous comme data 
 * - "img": "./ressources/lastImage.jpg",
	 -	"desc": "last picture",
	 -	"date": "2020-02-16",
	 -	"heure": "03:48 UT"
 * 
 * 
 * */

/**
 *
 * @param {string} type
 * @param {string} side default value is main
 * @description reload la vue demandé par l'utilisateur
 */
async function reload(type, side = "main") {
  console.log(`${type} loaded on ${side}`);
  /** Je fetch les information dont j'ai besoins */
  const response = await fetch("./assets/config/config.json");
  const images = await fetch("./assets/config/image.json");
  const coords = await fetch("./assets/config/pointCoord_overlay.json");

  /** Je les transformes en JSON */
  const { dev, prod } = await response.json();
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
  if (type === "lastImage" || type === "lastSubstractionImage") {
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
  const refresh = dev.timer;
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
}

SIDES.forEach((side) => {
  if (side.id === "leftSide") {
    reload(getItem("type-leftSide"), side.id);
  } else {
    reload(getItem("type-rightSide"), side.id);
  }
});
