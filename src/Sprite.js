//Sprite.js

//Sprites
let tank;


//Arrays
let tanks = [];


//Flags
let tankCreated = false;

//Sprite Images
let tankImg = '../assets/tank.png';


function drawTank() {
    if (mouseIsPressed && !tankCreated) {
        tank = new Sprite();
        tank.w = 25;
        tank.h = 25;
        tank.y = ground;
        tank.x = 550;
        tank.image = tankImg;
        tank.scale = 2
        tank.debug = true;
        
        tanks.push(tank);
        

        tankCreated = true;
    } else if (!mouseIsPressed) {
        tankCreated = false;
    }
}

