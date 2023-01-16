class Terrain {
    constructor() {
        
    }

    let numOfSegments = 7;
    let segment = canvas.width / numOfSegments;
    let points = [], calcedPoints;
    let variations = 0.30;
    let i;

    for (let i = 0; i < numOfSegments + 1; i++) {
        points.push(segment * i);
        points.push(canvas.height / 2.8 + canvas.height * variations * Math.random());
    }

    ctx.beginPath();
    ctx.moveTo(canvas.width, canvas.height);
    ctx.lineTo(0, canvas.height);

    calcedPoints = ctx.curve(points);

    ctx.closePath();
    ctx.fillStyle = "green";
    ctx.fill();
}

module.exports = Terrain;