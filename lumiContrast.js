function brightness(val) {
	document.getElementById("img1").style.filter = `brightness(${val})`;
	let af = (document.getElementById("lumi_affi").innerHTML = val);
}
function contrast(val) {
	document.getElementById("img1").style.filter = `contrast(${val})`;
	let af = (document.getElementById("con_affi").innerHTML = val);
}
