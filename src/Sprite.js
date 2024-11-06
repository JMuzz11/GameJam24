let tank;
let sprites = [];
let tankCreated = false;

function drawTank() {
    if (mouseIsPressed && !tankCreated) {
        tank = new Sprite();
        tank.w = 25;
        tank.h = 25;
        tank.y = ground;
        tank.x = 550;
        tank.image = '../assets/tank.png';
        tank.scale = 2
        tank.debug = true;
        
        sprites.push(tank);

        tankCreated = true;
    } else if (!mouseIsPressed) {
        tankCreated = false;
    }
}

