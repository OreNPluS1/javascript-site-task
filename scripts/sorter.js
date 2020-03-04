/*
[...form.elements].forEach((input) => {
  console.log(input);
});
*/
let numbersForm = document.getElementById("numbers-form");
let submitForm = document.getElementById("numbers-submit");

let fieldValues = [];

const numCheck = function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

const inputUpdate = function checkFields(inputElement) {
    console.log(inputElement);
    currentValue = inputElement.value;
    fieldValues[Number(inputElement.id)] = numCheck(currentValue);
    checkValues();
};

const checkValues = function checkIfAllTrue() {    
    for (const i of fieldValues) {
        if (!i) {
            submitForm.disabled = true;
            return false;
        };
    };

    submitForm.disabled = false;
    return true
};

const sortValues = function sortFormValues() {
    let numbersArray = [];
    let sortedNumbersArray = [];

    // iterate over every input in the form
    for (const element of numbersForm.elements) {
        // numbersArray[Number(element.id)] = element.value;
        // when we reach the button theat means we finished the sorting
        if (element.type === "button") {
            break;
        };

        // If that's the first number, just add it to the array, else, start comparing
        currentField = Number(element.id)
        if (currentField === 0) {
            numbersArray[0] = element.value;
        } else {
            // Iterate over the new array of numbers
            let i = 0
            for (const value of numbersArray) {
                // Check if the current element value is bigger
                if (value < element.value) {
                    // continue work from this point
                }
            };
        };

    };

};

for (const element of numbersForm.elements) {
    if (element.type === "button") {
        break;
    };

    fieldValues[Number(element.id)] = numCheck(element.value);
};