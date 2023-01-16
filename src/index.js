//Example

// import example from './scripts/example'

const canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

// const width = canvas.width = 1280;
// const height = canvas.height = 720;

// let score = 0
// let gameFrame = 0
// ctx.font = '50px Georgia';

// // Mouse Interactivity
// const mouse = {
//     x: canvas.width/2,
//     y: canvas.height/2,
//     click: false
// }


let gameLoop = setInterval(function() {
    //update game logic
    // render game on canvas

}, 1000/60)

let tankX = 100; // initial x position
let tankY = 100; // initial y position
let tankSpeed = 5;

let enemyX = 200;
let enemyY = 200;

document.addEventListener("keydown", function(event) {
    if (event.code === "ArrowLeft") {
        tankX -= tankSpeed;
    } else if (event.code === "ArrowRight") {
        tankX += tankSpeed;
    } else if (event.code === "ArrowUp") {
        
    } else if (event.code === "ArrowDown") {

    }
});

function render() {
    ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
    ctx.fillRect(tankX, tankY, 50, 30);
    // tank size set to 50px wide, 30px tall
    ctx.fillRect(enemyX, enemyY, 50, 30);
}







// function gameLoop() {
//     // update game logic, render game on canvas, handle user input, move tanks, detect collisions, etc

//     requestAnimationFrame(gameLoop);
// }
// gameLoop()

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
