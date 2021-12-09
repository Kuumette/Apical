let temps,
	secondes = 0;

let display = document.getElementById("reglage");
let overlay = document.getElementById("last");
let display1 = document.getElementById("droit");

function resetTemps() {
	document.querySelector(".delai").style.display = "none";
	clearInterval(temps);
	secondes = 0;
	temps = setInterval(startTemps, 1000);
	display.style.display = "block";
	overlay.style.display = "block";
	display1.style.display = "block";
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
	display.style.display = "none";
	overlay.style.display = "none";
	display1.style.display = "none";
}
