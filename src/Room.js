// Room.js

class Room {
    constructor(y_position, colour) {
        // Controls the Y position, since they're stacked rooms
        this.y_position = y_position;
        // The visual element of the room
        this.colour = colour;

        // Room height and width
        this.height = 150;
        this.width = 500;

        // X position for room placement
        this.x_position = 50;
    }
    
    drawRoom() {
        stroke(50, 50, 50);
        strokeWeight(5);
        fill(this.colour);
        rect(this.x_position, this.y_position, this.width, this.height);
    }
}
