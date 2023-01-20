import Tank from "./tank.js"
import Bullet from "./bullet.js";
import Terrain from "./terrain.js";

class Game {
    constructor(ctx, options = {}) {
        this.ctx = ctx;
        this.canvas = options.canvas;
        this.playerTank = options.playerTank;
        this.bulletController = options.bulletController;
        this.bullet = options.bullet;
        this.terrain = options.terrain;
        this.start();        
    }

    start() {
        alert("Game started");
        // const playerTank = new Tank();
        console.log(this.playerTank);
        this.playerTank.draw(this.ctx);
    }




    // update() {
    //     // Tank.move();
    //     this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
    //     this.render()
    // }

    render() {
        this.playerTank.draw(this.ctx);
        const bullets = this.bulletController.bullets
        bullets.forEach(bullet => {
            bullet.draw(this.ctx)
        });
        this.terrain.draw(this.ctx)
    }

    // gameLoop() {
    //     // update game logic, render game on canvas, handle user input, move tanks, detect collisions, etc

    //     window.requestAnimationFrame(gameLoop);
    // };
}


export default Game;


// roadmap
// 1) Tank display ^
// 2) tank move ^
// 3) tank shoot 
    // add aim function which takes an argument (?) of angle
    // have angle adjust with up or down arrow keys
    // refactor code so that tank can shoot leftward or rightward depending on the angle
// 4) tank gravity 
// 5) tank takes damage 
// 6) tank aim 