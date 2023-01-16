const Bullet = require("./bullet");

// need to add functions for position, speed, aimUp, aimDown, move...

class Tank {
    constructor(position, health, aim, speed) {
        this.position = position;
        this.health = 100;
        this.speed = 5;
        this.fire = fire;
        this.aimUp = aimUp;
        this.aimDown = aimDown;
        this.move = move;
        
    }

    position() {

    }

    health() {

    }

    aim() {

    }

    speed() {

    }

    fire() {

    }

}



addEventListener("keyDown", this.keyDown)
addEventListener("keyUp", this.keyUp)


Tank.prototype.aimUp = function aimUp() {

}

Tank.prototype.aimDown = function aimDown() {

}

Tank.prototype.move = function move() {
    // need to incorporate while (left border > this.position < right border)

    if (e.keyCode === '37') {
        this.position -= this.speed
    } else if (e.keyCode === '39') {
        this.position += this.speed
    };
}

keyDown = (e) => {
    e.preventDefault()
    if (e.code === "37") this.leftPressed = true;
    if (e.code === "39") this.rightPressed = true;
    if (e.code === "38") this.upPressed = true;
    if (e.code === "40") this.downPressed = true;
    if (e.code === "Space") this.spacePressed = true;
}

keyUp = (e) => {
    if (e.code === "37") this.leftPressed = false;
    if (e.code === "39") this.rightPressed = false;
    if (e.code === "38") this.upPressed = false;
    if (e.code === "40") this.downPressed = false;
    if (e.code === "Space") this.spacePressed = false;
}





module.exports = Tank;

//create a tank class  that has a position, health, aim, speed, and fire function   (aim up, aim down, move, fire)                