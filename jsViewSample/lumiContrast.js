function brightness(val) {
	document.getElementById("img").style.filter = `brightness(5)`;
}
function contrast(val) {
	document.getElementById("img").style.filter = `contrast(${val}) `;
}

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
function updateBrightnesAndContrast(val, valC) {
	document.getElementById("textInputContrast").value = valC;
	document.getElementById("textInputBrightness").value = val;
}
