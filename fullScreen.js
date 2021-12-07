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

function toggleFullScreen() {
	if (!document.fullscreenElement) {
		document.documentElement.requestFullscreen();
		disa.style.display = "none";
	} else {
		if (document.exitFullscreen) {
			document.exitFullscreen();
			disa.style.display = "block";
		}
	}
}
