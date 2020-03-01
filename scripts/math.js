// function fun1(x) {return Math.sin(x);}
// function fun2(x) {return Math.cos(3 * x);}

const functionCalc = function functionGraphMath(x) {
    return Math.cos(x / 1.2);
};

function draw() {
    let canvas = document.getElementById("canvas");
    let canvasContext = canvas.getContext("2d");
    
    let axes = {};

    axes.x0 = .5 + .5 * canvas.width;   // x0 pixels from left to x=0
    axes.y0 = .5 + .5  * canvas.height; // y0 pixels from top to y=0
    axes.scale = 40;                    // 40 pixels from x=0 to x=1
    axes.doNegativeX = true;

    showAxes(canvasContext, axes);
    functionGraph(canvasContext, axes, functionCalc, "rgb(11,153,11)", 1); 
};

function functionGraph (canvasContext, axes, func, color, thick) {
    let x = 0;
    let y = 0;
    let amplitude = 40;
    let freq

    let x0 = axes.x0;
    let y0 = axes.y0;
    let scale = axes.scale;
    
    let iMax = Math.round(x0 / dx); // 63
    let iMin = axes.doNegativeX ? Math.round(-x0 / dx) : 0; // -63

    canvasContext.beginPath();
    canvasContext.lineWidth = thick;
    canvasContext.strokeStyle = color;

    for (let i = iMin; i <= iMax; i++) {
        xx = dx * i;
        yy = scale * func(xx / scale);

        if (i == iMin) {
            canvasContext.moveTo(x0 + xx, y0 - yy);
        } else {
            canvasContext.lineTo(x0 + xx, y0 - yy);
        };
    };
    
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