//Example

// import example from './scripts/example'

import Tank from "./scripts/tank.js";
import Bullet from "./scripts/bullet.js";
import Terrain from "./scripts/terrain.js";
import Game from "./scripts/game.js";


document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    const width = canvas.width = 1280;
    const height = canvas.height = 720;

    const game = new Game(ctx);

});




// let score = 0
// let gameFrame = 0
// ctx.font = '50px Georgia';

// // Mouse Interactivity
// const mouse = {
//     x: canvas.width/2,
//     y: canvas.height/2,
//     click: false
// }


// let gameLoop = setInterval(function() {
//     //update game logic
//     // render game on canvas

// }, 1000/60)

// let tankX = 100; // initial x position
// let tankY = 100; // initial y position
// let tankSpeed = 5;

// let enemyX = 200;
// let enemyY = 200;





// document.addEventListener('DOMContentLoaded', () => {
//     const root = document.querySelector('#root')
//     //console.log('Example')

//     new Example(root);
// })



// Health Bar

// let health = 100;
// const healthBarWidth = 200;
// const healthBarHeight = 30;
// const x = width / 2 - healthBarWidth / 2;
// const y = height / 2 - healthBarHeight / 2;

// const healthBar = new HealthBar(x, y, healthBarWidth, healthBarHeight, health, "green");

// canvas.onclick = function() {
//     health -= 10;
//     healthBar.updateHealth(health);
// }

// const frame = function() {
//     context.clearRect(0, 0, width, height);
//     healthBar.show(context);
//     requestAnimationFrame(frame);
// }


// Example 
// document.addEventListener("DOMContentLoaded", () => {
//     const game = new Game();
//     const rootEl = document.querySelector(".ttt");
//     new View(game, rootEl);
// });