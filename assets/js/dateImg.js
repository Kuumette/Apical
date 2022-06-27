function lastModified(file) {
	let xmlObj = !window.XMLHttpRequest
		? new ActiveXObject("Microsoft.XMLHTTP")
		: new XMLHttpRequest();
	xmlObj.open("GET", file, false);
	try {
		xmlObj.send();
	} catch (y) {}
	let dt = xmlObj.getResponseHeader("Last-Modified");

	return new Date(dt);
}

// Utilisation
let dte = lastModified("ressources/attenuation.jpg");

console.log(`Attenuation : ${dte}`);
