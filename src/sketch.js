"use strict";


function setup(){
    createCanvas(windowWidth, windowHeight);

    //this line divides the lane from the idle resource gathering and fighter deployment visual sections
    stroke(0,255,0);
    strokeWeight(5);
    line(0, windowHeight/2, windowWidth, windowHeight/2);
}


function windowResize() {
    resizeCanvas(windowWidth, windowHeight)
}


function draw() {
    windowResize();

}
