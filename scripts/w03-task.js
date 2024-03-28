/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */

function add (number1, number2) {
    return number1 + number2;
}


function addNumbers () {

    let addNumber1 = Number(document.querySelector("#add1").value);
    let addNumber2 = Number(document.querySelector("#add2").value);
    
    document.querySelector("#sum").value = add(addNumber1, addNumber2);
}

document.querySelector("#addNumbers").addEventListener("click", addNumbers)


/* Function Expression - Subtract Numbers */

const subtract = function (number1, number2) {
    return number1 - number2;
}


const subtractNumbers = function () {

    let subtractNumber1 = Number(document.querySelector("#subtract1").value);
    let subtractNumber2 = Number(document.querySelector("#subtract2").value);
    
    document.querySelector("#difference").value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector("#subtractNumbers").addEventListener("click", subtractNumbers)


/* Arrow Function - Multiply Numbers */

const multiply = (number1, number2) => {
    return number1 * number2;
}


const multiplyNumbers = () => {

    let multiplyNumber1 = Number(document.querySelector("#factor1").value);
    let multiplyNumber2 = Number(document.querySelector("#factor2").value);
    
    document.querySelector("#product").value = multiply(multiplyNumber1, multiplyNumber2);
}

document.querySelector("#multiplyNumbers").addEventListener("click", multiplyNumbers)

/* Open Function Use - Divide Numbers */

const divide = (number1, number2) => {
    return number1 / number2;
}


function divideNumbers () {

    let divideNumber1 = Number(document.querySelector("#dividend").value);
    let divideNumber2 = Number(document.querySelector("#divisor").value);
    
    document.querySelector("#quotient").value = divide(divideNumber1, divideNumber2);
}

document.querySelector("#divideNumbers").addEventListener("click", divideNumbers)

/* Decision Structure */

const getTotalDue = () => {

    let subtotal = parseFloat(document.getElementById("subtotal").value);
    
    let numberValidated;
    let applyDiscount;

    let member = document.getElementById("member").checked;

    if (!isNaN(subtotal) && subtotal !== null && subtotal !== 0) {

        numberValidated = true;
        applyDiscount = member ? 0.8 * subtotal : subtotal;
        document.getElementById("total").textContent = `$${applyDiscount.toFixed(2)}`;

    } else {
        alert("Your subtotal is not valid");
        numberValidated = false;
    }

};

document.querySelector("#getTotal").addEventListener("click", getTotalDue)


/* ARRAY METHODS - Functional Programming */

let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */
document.getElementById("array").textContent = numbersArray;
    
/* Output Odds Only Array */
let oddNumbers = numbersArray.filter(num => num % 2 !== 0);
document.getElementById("odds").textContent = oddNumbers;

/* Output Evens Only Array */
let evenNumbers = numbersArray.filter(num => num % 2 === 0);
document.getElementById("evens").textContent = evenNumbers;

/* Output Sum of Org. Array */
let sumOfArray = numbersArray.reduce((acc, curr) => acc + curr, 0);
document.getElementById("sumOfArray").textContent = sumOfArray;

/* Output Multiplied by 2 Array */
let multipliedArray = numbersArray.map(num => num * 2);
document.getElementById("multiplied").textContent = multipliedArray;

/* Output Sum of Multiplied by 2 Array */
let sumOfMultiplied = numbersArray.map(num => num * 2).reduce((acc, curr) => acc + curr, 0);
document.getElementById("sumOfMultiplied").textContent = sumOfMultiplied;

