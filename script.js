var StartIcon = document.getElementById("Start-menu");
var browser = document.querySelector(".browser");

StartIcon.addEventListener("click", function () {
    let WindowContent = document.querySelector(".window-content");
    if (WindowContent.style.bottom === "0vh") {
        WindowContent.style.bottom = "92vh";
    }
    else {
        WindowContent.style.bottom = "0vh";
    }
});





