// Get slider elements refrences
let sliders = document.getElementsByClassName("slider");
let sliderFillers = document.getElementsByClassName("range-filler");
let slidersValues = document.getElementsByClassName("slider-value");

// Display the default slider value
try {
    slidersValues[0].innerHTML = sliders[0].value;
    slidersValues[1].innerHTML = sliders[1].value;
    slidersValues[2].innerHTML = sliders[2].value;
}
catch (err) {

};


// Set initial width
try {
    sliderFillers[0].style.width = `${sliders[0].value / (sliders[0].max / 100)}%`;
    sliderFillers[1].style.width = `${sliders[1].value / (sliders[1].max / 100)}%`;
    sliderFillers[2].style.width = `${sliders[2].value / (sliders[2].max / 100)}%`;
}
catch (err) {

};

// Update the current slider value (each time you drag the slider handle)
sliders[0].oninput = function () {
    currentValue = this.value;
    sliderFillers[0].style.width = `${currentValue / (sliders[0].max / 100)}%`;
    slidersValues[0].innerHTML = currentValue;
    try {
        draw();
    }
    catch (err) {

    };
};

sliders[1].oninput = function () {
    currentValue = this.value;
    sliderFillers[1].style.width = `${currentValue / (sliders[1].max / 100)}%`;
    slidersValues[1].innerHTML = currentValue;
    try {
        draw();
    }
    catch (err) {

    };
};

try {
    sliders[2].oninput = function () {
        currentValue = this.value;
        sliderFillers[2].style.width = `${currentValue / (sliders[2].max / 100)}%`;
        slidersValues[2].innerHTML = currentValue;
        draw();
    };
}
catch (err) {

}