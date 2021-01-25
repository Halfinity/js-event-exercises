let rangeInput = document.getElementById("rangeinput").value;
let buttonInput = document.getElementById("btn");

if (buttonInput.addEventListener) {
    buttonInput.addEventListener("click", testtest, false);
}
else if (buttonInput.attachEvent) {
    buttonInput.attachEvent('onclick', testtest);
}

function testtest(e) {
    if (rangeInput > 0 && rangeInput < 5) {
        alert("First");
    } else {
        alert("Second");
    }
}