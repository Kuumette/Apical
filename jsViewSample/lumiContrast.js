function updateTextInputBrightness(val) {
	document.getElementById("textInputBrightness").value = val;
}
function updateTextInputContrast(val) {
	document.getElementById("textInputContrast").value = val;
}

function brightness_and_contrast(val, valC) {
	document.getElementById(
		"img"
	).style.filter = `brightness(${val}) contrast(${valC})`;
}
