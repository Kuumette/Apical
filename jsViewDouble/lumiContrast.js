function updateTextInputBrightness(val) {
	document.getElementById("textInputBrightness").value = val;
}
function updateTextInputContrast(val) {
	document.getElementById("textInputContrast").value = val;
}

function brightness_and_contrast_Gauche(val, valC) {
	document.getElementById(
		"img"
	).style.filter = `brightness(${val}) contrast(${valC})`;
}
function brightness_and_contrast_Droite(val, valC) {
	document.getElementById(
		"img2"
	).style.filter = `brightness(${val}) contrast(${valC})`;
}
