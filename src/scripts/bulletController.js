import Bullet from "./bullet.js"

class BulletController {
    constructor(ctx) {
        this.ctx = ctx;
        this.bullets = [];
    }

    shoot(x, y, speed, damage, delay) {
        const bullet = new Bullet(x, y, speed, damage)
        if (this.bullets.length === 0) {
                this.bullets.push(bullet);
        }
        // this.draw(this.ctx, bullet);
        // bullet.draw(this.ctx)
    }

    draw(ctx, bullet) {
        if (this.bulletOffScreen(bullet)) {
            const index = this.bullets.indexOf(bullet);
            this.bullets.splice(index, 1);
        }
        this.bullet.shoot(ctx);
    }

    bulletOffScreen(bullet) {
        return bullet.x > bullet.canvasWidth
        // need to check for both directions
    }
}



export default BulletController;