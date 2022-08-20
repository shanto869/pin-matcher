// generate a random number by using function
function generatePin() {
    const randomNumber = Math.round(Math.random() * 10000);
    return randomNumber;
}

// get 4 digit pin number by using function
function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
    else {
        return getPin();
    }
}

// add event listener for generate pin button
document.getElementById('generate-pin').addEventListener('click', function () {
    const pin = getPin();

    // set the pin of the display-pin field
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})

// add event listener for the calculator 
document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;

    // get the type number field value
    const typeNumberField = document.getElementById('type-number');
    const previousTypedNumber = typeNumberField.value;

    // check is number
    if (isNaN(number)) {
        if (number === 'C') {
            typeNumberField.value = '';
        }
        else if (number === '<') {
            const digits = previousTypedNumber.split('');
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumberField.value = remainingDigits;
        }
    }
    else {
        const newNumber = previousTypedNumber + number;
        typeNumberField.value = newNumber;
    }
})

// add event listener for the submit button
document.getElementById('verify-pin').addEventListener('click', function () {

    // get the value of display pin field
    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    // get the value of type number field
    const typeNumberField = document.getElementById('type-number');
    const typeNumber = typeNumberField.value;

    // get message element
    const pinSuccessMessage = document.getElementById('pin-success');
    const pinFailureMessage = document.getElementById('pin-failure');

    // verify pin 
    if (currentPin === typeNumber) {
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
    }
    else {
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none';
    }
})