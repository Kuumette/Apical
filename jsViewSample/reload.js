let rURL =
	"https://live.neos360.com/eso/paranal/apicam/config/configReload.json";
let r = new XMLHttpRequest();
r.open("GET", rURL);
r.responseType = "json";
r.send();

r.onload = function () {
	let reload = r.response;
	// fonction auto refresh
	const refresh = reload.reload.timer;
	function reloadPage() {
		let refreshEnabled = document.getElementById("checkbox");
		let container = document.getElementById("content");
		if (refreshEnabled.checked) {
			$("#content").ready(function () {
				location.reload();
			});

			//window.location.reload(1);
		}
	}
	setInterval(reloadPage, refresh);
};
