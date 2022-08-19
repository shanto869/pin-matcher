// step-1: generate the random number by using function
function generateRandomNumber(){
    const randomNumber = Math.round(Math.random() * 10000);
    return randomNumber;
}

// step-2: get the 4 digit pin by using function
function getPin(){
    const pin = generateRandomNumber();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
        return getPin();
    }
}

// step-3: add even listener for the generate pin button
document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getPin();

    // step-4: show the pin of the display field 
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
});

// step-5: add event listener for the calculator button
document.getElementById('calculator').addEventListener('click', function(event){
    // step-6: get the number from the calculator filed
    const number = event.target.innerText;

    // step-7: show the number of the type-number field
    const typeNumberField = document.getElementById('type-number');
    const previousTypeNumber = typeNumberField.value;

    if(isNaN(number)){
        if(number === 'C'){
            typeNumberField.value = ''
        }
        else if(number === '<'){
            const digits =  previousTypeNumber.split('');
            digits.pop();
            const remaining = digits.join('');
            typeNumberField.value = remaining;
        }
    }
    else{
        const newTypeNumber = previousTypeNumber + number;
        typeNumberField.value = newTypeNumber;
    }
});

// add even listener for the submit button
document.getElementById('verify-pin').addEventListener('click', function(){

    // get the display field value
    const disPlayPinField = document.getElementById('display-pin');
    const currentPin = disPlayPinField.value;

    // get the type Number field value
    const typeNumberField = document.getElementById('type-number');
    const typeNumber = typeNumberField.value;

    const pinSuccessMessage = document.getElementById('pin-success')
    const pinFailureMessage = document.getElementById('pin-failure')
    
    if(currentPin === typeNumber){
        pinSuccessMessage.style.display = 'block';
        pinFailureMessage.style.display = 'none';
    }
    else{
        pinFailureMessage.style.display = 'block';
        pinSuccessMessage.style.display = 'none'
    }
})
