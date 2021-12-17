function brightness(val) {
	document.getElementById("img").style.filter = `brightness(${val})`;
	document.querySelector("#img-2").style.filter = `brightness(${val})`;
}
function contrast(val) {
	document.getElementById("img").style.filter = `contrast(${val})`;
	document.querySelector("#img-2").style.filter = `contrast(${val})`;
}
// const rangeInputs = document.querySelectorAll('input[type="range"]');
// const numberInput = document.querySelector('input[type="number"]');

// function handleInputChange(e) {
// 	let target = e.target;
// 	if (e.target.type !== "range") {
// 		target = document.getElementById("range");
// 	}
// 	const min = target.min;
// 	const max = target.max;
// 	const val = target.value;

// 	target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
// }

// rangeInputs.forEach((input) => {
// 	input.addEventListener("input", handleInputChange);
// });

//numberInput.addEventListener("input", handleInputChange);
function updateTextInputBrightness(val) {
	document.getElementById("textInputBrightness").value = val;
}
function updateTextInputContrast(val) {
	document.getElementById("textInputContrast").value = val;
}
