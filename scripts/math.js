// Cos function
const cosFunc = function cosFunctionCalculator(amplitude, x, fWidth, freq) {
    return amplitude * Math.cos(x / fWidth * freq);
};

let canvas = document.getElementById("canvas");
let canvasContext = canvas.getContext("2d");

// Main canvas drawer function
function draw() {
    // Clear the canvas first
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);

    // Get slider values
    let fWidth = sliders[0].value;
    let fHeight = sliders[1].value;
    let waves = sliders[2].value;
    
    // Set axses and function propertis
    let axes = {};
    let propertis = {};

    propertis.freq = waves;
    propertis.amplitude = fHeight;
    propertis.fWidth = fWidth;

    axes.x0 = .5 + .5 * canvas.width;   // x0 pixels from left to x=0
    axes.y0 = .5 + .5  * canvas.height; // y0 pixels from top to y=0
    axes.scale = 1;                     // 40 pixels from x=0 to x=1
    axes.doNegativeX = true;

    showAxes(canvasContext, axes); // Draw the axes
    functionGraph(canvasContext, axes, propertis, "rgb(11,153,11)", 1); // Draw the function
};

function functionGraph (canvasContext, axes, propertis, color, thick) {
    // Set function values
    let x = 1;
    let y = 1;
    let amplitude = propertis.amplitude;
    let fWidth = propertis.fWidth;
    let freq = propertis.freq / 100;

    let x0 = axes.x0;
    let y0 = axes.y0;

    // Scaling setting
    let scale = axes.scale;
    let iMax = Math.round(x0 / scale);
    let iMin = axes.doNegativeX ? Math.round(-x0 / scale) : 0;

    // Initialize the function draw
    canvasContext.beginPath();
    canvasContext.lineWidth = thick;
    canvasContext.strokeStyle = color;

    // Create the function path
    for (let i = iMin; i <= iMax; i++) {
        // Each iteration, set x and y
        x = scale * i;
        y = cosFunc(amplitude, x, fWidth, freq);

        // move to the next point
        if (i == iMin) {
            canvasContext.moveTo(x0 + x, y0 - y);
        } else {
            canvasContext.lineTo(x0 + x, y0 - y);
        };
    };
    
    // When finished, draw the function on the canvas
    canvasContext.stroke();
};

function showAxes(canvasContext, axes) {
    let x0 = axes.x0;
    let width = canvasContext.canvas.width;

    let y0 = axes.y0;
    let height = canvasContext.canvas.height;

    let xmin = axes.doNegativeX ? 0 : x0;
    canvasContext.beginPath();
    canvasContext.strokeStyle = "rgb(128,128,128)"; 
    
    // X axis
    canvasContext.moveTo(xmin,y0); 
    canvasContext.lineTo(width,y0);

    // Y axis
    canvasContext.moveTo(x0,0);
    canvasContext.lineTo(x0,height);
    
    canvasContext.stroke();
};