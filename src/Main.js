// sketch.js

"use strict";

let ground;
let gray = [75, 75, 75];  // Corrected to array format for P5 color
let baseRoom;
let UIBar;


function setup() {
    createCanvas(windowWidth, windowHeight);

    ground = windowHeight / 2;
    
    // Initialize baseRoom from Room.js
    UIBar = new GameUI()
    
    baseRoom = new Room(ground - 150, color(gray));
}

function windowResize() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    // Background to illustrate canvas size
    background(50, 50, 50);
    windowResize();

    // Draw two rectangles for testing visuals
    rect(150, 150, 100, 50);
    rect(350, 350, 100, 50);

    

    // Draw sky and ground from Scene.js
    fill(0, 213, 255);

    //These need to be fixed
    drawSky(ground);
    drawGround(ground);
    drawTank();

    //Draw UI Elements
    UIBar.drawResourceBar();

    // Draw the room instance
    baseRoom.drawRoom();
    
}
