let fibonacciInput = document.getElementById("fibonacci-input");
let currentFibonacci = document.getElementById("current-fibonacci")
let fibonacciArray = [0, 1];

let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

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

const darwTriangle = function canvasDrawEquilateralTriangle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let height = 100 * Math.cos(Math.PI / 6);

    ctx.beginPath();
    ctx.moveTo(150, 0);
    ctx.lineTo(250, 0);
    ctx.lineTo(200, 0 + height);
    ctx.closePath();

    // the outline
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#666666';
    ctx.stroke();

    // the fill color
    //ctx.fillStyle = "#FFCC00";
    //ctx.fill();
};

darwTriangle();