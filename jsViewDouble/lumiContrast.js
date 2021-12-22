function brightness(val) {
	document.getElementById("img").style.filter = `brightness(${val})`;
	document.querySelector("#img-2").style.filter = `brightness(${val})`;
}
function contrast(val) {
	document.getElementById("img").style.filter = `contrast(${val})`;
	document.querySelector("#img-2").style.filter = `contrast(${val})`;
}

function updateTextInputBrightness(val) {
	document.getElementById("textInputBrightness").value = val;
}
function updateTextInputContrast(val) {
	document.getElementById("textInputContrast").value = val;
}
