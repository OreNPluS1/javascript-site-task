let fibonacciInput = document.getElementById("fibonacci-input");
let currentFibonacci = document.getElementById("current-fibonacci")
let fibonacciArray = [0, 1];

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
let slider2 = Number(sliders[1].value);
let triagnles = slider2;
let triagnlesCount = 0

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
    let slider1 = Number(sliders[0].value);
    slider2 = Number(sliders[1].value);
    triagnles = slider2;
    triagnlesCount = 0

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let width = slider1;
    let height = width * Math.cos(Math.PI / 6);

    ctx.beginPath();
    let topX = canvas.width / 2;
    let topY = 0;

    ctx.moveTo(topX, topY);

    topX = canvas.width / 2;
    topY = 0;
    let middleX = false;
    drawTrifocre(topX, topY, width, height);
    drawRecursiveTriforce(topX, topY, width, height, 14, true, middleX);

    // the outline
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#666666';
    ctx.stroke();
    ctx.closePath();
};

const drawRecursiveTriforce = function darwRecursiveTriforcePyramid(topX, topY, width, height, recursiveLevel, recursiveToggle, middleX = false) {
    let startingX = canvas.width / 2;

    if (middleX) {
        startingX = topX
    };

    for (let i = 0; i <= recursiveLevel; i++) {
        topX = startingX - (width * (i + 1));
        topY += height * 2;
        ctx.moveTo(topX, topY);
        drawTrifocre(topX, topY, width, height);
        if (((i % 2) === 0) && (i !== 0)) {
            topX += width * 2;
            ctx.moveTo(topX, topY);
            drawTrifocre(topX, topY, width, height);
            topX -= width * 2;
        };

        if (((i % 4) === 0) && (i !== 0)) {
            topY += height * 2;
            topX += width * 3;
            ctx.moveTo(topX, topY);
            drawTrifocre(topX, topY, width, height);

            topX -= width;
            topY += height * 2;
            ctx.moveTo(topX, topY);
            drawTrifocre(topX, topY, width, height);

            topX += width * 2;
            ctx.moveTo(topX, topY);
            drawTrifocre(topX, topY, width, height);

            topY -= height * 4;
        };

        if (((i % 10) === 0) && (i !== 0) && recursiveToggle) {
            middleX = true;
            topY += height * 2;
            topX += width * (i - 3);
            ctx.moveTo(topX, topY)
            drawTrifocre(topX, topY, width, height);
            drawRecursiveTriforce(topX, topY, width, height, 2, false, middleX);

            topX += width * (i - 2);
            ctx.moveTo(topX, topY);
            drawTrifocre(topX, topY, width, height);
            drawRecursiveTriforce(topX, topY, width, height, 2, false, middleX);

            topY -= height * 2;
            middleX = false;
        };

        topX = startingX + (width * (i + 1));
        ctx.moveTo(topX, topY);
        drawTrifocre(topX, topY, width, height);
        if (((i % 2) === 0) && (i !== 0)) {
            topX -= width * 2;
            ctx.moveTo(topX, topY);
            drawTrifocre(topX, topY, width, height, false);
            topX += width * 2;
        };

        if (((i % 4) === 0) && (i !== 0)) {
            topY += height * 2;
            topX -= width * 3;
            ctx.moveTo(topX, topY);
            drawTrifocre(topX, topY, width, height);

            topX += width;
            topY += height * 2;
            ctx.moveTo(topX, topY);
            drawTrifocre(topX, topY, width, height);

            topX -= width * 2;
            ctx.moveTo(topX, topY);
            drawTrifocre(topX, topY, width, height);

            topY -= height * 4;
        };
    };

    startingX = canvas.width / 2;
};

const drawTrifocre = function darwTriforcePyramid(topX, topY, width, height) {
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
};

const drawEquilateralTriangle = function canvasDrawEquilateralTriangle(topX, topY, width, height) {
    if (triagnlesCount <= triagnles) {
        // Line to the triangle base
        let x = topX - (width / 2);
        let y = topY + height;
        ctx.lineTo(x, y);

        // Draw triangle base
        x = x + width;
        ctx.lineTo(x, y);

        // Close the triangle
        ctx.lineTo(topX, topY);
        triagnlesCount += 1;
    }
};

darwTriangles();