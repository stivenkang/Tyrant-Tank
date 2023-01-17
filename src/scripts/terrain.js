const Tank = require("./tank");

class Terrain {
    constructor(width, height, numSlopes, steepness) {
        this.width = width;
        this.height = height;
        this.numSlopes = 4;
        this.steepness = steepness;
    }

    createLandscape() {
        const HORIZON_DEPTH = 0.5;
        const getRandomInt = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        for (let i = 0; i <= this.numSlopes; i++) {
            // points.push(segment * i);
            // points.push(canvas.height / 2.8 + canvas.height * variations * Math.random());

            const arr = [];
            arr[i] = [width * (i / numSlopes), getRandomInt(height * HORIZON_DEPTH, height)];
            if (numSlopes === 0) {
                arr[1] = arr[0];
            }
            return arr;
        }
    }

    // let numSlopes = 4;
    // let segment = canvas.width / numOfSegments;
    // let points = [], calcedPoints;
    // let variations = 0.30;
    // let i;

    // ctx.beginPath();
    // ctx.moveTo(canvas.width, canvas.height);
    // ctx.lineTo(0, canvas.height);

    // calcedPoints = ctx.curve(points);

    // ctx.closePath();
    // ctx.fillStyle = "green";
    // ctx.fill();
}

module.exports = Terrain;