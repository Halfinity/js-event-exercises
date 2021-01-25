let theThing = document.querySelector("#thing");
let container = document.querySelector("#contentContainer");

container.addEventListener("click", function(event) {
	let xPosition = event.clientX - container.getBoundingClientRect().left - (theThing.clientWidth / 2);
    let yPosition = event.clientY - container.getBoundingClientRect().top - (theThing.clientHeight / 2);
    
	theThing.style.left = xPosition + "px";
	theThing.style.top = yPosition + "px";
	}
);