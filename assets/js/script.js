const buttons = document.querySelectorAll(".btn"); //all the buttons
const operationButtons = document.querySelectorAll(".op-btn") //operation buttons +-/*
const actionButtons = document.querySelectorAll(".ac-btn") // actionButtons =c--
const openingBracket = document.getElementById("open-bracket");
const closingBracket = document.getElementById("close-bracket");
const comma = document.getElementById("comma");
const screen = document.getElementById("calculator-screen");
let numberCollection = []; // collection of numbers created after pressing an op button
let createdNumber = ""; // a number being created and pushed in the collection after op sign is pressed
let operationButtonsList = []; // string list of operation signs (easier to operate with)
let bracketsActive = false;
let wrongSyntax = false;
const squared = document.getElementById("squared");
const squaredRoot = document.getElementById("squared-root");



operationButtons.forEach(button => {
    operationButtonsList.push(button.innerText); // contains operation sign string values 
})
actionButtons.forEach(button => {
    button.addEventListener("click", function () {

        let value = button.innerText; // Select the content of the button
        console.log("Action sign " + value + " recognized");
        executeTypedData(value);
    });
})

buttons.forEach(button => {
    button.addEventListener("click", function () {
        let value = button.innerText; // Select the content of the button
        console.log(value, " numeral pressed");
        creatingNumber(value);
        showInfoOnScreen();
    });
});

comma.addEventListener("click", function () { //comma
    console.log("comma pressed");
    createdNumber += ".";
    showInfoOnScreen();
})

squared.addEventListener("click", function () { //squared
    console.log("squared pressed");
    let createdNumberInt = parseInt(createdNumber) ** 2;
    createdNumber = createdNumberInt.toString();
    showInfoOnScreen();  
})

squaredRoot.addEventListener("click", function () { //squared
    console.log("squared pressed");
    let createdNumberInt = Math.sqrt(parseInt(createdNumber));
    createdNumber = createdNumberInt.toString();
    showInfoOnScreen();  
})

operationButtons.forEach(button => {
    button.addEventListener("click", function () {

        let value = button.innerText; // Select the content of the button
        console.log("Operation sign " + value + " recognized");
        savingNumberAfterPressingOpButtons(value);
        showInfoOnScreen();
    });
});

openingBracket.addEventListener("click", function () {
    console.log(bracketsActive + " bracket pairs active");
    if (createdNumber != "") {
        numberCollection.push(createdNumber);
        createdNumber = "";
        numberCollection.push("*");
    }
    numberCollection.push("(");
    console.log("numberCollection equals " + numberCollection);
    showInfoOnScreen();
})

closingBracket.addEventListener("click", function () {
    console.log(bracketsActive + " bracket pairs complete");
    numberCollection.push(createdNumber);
    createdNumber = "";
    numberCollection.push(")");
    console.log("numberCollection equals " + numberCollection);
    showInfoOnScreen();
})

function showInfoOnScreen() {
    if (wrongSyntax == true) {
        screen.innerText = numberCollection.join("") + createdNumber;
    }
    else screen.innerText = numberCollection.join("") + createdNumber;
}

function creatingNumber(value) {
    createdNumber += value;  //the methode that creates a number from pressed numerals
}

function savingNumberAfterPressingOpButtons(value) {

    numberCollection.push(createdNumber);
    console.log(createdNumber + " added to numberCollection");
    numberCollection.push(value);
    console.log("Operation sign " + value + " added to the numberCollection, which equals now  " + numberCollection);
    createdNumber = "";

}

function executeTypedData(value) {

    if (value == "=") {

        numberCollection.push(createdNumber);
        console.log("list equal " + numberCollection);
        createdNumber = "";
        calculate(numberCollection);

    }

    if (value == "c") {
        numberCollection.length = 0;
        createdNumber = "";
        console.log("list cleaned. List equals " + numberCollection);
    }

    if (value == "--") {
        if (createdNumber != "") {
            createdNumber = createdNumber.slice(0, -1)
            console.log("element erased and equals " + createdNumber)
            console.log("numberCollection equals " + numberCollection)

        }
        else if (createdNumber == "") {
            numberCollection = numberCollection.slice(0, -1)
            console.log("element erased, list equals " + numberCollection)
        }

    }
    showInfoOnScreen();
}

function calculate(numberCollection) {
    let stringResult = "";
    for (i = 0; i < numberCollection.length; i++) {
        stringResult += numberCollection[i];
    }
    try {
        let result = Function("return " + stringResult)();
        console.log(result);
        createdNumber = result;
        numberCollection.length = 0;
        numberCollection.push(createdNumber)
        createdNumber = "";
 
        console.log("List cleaned");
    } catch (error) {
        console.error("Expression wrong:", error);
        createdNumber = "Wrong syntax, press C";
        numberCollection.length = 0;
        numberCollection.push(createdNumber)
    }

}
