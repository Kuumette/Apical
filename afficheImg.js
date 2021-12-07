var requestURL = "./config/image.json";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function () {
	var parent = document.getElementById("content");
	var video = document.createElement("video");
	var video1 = document.createElement("video");
	//Creation de l'élement img
	let img = document.createElement("img");

	let date = document.createElement("p");
	let heure = document.createElement("p");
	let name = document.createElement("p");
	lastImage = document.getElementById("lastImage");
	lastSubstractionImage = document.getElementById("lastSubstractionImage");
	lastAnimation = document.getElementById("lastAnimation");
	var image = request.response;
	img.src = image.lastImage.img;
	img.alt = image.desc;
	img.id = "img";
	document.body.appendChild(img);
	date.textContent = image.lastImage.date;
	heure.textContent = image.lastImage.heure;
	name.textContent = "Apicam";
	// ajoute un id a ma balise p
	date.id = "date";
	heure.id = "heure";
	name.id = "name";
	document.body.appendChild(date);
	document.body.appendChild(heure);
	document.body.appendChild(name);

	lastImage.onclick = function () {
		var image = request.response;
		img.src = image.lastImage.img;
		img.alt = image.desc;
		img.id = "img";
		document.body.appendChild(img);
		date.textContent = image.lastImage.date;
		heure.textContent = image.lastImage.heure;
		name.textContent = "Apicam";
		date.id = "date";
		heure.id = "heure";
		name.id = "name";
		document.body.appendChild(date);
		document.body.appendChild(heure);
		document.body.appendChild(name);
		img.style.display = "block";
		video.style.display = "none";
		date.style.display = "block";
		heure.style.display = "block";
		name.style.display = "block";
	};

	lastSubstractionImage.onclick = function () {
		var image = request.response;
		img.src = image.lastSubstractionImage.img;
		img.alt = image.lastSubstractionImage.desc;
		img.id = "img";
		document.body.appendChild(img);
		date.textContent = image.lastSubstractionImage.date;
		heure.textContent = image.lastSubstractionImage.heure;
		name.textContent = "Apicam";
		date.id = "date";
		heure.id = "heure";
		name.id = "name";
		document.body.appendChild(date);
		document.body.appendChild(heure);
		document.body.appendChild(name);
		img.style.display = "block";
		video.style.display = "none";
		date.style.display = "block";
		heure.style.display = "block";
		name.style.display = "block";
	};
	lastAnimation.onclick = function () {
		let v = request.response;
		video.setAttribute("class", "video-js");
		video.setAttribute("controls", " ");
		video.setAttribute("preload", "auto");
		video.setAttribute("data-setup", "{}");
		video.setAttribute("width", "800");
		video.setAttribute("height", "420");

		var source = document.createElement("source");
		source.setAttribute("src", v.lastAnimation.img);
		source.setAttribute("type", "video/mp4");
		video.appendChild(source);
		parent.appendChild(video);
		img.style.display = "none";
		date.style.display = "none";
		heure.style.display = "none";
		name.style.display = "none";
		video.style.display = "block";
		video1.style.display = "none";
	};
	lastSubstractionAnimation.onclick = function () {
		let v = request.response;
		video1.setAttribute("class", "video-js");
		video1.setAttribute("controls", " ");
		video1.setAttribute("preload", "auto");
		video1.setAttribute("data-setup", "{}");
		video1.setAttribute("width", "800");
		video1.setAttribute("height", "420");

		var sourcea = document.createElement("source");
		sourcea.setAttribute("src", v.lastSubstractionAnimation.img);
		sourcea.setAttribute("type", "video/mp4");
		video1.appendChild(sourcea);
		parent.appendChild(video1);
		img.style.display = "none";
		date.style.display = "none";
		heure.style.display = "none";
		name.style.display = "none";
		video.style.display = "none";
		video1.style.display = "block";
	};
};
