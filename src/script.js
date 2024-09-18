// Function to handle addition operation
function addition() {
    performOperation((a, b) => a + b);
}

// Function to handle subtract operation
function subtract() {
    performOperation((a, b) => a - b);
}

// Function to handle multiplication operation
function multiply() {
    performOperation((a, b) => a * b);
}

// Function to handle division operation
function divide() {
    performOperation((a, b) => a / b);
}


// Function to handle power operation
function power() {
    const base = Number(document.getElementById("firstnum").value);
    const exponent = Number(document.getElementById("secondnum").value);
    let result = 1;

    // Loop to calculate the power by multiplying the base `exponent` number of times
    for (let i = 0; i < exponent; i++) {
        result *= base; //Compounding multiplication
    }
    display(result);
}

// the "clear()" function does not call, I believe it may be taken
// Reset function to clear inputs and output
function reset() {
    document.getElementById("firstnum").value = "";
    document.getElementById("secondnum").value = "";
    document.getElementById("output").innerHTML = "";
}

// Helper function to perform any arithmetic operation
// Accepts a callback `operation` which performs the desired arithmetic
function performOperation(operation) {
    const num1 = parseFloat(document.getElementById("firstnum").value);
    const num2 = parseFloat(document.getElementById("secondnum").value);
    const result = operation(num1, num2);

    display(result);
}

// Function to display result in the output element
// Changes color of the output to red if the result is negative
function display(result){
    document.getElementById("output").innerHTML = result;
    if (result < 0){
        document.getElementById("output").style.color = "red";
    } else {
        document.getElementById("output").style.color = "black";
    }
}