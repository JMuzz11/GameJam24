//UI.js
//Controls UI elements of the game

//Resources
let wire, silver, gold;
let backgroundColour;
let fillColour;

//quantity variables
let wireQuantity = 0;
let silverQuantity = 0;
let goldQuantity = 0;


function preload(){
    wire = loadImage('..//assets/wire.png')
    silver = loadImage('../assets/silver_bar.png')
    gold = loadImage('..//assets/gold_bar.png')
    backgroundColour = [155,155,155];
    fillColour = [255,255,255];
}

class GameUI {
    constructor(
		backgroundColour = [155, 155, 155], // Default background color
		fillColour = [100, 100, 100],             // Default fill color
		wireQuantity = 0,
		silverQuantity = 0,
		goldQuantity = 0
	) {
		this.backgroundColour = backgroundColour;
		this.fillColour = fillColour;
		this.wireQuantity = wireQuantity;
		this.silverQuantity = silverQuantity;
		this.goldQuantity = goldQuantity;
	}

    drawResourceBar() {
		// Draw the resource bar background
		fill(this.backgroundColour);
		rect(50, 25, 500, 60, 75);

		// Set stroke and text properties
		stroke('white');
		fill(this.fillColour);

		// Display the images in the resource bar
		image(wire, 70, 32, 60, 40); // Adjust x, y, width, and height as needed
		// Display quantities
		text(`x${this.wireQuantity}`, 140, 50);

		image(silver, 210, 32, 40, 40);
		text(`x${this.silverQuantity}`, 280, 50);

		image(gold, 370, 32, 40, 40);
		text(`x${this.goldQuantity}`, 440, 50);
	}
}
    




