import Tank from "./tank.js";
import Bullet from "./bullet.js";

class Terrain {
    constructor(width, height, numSlopes, steepness) {
        this.width = width;
        this.height = height;
        this.numSlopes = 4;
        this.steepness = steepness;
        this.tank = new Tank();
        
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");

    }

    createLandscape() {
        // const HORIZON_DEPTH = 0.5;
        // const getRandomInt = function (min, max) {
        //     return Math.floor(Math.random() * (max - min + 1)) + min;
        // }

        // for (let i = 0; i <= this.numSlopes; i++) {
        //     // points.push(segment * i);
        //     // points.push(canvas.height / 2.8 + canvas.height * variations * Math.random());

        //     const arr = [];
        //     arr[i] = [width * (i / numSlopes), getRandomInt(height * HORIZON_DEPTH, height)];
        //     if (numSlopes === 0) {
        //         arr[1] = arr[0];
        //     }
        //     return arr;
        // }



        // let numOfSegments = 4;
        // let segment = canvas.width / numOfSegments;
        // let points = [], calcedPoints;
        // let variations = 0.30;
        // let i;

        // for (i = 0; i <= numOfSegments; i++) {
        //     points.push(segment * i);
        //     points.push(canvas.height / 2.8 + canvas.height * variations * Math.random());
        // };

        // ctx.beginPath();
        // ctx.moveTo(canvas.width, canvas.height);
        // ctx.lineTo(0, canvas.height);



        ctx.fillStyle = "green";
        ctx.beginPath();
        ctx.moveTo(0, 35);
        ctx.bezierCurveTo(0, 35, 640, 20, 1280, 35);
        ctx.lineTo(1280, 720);
        ctx.lineTo(0, 720);
        ctx.closePath();
        ctx.fill();


        // calcedPoints = ctx.curve(points);

        
    }

    render() {
        ctx.clearRect(0, 0, canvas.clientWidth, canvas.height);
        ctx.fillRect(tankX, tankY, 50, 30);
        // tank size set to 50px wide, 30px tall
        ctx.fillRect(enemyX, enemyY, 50, 30);
    }

    // need method to render terrain onto canvas
    // add game loop that updates position of tank and bullet and redraws the terrain
    // collision detection for bullet to tank/terrain



}


export default Terrain;




// Example from canvas demo
// document.addEventListener("DOMContentLoaded", function() {
//     const canvasEl = document.getElementById("canvas");
//     canvasEl.width = 500;
//     canvasEl.height = 500;

//     const ctx = canvasEl.getContext("2d");

//     ctx.fillStyle = "black";
//     ctx.fillRect(0, 0, 400, 400);

//     ctx.beginPath();
//     ctx.arc(250, 250, 80, 0, 2*Math.PI, true);
//     ctx.strokeStyle = "white";
//     ctx.lineWidth = 30;
//     ctx.stroke();
//     ctx.fillStyle = "blue";
//     ctx.fill();

//     // later written drawings in canvas JS is drawn OVER the first drawing (circle is drawn OVER the rectangle)
// })