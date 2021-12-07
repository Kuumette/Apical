var rURL = "./config/configReload.json";
var r = new XMLHttpRequest();
r.open("GET", rURL);
r.responseType = "json";
r.send();

r.onload = function () {
	var reload = r.response;
	// fonction auto refresh
	const refresh = reload.reload.timer;

	function reloadPage() {
		var refreshEnabled = document.getElementById("checkbox");
		if (refreshEnabled.checked) {
			window.location.reload(1);
		}
	}
	setInterval(reloadPage, refresh);
};
