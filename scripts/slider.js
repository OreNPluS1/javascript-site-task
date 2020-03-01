let sliders = document.getElementsByClassName("slider");
let sliderFillers = document.getElementsByClassName("range-filler");
let slidersValues = document.getElementsByClassName("slider-value");

// Display the default slider value
slidersValues[0].innerHTML = sliders[0].value;
slidersValues[1].innerHTML = sliders[1].value;
slidersValues[2].innerHTML = sliders[2].value;

// Update the current slider value (each time you drag the slider handle)
sliders[0].oninput = function() {
    currentValue = this.value;
    sliderFillers[0].style.width = `${currentValue / 5}vw`;
    slidersValues[0].innerHTML = currentValue
};

sliders[1].oninput = function() {
    currentValue = this.value;
    sliderFillers[1].style.width = `${currentValue / 5}vw`;
    slidersValues[1].innerHTML = currentValue
};

sliders[2].oninput = function() {
    currentValue = this.value;
    sliderFillers[2].style.width = `${currentValue / 5}vw`;
    slidersValues[2].innerHTML = currentValue
};