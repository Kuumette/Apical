let temps,
	secondes = 0;

let display = document.getElementById("reglage");
let overlay = document.getElementById("last");
let display1 = document.getElementById("nav");
let display2 = document.getElementById("auto");

function resetTemps() {
	document.querySelector(".delai").style.display = "none";
	clearInterval(temps);
	secondes = 0;
	temps = setInterval(startTemps, 60000);
	display.style.opacity = "1";
	overlay.style.opacity = "1";
	display1.style.opacity = "1";
	display2.style.opacity = "1";
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
	display2.style.opacity = "0";
}
