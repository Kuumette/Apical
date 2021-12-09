// var elem = document.getElementById("img");
// if (elem.requestFullscreen) {
// 	elem.requestFullscreen();
// }
document.addEventListener(
	"keydown",
	function (e) {
		if (e.keyCode == 13) {
			toggleFullScreen();
		}
	},
	false
);
let disa = document.getElementById("d2");
let lastImage = document.getElementById("lastImage");
let lastSubstractionImage = document.getElementById("lastSubstractionImage");
let lastAnimation = document.getElementById("lastAnimation");
let lastSubstractionAnimation = document.getElementById(
	"lastSubstractionAnimation"
);
let reglage = document.querySelector(".reglage");
function toggleFullScreen() {
	if (!document.fullscreenElement) {
		document.documentElement.requestFullscreen();
		disa.style.display = "none";
		lastImage.style.display = "none";
		lastSubstractionImage.style.display = "none";
		lastAnimation.style.display = "none";
		lastSubstractionAnimation.style.display = "none";
		reglage.style.display = "none";
	} else {
		if (document.exitFullscreen) {
			document.exitFullscreen();
			disa.style.display = "block";
			lastImage.style.display = "block";
			lastSubstractionImage.style.display = "block";
			lastAnimation.style.display = "block";
			lastSubstractionAnimation.style.display = "block";
			reglage.style.display = "block";
		}
	}
}
