import Tank from "./tank.js"

class Game {
    constructor(ctx) {
        this.ctx = ctx;
        this.start();
    }

    start() {
        alert("Game started");
        const playerTank = new Tank();
        playerTank.draw(this.ctx);
    }


    gameLoop() {
        // update game logic, render game on canvas, handle user input, move tanks, detect collisions, etc

        requestAnimationFrame(gameLoop);
    };
}


export default Game;


// roadmap
// 1) Tank display
// 2) tank move
// 3) tank shoot
// 4) tank gravity
// 5) tank takes damage
// 6) tank aim