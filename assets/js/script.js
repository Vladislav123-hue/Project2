const buttons = document.querySelectorAll(".btn");
const operationButtons = document.querySelectorAll(".op-btn");
const actionButtons = document.querySelectorAll(".ac-btn");
const openingBracket = document.getElementById("open-bracket");
const closingBracket = document.getElementById("close-bracket");
const comma = document.getElementById("comma");
const screen = document.getElementById("calculator-screen");
const squared = document.getElementById("squared");
const squaredRoot = document.getElementById("squared-root");

// ========== STATE ==========
let numberCollection = [];
let createdNumber = "";
let result = "";
let wrongSyntax = false;
let bracketsActive = false;

const operationButtonsList = Array.from(operationButtons).map(btn => btn.innerText);

// ========== BUTTON EVENTS ==========

// Number buttons
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.innerText;
    console.log(value, "numeral pressed");
    createdNumber += value;
    showInfoOnScreen();
  });
});

// Operation buttons
operationButtons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.innerText;
    console.log("Operation sign", value, "recognized");
    pushCreatedNumber();
    numberCollection.push(value);
    console.log("Current expression:", numberCollection);
    showInfoOnScreen();
  });
});

// Action buttons (=, C, backspace)
actionButtons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.innerText;
    console.log("Action sign", value, "recognized");
    handleAction(value);
    showInfoOnScreen();
  });
});

// Comma (decimal point)
comma.addEventListener("click", () => {
  console.log("comma pressed");
  if (!createdNumber.includes(".")) {
    createdNumber += ".";
    showInfoOnScreen();
  }
});

// Squared
squared.addEventListener("click", () => {
  console.log("squared pressed");
  applyMathOperation(val => val ** 2);
});

// Square Root
squaredRoot.addEventListener("click", () => {
  console.log("square root pressed");
  applyMathOperation(val => Math.sqrt(val));
});

// Opening Bracket
openingBracket.addEventListener("click", () => {
  if (createdNumber !== "") {
    pushCreatedNumber();
    numberCollection.push("*");
  }
  numberCollection.push("(");
  console.log("Opening bracket added:", numberCollection);
  showInfoOnScreen();
});

// Closing Bracket
closingBracket.addEventListener("click", () => {
  pushCreatedNumber();
  numberCollection.push(")");
  console.log("Closing bracket added:", numberCollection);
  showInfoOnScreen();
});

// ========== CORE FUNCTIONS ==========

function showInfoOnScreen() {
  screen.innerText = numberCollection.join("") + createdNumber;
}

function pushCreatedNumber() {
  if (createdNumber !== "") {
    numberCollection.push(createdNumber);
    console.log("Number", createdNumber, "added to expression");
    createdNumber = "";
  }
}

function handleAction(value) {
  switch (value) {
    case "=":
      pushCreatedNumber();
      calculate();
      break;
    case "c":
      numberCollection = [];
      createdNumber = "";
      wrongSyntax = false;
      break;
    case "--":
      if (createdNumber) {
        createdNumber = createdNumber.slice(0, -1);
      } else {
        numberCollection.pop();
      }
      break;
  }
}

function calculate() {
  const expression = numberCollection.join("");
  try {
    result = Function(`return ${expression}`)();
    console.log("Result:", result);
    numberCollection = [result.toString()];
    createdNumber = "";
    wrongSyntax = false;
  } catch (error) {
    console.error("Syntax error:", error);
    wrongSyntax = true;
    numberCollection = [];
    createdNumber = "Error (press C)";
  }
}

function applyMathOperation(operation) {
  let value = createdNumber || result || "0";
  let numericValue = parseFloat(value);
  if (isNaN(numericValue)) return;

  let calculated = operation(numericValue);
  createdNumber = calculated.toString();
  numberCollection = [];
  showInfoOnScreen();
}