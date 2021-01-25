const testClose = document.querySelector("#testClose");
let div = {};
testClose.addEventListener("click", (event) => {
	if (event.target.tagName !== "BUTTON") {
		return;
	} else {
		div = event.target.closest("DIV");
		div.hidden = true;
	}
});