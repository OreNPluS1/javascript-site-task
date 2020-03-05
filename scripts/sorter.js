let numbersForm = document.getElementById("numbers-form");
let submitForm = document.getElementById("numbers-submit");

let fieldValues = [];

// Check if n is a number
const numCheck = function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
};

// Track field values
const inputUpdate = function checkFields(inputElement) {
    currentValue = inputElement.value;
    fieldValues[Number(inputElement.id)] = numCheck(currentValue);
    checkValues();
};

// If all of them are true, dont disable the button, if one of the valuse is not vaild, disable
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
    let currentField = 0;

    // iterate over every input in the form
    for (const element of numbersForm.elements) {

        // numbersArray[Number(element.id)] = element.value;
        // when we reach the button theat means we finished the sorting
        if (element.type === "button") {
            break;
        };

        // If that's the first number, just add it to the array, else, start comparing
        currentField = Number(element.id)
        currentValue = Number(element.value)
        if (currentField === 0) {
            numbersArray[0] = currentValue;
            console.log(numbersArray);
        } else {
            // Iterate over the new array of numbers
            let i = 1;
            for (const value of numbersArray) {
                // Check if the current element value is bigger
                if (value < currentValue) {
                    if (i === 1) {
                        // If we are at the start of the array and true, just unshift
                        numbersArray.unshift(currentValue);
                        break;
                    };
                    // If not, but the current value is bigger, we want to insert
                    numbersArray.splice(i - 1, 0, currentValue);
                    break;
                } else if (value === currentValue) {
                    // If a value shows twice, just insert
                    if (i === 1) {
                        // *If we are at the start of the array and true, just unshift
                        numbersArray.unshift(currentValue);
                        break;
                    };
                    numbersArray.splice(i - 1, 0, currentValue);
                    break;
                } else if (i === numbersArray.length) {
                    // Check if we are at the end, if true, push
                    numbersArray.push(currentValue);
                    break;
                };

                // If we reached this point, add to i before we start again
                i += 1;
            };
        };
    };

    for (const element of numbersForm.elements) {
        // There we are changing the form values
        // If we reached the button, break
        if (element.type === "button") {
            break;
        };

        element.value = numbersArray[Number(element.id)];
    };

};


// Initialize inputs tracker
for (const element of numbersForm.elements) {
    if (element.type === "button") {
        break;
    };

    fieldValues[Number(element.id)] = numCheck(element.value);
};