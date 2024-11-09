// Main.js

"use strict";

let ground;
let gray = [75, 75, 75];  // Corrected to array format for P5 color
let baseRoom;
let UIBar;
let tankManager;


function setup() {
    createCanvas(windowWidth, windowHeight);

    ground = windowHeight / 2;
    
    // Initialize baseRoom from Room.js
    UIBar = new GameUI()    
    baseRoom = new Room(ground - 150, color(gray));

    // Initialize tankManager, with path to tank image
    tankManager = new TankManager('../assets/tank.png');
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

    //Use TankManager to create tanks when mouse is clicked    
    tankManager.createTankOnClick();

    //Draw UI Elements
    UIBar.drawResourceBar();

    // Draw the room instance
    baseRoom.drawRoom();
    
}
