import Bullet from "./bullet.js";

// need to add functions for position, speed, aimUp, aimDown, move...

class Tank {
    constructor(position, health, aim, speed) {
        // this.position = position;
        // this.health = 100;
        // this.speed = 5;
        // this.fire = fire;
        // this.aimUp = aimUp;
        // this.aimDown = aimDown;
        // this.move = move;
        
        addEventListener("keyDown", this.keyDown)
        addEventListener("keyUp", this.keyUp)
    }

    position(x, y) {

    }

    move(e) {
        // need to incorporate while (left border > this.position < right border)

        if (e.keyCode === '37') {
            // left
            this.position -= this.speed
        } else if (e.keyCode === '39') {
            // right
            this.position += this.speed
        };
    }

    aim(e) {
        // need to add angle variable
        if (e.keyCode === '38') {
            this.aim += 1;
        } else if (e.keyCode === '40') {
            this.aim -= 1;
        }
    }

    fire() {
        let angle = this.turret.angle;
    }

    takeDamage() {

    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(200, 200, 50, 0, 2 * Math.PI)
        ctx.fillStyle = "green";
        ctx.fill();
        ctx.stroke();
        
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
}




export default Tank;
