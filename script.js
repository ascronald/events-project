let aqua = document.getElementById("aqua");
let teal = document.getElementById("teal");
let pink = document.getElementById("pink");
let purple = document.getElementById("purple");
let colorless = document.getElementById("colorless");
let colordisplay = document.getElementById("color-display");

aqua.onclick = function() {
    colordisplay.style.backgroundColor = "aqua";
    colordisplay.innerHTML = "aqua";
}

teal.onclick = function() {
    colordisplay.style.backgroundColor = "teal";
    colordisplay.innerHTML = "teal";
}
pink.onclick = function() {
    colordisplay.style.backgroundColor = "pink";
    colordisplay.innerHTML = "pink";
}
purple.onclick = function() {
    colordisplay.style.backgroundColor = "purple";
    colordisplay.innerHTML = "purple";
}
colorless.onclick = function() {
    colordisplay.style.backgroundColor = "white";
    colordisplay.innerHTML = "colorless";
}