const buttons = document.querySelectorAll(".btn"); //all the buttons
const operationButtons = document.querySelectorAll(".op-btn") //operation buttons +-/*
const actionButtons = document.querySelectorAll(".ac-btn") // actionButtons =c--
const openingBracket = document.getElementById("open-bracket");
const closingBracket = document.getElementById("close-bracket");
const comma = document.getElementById("comma");
let numberCollection = []; // collection of numbers created after pressing an op button
let createdNumber = ""; // a number being created and pushed in the collection after op sign is pressed
let operationButtonsList = []; // string list of operation signs (easier to operate with)
let actionButtonsList = [] // string list of action signs (easier to operate with)
let bracketsActive = false;

operationButtons.forEach(button => {
    operationButtonsList.push(button.innerText); // contains operation sign string values 
})
actionButtons.forEach(button => {
    actionButtonsList.push(button.innerText); // contains action sign string values 
})

buttons.forEach(button => {
    button.addEventListener("click", function () {
        let value = button.innerText; // Select the content of the button
        console.log(value, " numeral pressed");
        creatingNumber(value);
    });
});

comma.addEventListener("click", function () { //comma
    console.log("comma pressed");
    createdNumber += ".";
})

operationButtons.forEach(button => {
    button.addEventListener("click", function () {

        let value = button.innerText; // Select the content of the button
        console.log("Operation sign " + value + " recognized");
        savingNumberAfterPressingOpButtons(value);
    });
});


actionButtons.forEach(button => {
    button.addEventListener("click", function () {
        let value = button.innerText; // Select the content of the button
        executeTypedData(value);
    });
});

openingBracket.addEventListener("click", function () {
    console.log(bracketsActive + " bracket pairs active");
    numberCollection.push("(");
    console.log("numberCollection equals " + numberCollection);
})

closingBracket.addEventListener("click", function () {
    console.log(bracketsActive + " bracket pairs complete");
    numberCollection.push(createdNumber);
    createdNumber = "";
    numberCollection.push(")");
    console.log("numberCollection equals " + numberCollection);
})



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
}
if (value == "c") {
    numberCollection.length = 0;
    createdNumber = "";
    console.log("list cleaned. List equals " + numberCollection);
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
        createdNumber = "";
        numberCollection.length = 0;
        console.log("List cleaned");
    } catch (error) {
        console.error("Expression wrong:", error);
    }

}
