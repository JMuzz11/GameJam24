"use strict";





//Background
let ground
//test colour
let gray = (75,75,75);
let baseRoom;


function preload(){
    wire = loadImage('..//assets/wire.png')
    silver = loadImage('../assets/silver_bar.png')
    gold = loadImage('..//assets/gold_bar.png')
}

function setup(){
    createCanvas(windowWidth, windowHeight);

    ground = windowHeight/2;

    baseRoom = new Room(ground - 150, gray)

    //this line divides the lane from the idle resource gathering and fighter deployment visual sections
    stroke(0,255,0);
    strokeWeight(5);
    line(0, windowHeight/2, windowWidth, windowHeight/2);
}


function windowResize() {
    resizeCanvas(windowWidth, windowHeight)
}


//adding some background elements. since we'll likely have vertical scrolling, these have been set up as functions
function drawGround() {
    stroke(150, 150, 150)
    rect(0, ground, windowWidth, 5);
}

function drawSky() {
    fill(0, 213, 255)
    stroke(0,213,255)
    rect(0, 0, windowWidth, windowHeight/2)
}

function drawGround(){
    let grassWidth = 25;

    fill(0, 102, 51)
    rect(0, ground, windowWidth, grassWidth)
    fill(52, 25, 0)
    stroke(52,25,0)
    rect(0, ground + grassWidth, windowWidth, windowHeight/2)
}



class Room {
    constructor(y_position, colour) {
        //controls the Y, since they're stacked rooms the x doesn't need to change
        this.y_position = y_position;
        //might be good to have a visual element
        this.colour = colour
        //what the room does
        //this.type = type

        //room height
        this.height = 150;
        //room width
        this.width = 500;
        //where the rooms are drawn from, keep the same to stack vertically
        this.x_position = 50;
    }
    
    drawRoom() {
        stroke(50,50,50)
        strokeWeight(5)
        fill(this.colour)
        rect(this.x_position, this.y_position, this.width, this.height)
    }
}

function draw() {
    //background to illustrate canvas size
    background(50,50,50)
    windowResize();

    //added just some visual elements to test the canvas
    rect(150, 150, 100, 50)
    rect(350, 350, 100, 50)
    drawGround();
    drawSky();
    drawGround();
    resourceBar();


    baseRoom.drawRoom()
}


function resourceBar() {
    // Draw the resource bar background
    fill('white');
    rect(50, 25, 500, 60, 75);

    // Set stroke and text properties
    stroke('white');
    fill('black');

    // Display the images in the resource bar
    image(wire, 70, 32, 60, 40);  // Adjust x, y, width, and height as needed
    image(silver, 210, 32, 40, 40); // Adjust x, y, width, and height as needed
    image(gold, 370, 32, 40, 40);  // Adjust x, y, width, and height as needed

}
