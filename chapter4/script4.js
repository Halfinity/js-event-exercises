  const task = document.querySelector("#Mouse");
const tasks = task.querySelectorAll("li");
task.addEventListener("click", (event) => {
	if (!(event.ctrlKey || event.metaKey)) {
		event.target.className = "choose";
		for (const task of tasks) {
			task.className = "";
		}
	}
	event.target.className = "choose";
});