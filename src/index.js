//Example

// import example from './scripts/example'

let canvas = document.getElementById("game-canvas");
let ctx = canvas.getContext("2d")

function gameLoop() {
    // update game logic, render game on canvas, handle user input, move tanks, detect collisions, etc

    requestAnimationFrame(gameLoop);
}
gameLoop()

document.addEventListener('DOMContentLoaded', () => {
    const root = document.querySelector('#root')
    //console.log('Example')

    new Example(root);
})