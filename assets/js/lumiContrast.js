const BRIGHTNESS = document.querySelectorAll(".rangeBrightness");
const CONTRASTS = document.querySelectorAll(".rangeContrast");

/** La fonction init() provient de utils.js et permet d'initialiser le localStorage */
init();

// Sur mon tableau de BRIGHTNESS, je parcours chaque élément
BRIGHTNESS.forEach((range) => {
  // J'attend que l'élément change
  range.addEventListener("input", () => {
    // Je récupère la valeur de l'élément
    setItem(`brightness-${range.id}`, range.value);
    // synchronisation des valeurs
    synchro(range);
    // Je reload l'image
    reload(getItem(`type-${range.id}`), range.id);
  });
  // J'initialise la valeur de l'élément
  range.setAttribute("value", getItem("init"));
});

/** La même chose qu'au dessus */
CONTRASTS.forEach((range) => {
  range.addEventListener("change", () => {
    setItem(`contrast-${range.id}`, range.value);
    synchro(range);
    reload(getItem(`type-${range.id}`), range.id);
  });
  range.setAttribute("value", getItem("init"));
});

/** Permet de synchroniser les valeurs entre le range et le numérique */
function synchro(range) {
  // synchronisation des valeurs
  if (range.name === "amountRange") {
    range.nextElementSibling.value = range.value;
  } else {
    range.previousElementSibling.value = range.value;
  }
}