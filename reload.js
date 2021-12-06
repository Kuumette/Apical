// fonction auto refresh
const refresh = mydata.tempsRefresh;

function reloadPage() {
	var refreshEnabled = document.getElementById("checkbox");
	if (refreshEnabled.checked) {
		window.location.reload(1);
	}
}
//setInterval(reloadPage, refresh);
