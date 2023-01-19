import Tank from "./scripts/tank.js";
import Bullet from "./scripts/bullet.js";
import Terrain from "./scripts/terrain.js";
import Game from "./scripts/game.js";
import BulletController from "./scripts/bulletController.js";


// document.addEventListener("DOMContentLoaded", function() {
//     const canvas = document.getElementById("canvas");
//     let ctx = canvas.getContext("2d");
//     const width = canvas.width = 1280;
//     const height = canvas.height = 720;

//     const game = new Game(ctx);
//     requestAnimationFrame(() => game.render());

// });


// all code in index.js should go inside of addEventListener
// need to eventually refactor code to use DOMContentLoaded instead of below


const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const width = canvas.width = 1280;
const height = canvas.height = 720;
const bc = new BulletController(ctx);
const tank = new Tank(100, 5, bc);
const bullet = new Bullet(tank.x, tank.y, 10, 10, 20);
const terrain = new Terrain();


const game = new Game(ctx, {
    canvas: canvas,
    playerTank: tank,
    bulletController: bc,
    bullet: bullet,
    terrain: terrain
});


function update() {
    ctx.clearRect(0, 0, width, height)
    game.render()
}

setInterval(update, 1000/60);









// let score = 0
// let gameFrame = 0
// ctx.font = '50px Georgia';

// // Mouse Interactivity
// const mouse = {
//     x: canvas.width/2,
//     y: canvas.height/2,
//     click: false
// }




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


// class View {
//     constructor(game, el) {
//       this.game = game;
//       this.el = el;
//       this.setupBoard()
//       this.bindEvents()
//       this.handleClick = this.handleClick.bind(this)
//     }
  
//     setupBoard() {
//       const ul = document.createElement("ul");
//       for (let row = 0; row < 3; row++) {
//         for (let col = 0; col < 3; col++) {
//           const li = document.createElement("li");
//           li.dataset.pos = JSON.stringify([row, col])
//           ul.append(li);
//         }
//       }
//       this.el.append(ul)
//     }
//     bindEvents() {}
//     handleClick(e) {}
//     makeMove(square) {}
//   }