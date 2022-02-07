let temps,
	secondes = 0;

let display = document.getElementById("reglageGauche");
let overlay = document.getElementById("last");
let display1 = document.getElementById("nav1");
let refresh = document.getElementById("d2");
let refreshDroite = document.getElementById("auto_droite");
let lastDroite = document.getElementById("lastDroite");
let reglageDroite = document.getElementById("reglageDroite");
let navDroite = document.getElementById("navDroite");

function resetTemps() {
	document.querySelector(".delai").style.display = "none";
	clearInterval(temps);
	secondes = 0;

	temps = setInterval(startTemps, 5000);
	display.style.opacity = "1";
	overlay.style.opacity = "1";
	display1.style.opacity = "1";
	refresh.style.opacity = "1";
	refreshDroite.style.opacity = "1";
	lastDroite.style.opacity = "1";
	reglageDroite.style.opacity = "1";
	navDroite.style.opacity = "1";
}

window.onload = resetTemps;
window.ontouchstart = resetTemps;
window.onclick = resetTemps;
window.onkeypress = resetTemps;
window.onmousemove = resetTemps;
window.onmousedown = resetTemps;

function startTemps() {
	secondes++;
	document.querySelector(".secondes").textContent = secondes;
	document.querySelector(".delai").style.display = "none";
	display.style.opacity = "0";
	overlay.style.opacity = "0";
	display1.style.opacity = "0";
	refresh.style.opacity = "0";
	refreshDroite.style.opacity = "0";
	lastDroite.style.opacity = "0";
	reglageDroite.style.opacity = "0";
	navDroite.style.opacity = "0";
}
