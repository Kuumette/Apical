let rURL = "./config/configReload.json";
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
		let content = document.getElementById("content");
		if (refreshEnabled.checked) {
			$("#content").fadeOut("slow", function () {
				$(this).load("/test.html", function () {
					$(this).fadeIn("slow");
				});
			});
		}
	}
	setInterval(reloadPage, refresh);
};
//window.location.reload(1);
