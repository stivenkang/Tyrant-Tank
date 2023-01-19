import Bullet from "./bullet.js";
import BulletController from "./bulletController.js";

class Tank {
    constructor(health, speed, bulletController, aim, position = [20, 573]) {
        this.position = position;
        this.health = health || 100;
        this.speed = speed || 5;
        // this.shoot = shoot;
        this.aim = aim || 45;
        // this.move = move;
        this.x = position[0];
        this.y = position[1];
        this.bc = bulletController;
        this.radius = 20;
        
        // this.game = game;
        // this.bullets = [];
        // this.shooting = false;
        
        addEventListener("keydown", this.keyDown)
        addEventListener("keyup", this.keyUp)
    }

    // position() {

    // }

    move() {
        if (this.leftPressed) {
            this.x -= this.speed;
        }
        if (this.rightPressed) {
            this.x += this.speed;
        };
        this.position = Math.max(0, Math.min(this.position, this.width));
    }

    aim() {
        // need to add angle variable
        if (this.upPressed) {
            this.aim += 1;
        }
        if (this.downPressed) {
            this.aim -= 1;
        }
    }

    shoot() {
        if (this.spacePressed) {
            const speed = 15;
            const damage = 20
            const bulletX = this.x + this.radius;
            const bulletY = this.y;
            this.bc.shoot(bulletX, bulletY, speed)
            // this.shooting = true;
            // const bullet = new Bullet(this.game, this.x, this.y);
            // this.bullets.push(bullet);
        }
    }

    takeDamage() {

    }

    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI)
        ctx.fillStyle = "purple";
        ctx.fill();
        ctx.stroke();
        this.move();
        this.shoot();
    }

    keyDown = (e) => {
        e.preventDefault()
        console.log(e.code)
        if (e.code === "ArrowLeft") this.leftPressed = true;
        if (e.code === "ArrowRight") this.rightPressed = true;
        if (e.code === "ArrowUp") this.upPressed = true;
        if (e.code === "ArrowDown") this.downPressed = true;
        if (e.code === "Space") this.spacePressed = true;
    }
    
    keyUp = (e) => {
        if (e.code === "ArrowLeft") this.leftPressed = false;
        if (e.code === "ArrowRight") this.rightPressed = false;
        if (e.code === "ArrowUp") this.upPressed = false;
        if (e.code === "ArrowDown") this.downPressed = false;
        if (e.code === "Space") this.spacePressed = false;
    }
}




export default Tank;
