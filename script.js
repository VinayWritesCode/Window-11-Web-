
var WindowContent = document.querySelector(".window-content");
var SearchBar = document.querySelector(".searchBar");

// open start menu code

var StartIcon = document.getElementById("Start-menu");
var browser = document.querySelector(".browser");


StartIcon.addEventListener("click", function () {
    
    if (WindowContent.style.bottom === "0vh" ) {
        WindowContent.style.bottom = "93vh";
        if (SearchBar.style.bottom === "10vh") {
            SearchBar.style.bottom = "-180vh";
        }
    }
    else {
        WindowContent.style.bottom = "0vh";
    }
});

// Open Search Menu

var SearchIcon = document.getElementById("Search-menu");

SearchIcon.addEventListener("click", function () {
    
    if (SearchBar.style.bottom === "-180vh" &&  WindowContent.style.bottom === "0vh") {
        
        SearchBar.style.bottom = "10vh";
    }
    
    else if (WindowContent.style.bottom === "0vh" && SearchBar.style.bottom === "10vh") {
        SearchBar.style.bottom = "-180vh";
    }
    
    else if (WindowContent.style.bottom === "93vh") {
            WindowContent.style.bottom = "0vh";
            SearchBar.style.bottom = "10vh";
    }  
    else if (SearchBar.style.bottom === "10vh"){
        SearchBar.style.bottom = "-180vh"
    }
    else {
        SearchBar.style.bottom ="10vh";
    }
    
});

// Date And Time 

const CurrentTime = document.getElementById("time");
const CurrentDay = document.getElementById("day");
const CurrentDate = document.getElementById("date");


setInterval(() => {
        UpdateTime();
        UpdateDate();
}, 1000);

function UpdateDate() {
    const DATE = new Date();
    const date = DATE.getDay() + "/" + DATE.getMonth() + "/" + DATE.getFullYear();
    const day = DATE.toDateString().slice(0,3) ;
    CurrentDay.innerHTML = day;
    CurrentDate.innerHTML = date;
}

function UpdateTime() {
    const DATE = new Date();
    var hours = DATE.getHours();
    var minutes = DATE.getMinutes();
    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    var isAMorPM = "AM";
    if (hours > 12) {
        hours -= 12;
        isAMorPM = "PM";
    }
    var time = hours + ":" + minutes + " " + isAMorPM;
    CurrentTime.innerHTML = time;

}
