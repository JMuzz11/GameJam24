// Scene.js

function drawSky(ground) {
    fill(0, 213, 255);
    stroke(0, 213, 255);
    rect(0, 0, windowWidth, ground);
}

function drawGround(ground) {
    let grassWidth = 25;

    fill(0, 102, 51);
    rect(0, ground, windowWidth, grassWidth);
    fill(52, 25, 0);
    stroke(52, 25, 0);
    rect(0, ground + grassWidth, windowWidth, windowHeight / 2);
}
