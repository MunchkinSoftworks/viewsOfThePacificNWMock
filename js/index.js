//alert("hello world");
    $(".waypoint--1").waypoint(function(direction){
        if(direction == "down"){
            //alert("hellow worlds");
            $('.waypoint--1').addClass('fadeIn-center');
        }
    }, {
        offset: '65%'
    });
    $(".waypoint--2").waypoint(function(direction){
        if(direction == "down"){
            //alert("hellow worlds");
            $('.waypoint--2').addClass('fadeIn-center');
        }
    }, {
        offset: '65%'
    });


//// 
window.addEventListener("DOMContentLoaded", scrollLoop, false);

var mountainHeader = document.querySelector("#headerMountain");
var treesHeader = document.querySelector("#headerTreeline");


var xScrollPosition;
var yScrollPosition;
function scrollLoop(evt) {
    xScrollPosition = window.scrollX;
    yScrollPosition = window.scrollY;

    setTanslate(0, yScrollPosition * -0.6, mountainHeader);
    setTanslate(0, yScrollPosition * -1.2, treesHeader);

    requestAnimationFrame(scrollLoop);
}

function setTanslate (xPos, yPos, el) {
    el.style.transform = "translate3d(" + xPos + ", " + yPos + "px, 0)"; 
}
//$(document).ready({
//    $(".waypoint1").waypoint(function(direction){
//        alert("triggered");
//    });
//});