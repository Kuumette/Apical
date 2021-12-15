function brightness(val) {
	document.getElementById("img").style.filter = `brightness(${val})`;
	let af = (document.getElementById("lumi_affi").innerHTML = val);
}
function contrast(val) {
	document.getElementById("img").style.filter = `contrast(${val})`;
	let af = (document.getElementById("con_affi").innerHTML = val);
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
function updateTextInput(val) {
	document.getElementById("textInput").value = val;
}
