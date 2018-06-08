/*

//alert("I was here");
document.getElementById("canvas1").onmouseenter = function() {mouseEnter()};
document.getElementById("canvas1").onmouseleave = function() {mouseLeave()};

function mouseEnter() {
  //  alert("I was here");
    document.getElementById("canvas1").style.borderColor = "red";
}

function mouseLeave() {
    document.getElementById("canvas1").style.borderColor = "black";
}

*/


function myFunction(e) {
    var x = e.clientX;
    var y = e.clientY;
    var coor = "Coordinates: (" + x + "," + y + ")";
    document.getElementById("demo").innerHTML +="here";
    document.getElementById("demo").innerHTML += coor;
}

function clearCoor() {
    document.getElementById("demo").innerHTML = "";
}