//Tank.js

//Tank Class to Manage Individual Sprites
class Tank {
    constructor(x, y, width, height, image) {
        this.sprite = new Sprite();
        this.sprite.w = width;
        this.sprite.h = height;
        this.sprite.x = x;
        this.sprite.y = y;
        this.sprite.image = image;
        this.sprite.scale = 2;
        this.sprite.debug = true;
    }

    //Methods
    //Add tank sprite to array or perform additional setup
    addTo(tanksArray) {
        tanksArray.push(this.sprite);
    }
}

class TankManager {
    constructor(tankImage) {
        this.tanks = []; //Array for instance storage
        this.tankImage = tankImage; //Image path for tanks
        this.tankCreated = false; //Flag to prevent multiple creations
        this.ground = 500; //May need adjusting
    }

    //Method for handling tank creation
    createTankOnClick() {
        if (mouseIsPressed && !this.tankCreated) {
            const newTank = new Tank(550, this.ground, 25, 25, this.tankImage);
            newTank.addTo(this.tanks); //Add to Tanks Array

            this.tankCreated = true; //Set flag to prevent additional creation
        } else if (!mouseIsPressed) {
            this.tankCreated = false; //Reset flag when mouse is released
        }
    }
}


