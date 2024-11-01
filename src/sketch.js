"use strict";



function setup(){
    createCanvas(windowWidth, windowHeight);
    console.log(windowWidth);
    console.log(windowHeight);
}


function windowResize() {
    resizeCanvas(windowWidth, windowHeight)
}


function draw() {
    //background to illustrate canvas size
    background(50,50,50)
    windowResize();

    //added just some visual elements to test the canvas
    rect(150, 150, 100, 50)
    rect(350, 350, 100, 50)

}
