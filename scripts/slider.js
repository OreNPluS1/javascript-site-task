// Get slider elements refrences
let sliders = document.getElementsByClassName("slider");
let sliderFillers = document.getElementsByClassName("range-filler");
let slidersValues = document.getElementsByClassName("slider-value");

// Display the default slider value
slidersValues[0].innerHTML = sliders[0].value;
slidersValues[1].innerHTML = sliders[1].value;
slidersValues[2].innerHTML = sliders[2].value;

// Calculate percentage value
const percentValue1 = sliders[0].max / 100;
const percentValue2 = sliders[2].max / 100;

// Set initial width
sliderFillers[0].style.width = `${sliders[0].value / percentValue1}%`;
sliderFillers[1].style.width = `${sliders[1].value / percentValue1}%`;
sliderFillers[2].style.width = `${sliders[2].value / percentValue2}%`;

// Update the current slider value (each time you drag the slider handle)
sliders[0].oninput = function() {
    currentValue = this.value;
    sliderFillers[0].style.width = `${currentValue / percentValue1}%`;
    slidersValues[0].innerHTML = currentValue;
    draw();
};

sliders[1].oninput = function() {
    currentValue = this.value;
    sliderFillers[1].style.width = `${currentValue / percentValue1}%`;
    slidersValues[1].innerHTML = currentValue;
    draw();
};

sliders[2].oninput = function() {
    currentValue = this.value;
    sliderFillers[2].style.width = `${currentValue / percentValue2}%`;
    slidersValues[2].innerHTML = currentValue;
    draw();
};