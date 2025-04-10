const buttons = document.querySelectorAll(".btn");
const operationButtons = document.querySelectorAll(".op-btn")
const actionButtons = document.querySelectorAll(".ac-btn")
let screenContent = document.getElementById("calculator-screen");
let numberCollection = [];
let createdNumber = "";
let operationButtonsList = [];
let actionButtonsList = []
let finalResult = "";
operationButtons.forEach(button => {
    operationButtonsList.push(button.innerText);
})
actionButtons.forEach(button => {
    actionButtonsList.push(button.innerText);
})


buttons.forEach(button => {
    button.addEventListener("click", function () {
        let value = button.innerText; // Select the content of the button
        console.log("Numeral recognized")
        numberInput(value); // Sending in a method     
    });
});

operationButtons.forEach(button => {
    button.addEventListener("click", function () {

        let value = button.innerText;
        console.log("Operation sign " + value + " recognized");
        addNumbToCollection(value);
    });
});

actionButtons.forEach(button => {
    button.addEventListener("click", function () {
        let value = button.innerText;
        addNumbToCollection(value);


    });
});



function numberInput(value) {
    console.log(value, " numeral pressed");
    creatingNumber(value);
}

function operationSignInput(value) {
    console.log(value, " operationSign pressed");
}

function creatingNumber(value) {
    createdNumber += value;
}


function addNumbToCollection(value) {

    if (!actionButtonsList.includes(value)) {
        console.log("no action buttons pressed");
        if (createdNumber != "") {
            numberCollection.push(createdNumber);
            console.log("number " + createdNumber + " added to the collection");
        }

        if (operationButtonsList.includes(numberCollection[numberCollection.length - 1])) {
            numberCollection.length = numberCollection.length - 1;
            console.log("Operation sign repeated, list length " + numberCollection);
        }
        if (!operationButtonsList.includes(numberCollection[numberCollection.length - 1])) {
            numberCollection.push(value);
            console.log("Operation sign " + value + " added to the collection");
            createdNumber = "";

            console.log("list equal " + numberCollection);
        }
    }
    if (value == "=") {
        numberCollection.push(createdNumber);
        console.log("list equal " + numberCollection);
        calculate(numberCollection);
    }
    if (value == "c") {
        numberCollection.length = 0;
        createdNumber = "";
        console.log("list cleaned. List equals " + numberCollection);
    }
    if (value == "--") {
        createdNumber = createdNumber.slice(0,-1);
        console.log("Element removed. List equals " + numberCollection);

    }


}
function calculate(numberCollection) {
    let stringResult = "";
    for (i = 0; i < numberCollection.length; i++) {
        stringResult += numberCollection[i];
    }
    let result = Function("return " + stringResult)();
    console.log(result);
    createdNumber = result;
    numberCollection.length = 0;
    console.log("List cleaned");

}
