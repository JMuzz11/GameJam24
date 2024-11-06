let tank;
let sprites = [];
let tankCreated = false;

function drawTank() {
    if (mouseIsPressed && !tankCreated) {
        tank = new Sprite();
        tank.w = 100;
        tank.h = 100;
        tank.y = ground;
        tank.x = 550;
        tank.image = '../assets/tank.png';
        tank.scale = 2
        
        sprites.push(tank);

        tankCreated = true;
    } else if (!mouseIsPressed) {
        tankCreated = false;
    }
}

