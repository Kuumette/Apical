let reURL = "https://live.neos360.com/eso/paranal/apicam/config/image.json";
let re = new XMLHttpRequest();
re.open("GET", reURL);
re.responseType = "json";
re.send();

re.onload = function () {
	// recup des element que j'ai besoin dans le DOM

	let parent = document.querySelector("#partieDroite");
	let infoImgDroite = document.querySelector("#infoImgDroite");
	let nav = document.querySelector("#nav1");
	let reglageDroite = document.querySelector("#reglageDroite");
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
	infoImgDroite.appendChild(date);
	infoImgDroite.appendChild(br1);
	infoImgDroite.appendChild(heure);
	infoImgDroite.appendChild(br);
	infoImgDroite.appendChild(name);
	img.src = image.lastSubstractionImage.img;
	img.alt = image.desc;
	img.id = "img2";
	parent.appendChild(img);
	date.textContent = image.lastSubstractionImage.date;
	heure.textContent = image.lastSubstractionImage.heure;

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
		reglageDroite.style.display = "block";
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
		reglageDroite.style.display = "block";
		zoom.style.display = "none";
	};
	lastAnimationDroite.onclick = function () {
		let v = re.response;
		video.setAttribute("class", "video-js");
		video.setAttribute("controls", " ");
		video.setAttribute("preload", "auto");
		video.setAttribute("data-setup", "{}");
		video.setAttribute("width", "100%");
		video.setAttribute("height", "100%");
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
		reglageDroite.style.display = "none";
		zoom.style.display = "none";
		nav.style.marginTop = "20%";
	};

	lastSubstractionAnimationDroite.onclick = function () {
		let v = re.response;
		video1.setAttribute("class", "video-js");
		video1.setAttribute("controls", " ");
		video1.setAttribute("preload", "auto");
		video1.setAttribute("data-setup", "{}");
		video1.setAttribute("width", "100%");
		video1.setAttribute("height", "100%");
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
		reglageDroite.style.display = "none";
		zoom.style.display = "none";
	};
};
