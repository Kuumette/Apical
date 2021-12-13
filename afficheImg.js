let requestURL = "./config/image.json";
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json";
request.send();

request.onload = function () {
	// recup des element que j'ai besoin dans le DOM
	let display = document.getElementById("d2");
	let parent = document.querySelector("#content");
	// creation de mais deux element video
	let video = document.createElement("video");
	let video1 = document.createElement("video");
	// Creation de l'élement img
	let img = document.createElement("img");
	// creation des info image
	let date = document.createElement("p");
	let heure = document.createElement("p");
	let name = document.createElement("p");
	let br = document.createElement("br");
	let br1 = document.createElement("br");
	// recup mais element button dans le DOM
	lastImage = document.getElementById("lastImage");
	lastSubstractionImage = document.getElementById("lastSubstractionImage");
	lastAnimation = document.getElementById("lastAnimation");
	lastSubstractionAnimation = document.getElementById(
		"lastSubstractionAnimation"
	);

	let image = request.response;
	name.textContent = "Apicam";
	date.id = "date";
	heure.id = "heure";
	name.id = "name";
	parent.appendChild(date);
	parent.appendChild(br1);
	parent.appendChild(heure);
	parent.appendChild(br);
	parent.appendChild(name);
	img.src = image.lastImage.img;
	img.alt = image.desc;
	img.id = "img";
	parent.appendChild(img);
	date.textContent = image.lastImage.date;
	heure.textContent = image.lastImage.heure;

	lastImage.onclick = function () {
		let image = request.response;
		img.src = image.lastImage.img;
		img.alt = image.desc;
		img.id = "img";
		parent.appendChild(img);
		date.textContent = image.lastImage.date;
		heure.textContent = image.lastImage.heure;

		img.style.display = "block";
		video.style.display = "none";
		video1.style.display = "none";
		date.style.display = "inline";
		heure.style.display = "inline";
		name.style.display = "inline";
		display.style.display = "block";
	};

	lastSubstractionImage.onclick = function () {
		let image = request.response;
		img.src = image.lastSubstractionImage.img;
		img.alt = image.lastSubstractionImage.desc;
		img.id = "img";
		parent.appendChild(img);
		date.textContent = image.lastSubstractionImage.date;
		heure.textContent = image.lastSubstractionImage.heure;

		img.style.display = "block";
		video.style.display = "none";
		video1.style.display = "none";
		date.style.display = "inline";
		heure.style.display = "inline";
		name.style.display = "inline";
		display.style.display = "block";
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
		display.style.display = "none";
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
		display.style.display = "none";
	};
};
