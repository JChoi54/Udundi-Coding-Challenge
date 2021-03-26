// Variables
const expand = document.getElementById("expandDetail");
const shrink = document.getElementById("shrinkButton");
const box = document.getElementById("detailBox");
const info = document.getElementById("infoContent");
const header = document.getElementById("mainHeader");
const button = document.getElementById("expandButton");


// Adds classes when the "More Details" is clicked
expand.addEventListener("click", () => {
    box.classList.add("expand");
    info.classList.add("info-slide");
    header.classList.add("fade");
});

// Adds button animation keyframe when "More Details" is clicked
expand.addEventListener("mousedown", () => {
    button.classList.add("button-size");
});

// Removes the added classes when the "x" button is clicked
shrink.addEventListener("click", () => {
    box.classList.remove("expand");
    info.classList.remove("info-slide");
    header.classList.remove("fade");
    button.classList.remove("button-size");
});

