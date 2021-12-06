// fonction auto refresh
const refresh = "1000";

function reloadPage() {
	var refreshEnabled = document.getElementById("checkbox");
	if (refreshEnabled.checked) {
		window.location.reload(1);
	}
}
//setInterval(reloadPage, refresh);
