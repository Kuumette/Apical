let reURL = "../config/image.json";
let re = new XMLHttpRequest();
re.open("GET", reURL);
re.responseType = "json";
re.send();

re.onload = function () {
	// recup des element que j'ai besoin dans le DOM

	let parent = document.querySelector("#partieDroite");
	let nav = document.querySelector("#nav1");
	let reglage = document.querySelector("#reglage");
	let zoom = document.querySelector("#img-2");
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
	lastImageDroite = document.getElementById("lastImageDroite");
	lastSubstractionImageDroite = document.getElementById(
		"lastSubstractionImageDroite"
	);
	lastAnimationDroite = document.getElementById("lastAnimationDroite");
	lastSubstractionAnimationDroite = document.getElementById(
		"lastSubstractionAnimationDroite"
	);

	let image = re.response;
	name.textContent = "Apicam";
	date.id = "date";
	heure.id = "heure";
	name.id = "name";
	parent.appendChild(date);
	parent.appendChild(br1);
	parent.appendChild(heure);
	parent.appendChild(br);
	parent.appendChild(name);
	img.src = image.lastSubstractionImage.img;
	img.alt = image.desc;
	img.id = "img";
	parent.appendChild(img);
	date.textContent = image.lastImage.date;
	heure.textContent = image.lastImage.heure;

	lastImageDroite.onclick = function () {
		let image = re.response;
		img.src = image.lastImage.img;
		img.alt = image.desc;
		img.id = "img";
		parent.appendChild(img);
		date.textContent = image.lastImage.date;
		heure.textContent = image.lastImage.heure;
		date.style.opacity = "1";
		heure.style.opacity = "1";
		name.style.opacity = "1";
		img.style.display = "block";
		video.style.display = "none";
		video1.style.display = "none";
		reglage.style.display = "block";
		zoom.style.display = "block";
	};

	lastSubstractionImageDroite.onclick = function () {
		let image = re.response;
		img.src = image.lastSubstractionImage.img;
		img.alt = image.lastSubstractionImage.desc;
		img.id = "img";
		parent.appendChild(img);
		date.textContent = image.lastSubstractionImage.date;
		heure.textContent = image.lastSubstractionImage.heure;
		date.style.opacity = "1";
		heure.style.opacity = "1";
		name.style.opacity = "1";
		img.style.display = "block";
		video.style.display = "none";
		video1.style.display = "none";
		zoom.style.display = "none";

		reglage.style.display = "block";
	};
	lastAnimationDroite.onclick = function () {
		let v = re.response;
		video.setAttribute("class", "video-js");
		video.setAttribute("controls", " ");
		video.setAttribute("preload", "auto");
		video.setAttribute("data-setup", "{}");
		video.setAttribute("width", "700");
		video.setAttribute("height", "620");
		video.setAttribute("autoplay", "true");

		var source = document.createElement("source");
		source.setAttribute("src", v.lastAnimation.img);
		source.setAttribute("type", "video/mp4");
		video.appendChild(source);
		parent.appendChild(video);
		img.style.display = "none";
		date.style.opacity = "0";
		heure.style.opacity = "0";
		name.style.opacity = "0";
		video.style.display = "block";
		nav.style.display = "block";
		video1.style.display = "none";
		reglage.style.display = "none";
		zoom.style.display = "none";
		nav.style.marginTop = "20%";
	};

	lastSubstractionAnimationDroite.onclick = function () {
		let v = re.response;
		video1.setAttribute("class", "video-js");
		video1.setAttribute("controls", " ");
		video1.setAttribute("preload", "auto");
		video1.setAttribute("data-setup", "{}");
		video1.setAttribute("width", "700");
		video1.setAttribute("height", "620");
		video1.setAttribute("autoplay", "true");

		var sourcea = document.createElement("source");
		sourcea.setAttribute("src", v.lastSubstractionAnimation.img);
		sourcea.setAttribute("type", "video/mp4");
		video1.appendChild(sourcea);
		parent.appendChild(video1);
		video1.style.display = "block";
		date.style.opacity = "0";
		heure.style.opacity = "0";
		name.style.opacity = "0";
		nav.style.display = "block";
		video.style.display = "none";
		img.style.display = "none";
		reglage.style.display = "none";
		zoom.style.display = "none";
	};
};
