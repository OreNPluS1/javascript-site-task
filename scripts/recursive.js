let fibonacciInput = document.getElementById("fibonacci-input");
let currentFibonacci = document.getElementById("current-fibonacci")
let fibonacciArray = [0, 1];

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let slider1 = Number(sliders[0].value);

const fibonacciCalc = function fibonacciFunction() {
    fibonacciArray = [0, 1];
    // If array length is increased, add to the array
    if (fibonacciArray.length < fibonacciInput.value) {
        for (i = fibonacciArray.length; i <= fibonacciInput.value; i++) {
            fibonacciArray[i] = fibonacciArray[i - 2] + fibonacciArray[i - 1];
            console.log(i);
        };
        // but if array length is decreased, substruct from the array
    } else if (fibonacciInput.value < fibonacciArray.length) {
        fibonacciArray.slice(0, fibonacciInput.value);
    };

    currentFibonacci.innerHTML = fibonacciArray.join(', ')
    console.log(fibonacciArray);
};

const darwTriangles = function canvasDrawTrianglePyramid() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let width = 50;
    let height = width * Math.cos(Math.PI / 6);

    ctx.beginPath();
    let topX = canvas.width / 2;
    let topY = 0

    ctx.moveTo(topX, topY);
    triagnles = 3;
    
    drawTrifocre(topX, topY, width, height, true);


    /*
    topX -= width;
    topY += height * 2;
    ctx.moveTo(topX, topY);
    drawTrifocre(topX, topY, width, height);

    topX += width * 2;
    ctx.moveTo(topX, topY);
    drawTrifocre(topX, topY, width, height);
    */

    

    // the outline
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#666666';
    ctx.stroke();
    ctx.closePath();

    // the fill color
    //ctx.fillStyle = "#FFCC00";
    //ctx.fill();
};

const drawTrifocre = function darwTriforcePyramid(topX, topY, width, height, recursive) {
    // draw top triangle
    drawEquilateralTriangle(topX, topY, width, height);

    // Create bottom triangles
    topX -= width / 2;
    topY += height;
    ctx.moveTo(topX, topY);
    drawEquilateralTriangle(topX, topY, width, height);
    
    topX += width;
    ctx.moveTo(topX, topY);
    drawEquilateralTriangle(topX, topY, width, height);

    if (recursive) {
        topX = canvas.width / 2;
        topY = 0
        for (i = 0; i <= 3; i ++) {
            topX -= width;
            console.log(height)
            topY += height * 2;
            ctx.moveTo(topX, topY);
            drawTrifocre(topX, topY, width, height, false);
        
            topX += width * (2 + i);
            ctx.moveTo(topX, topY);
            drawTrifocre(topX, topY, width, height, false);
            topX -= width * (i + 2);
        };
    };

};

const drawEquilateralTriangle = function canvasDrawEquilateralTriangle(topX, topY, width, height) {
    // Line to the triangle base
    let x = topX - (width / 2);
    let y = topY + height;
    ctx.lineTo(x, y);

    // Draw triangle base
    x = x + width;
    ctx.lineTo(x, y);

    // Close the triangle
    ctx.lineTo(topX, topY);
};

darwTriangles();