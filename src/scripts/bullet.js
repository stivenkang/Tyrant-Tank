import BulletController from "./bulletController.js";

class Bullet {
    constructor(x, y, speedx, speedy, damage, game) {
        this.game = game;
        this.x = x;
        this.y = y;
        this.speedx = speedx;
        this.speedy = speedy;
        // this.radius = 5
        this.damage = damage || 20;
        this.width = 5;
        this.height = 5;
        this.color = "black"
        this.ctx = ctx;

        this.canvasWidth = 1280;
        this.canvasHeight = 720;

        // BulletController.call(this, options);

        this.markedForDeletion = false;
    }

    // update() {
    //     this.x += this.speed;
    //     if (this.x > this.canvasWidth) this.markedForDeletion = true;
    //     debugger
    //     // this.draw(this.ctx)
    // }

    draw(ctx) {
        this.x += this.speedx
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.width, this.height);
        // setInterval(this.update, 1000/60)

        if (this.x > this.canvasWidth) this.markedForDeletion = true;
    }
}



export default Bullet;