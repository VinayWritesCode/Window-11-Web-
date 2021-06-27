var StartIcon = document.getElementById("Start-menu");

StartIcon.addEventListener("click", function () {
    let WindowContent = document.querySelector(".window-content");
    if (WindowContent.style.bottom === "0vh") {
        WindowContent.style.bottom = "85vh";
    }
    else {
        WindowContent.style.bottom = "0vh";
    }
});





