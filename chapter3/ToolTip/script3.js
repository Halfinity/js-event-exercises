document.getElementById("mySpan").addEventListener("mouseover", function (event) {
    console.log("Tooltip shown");
    document.getElementById("myTooltip").style.display = 'block';
    document.getElementById("myTooltip").style.top = (event.clientY + 5) + 'px';
    document.getElementById("myTooltip").style.left = (event.clientX + 5) + 'px';
});

document.getElementById("mySpan").addEventListener("mouseout", function () {
    document.getElementById("myTooltip").style.display = 'none';
});