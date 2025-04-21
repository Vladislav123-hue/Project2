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
    createdNumber += value;
    showInfoOnScreen();
  });
});

// Operation buttons
operationButtons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.innerText;
    pushCreatedNumber();
    numberCollection.push(value);
    showInfoOnScreen();
  });
});

// Action buttons (=, C, backspace)
actionButtons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.innerText;
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
  applyMathOperation(val => val ** 2);
});

// Square Root
squaredRoot.addEventListener("click", () => {
  applyMathOperation(val => Math.sqrt(val));
});

// Opening Bracket
openingBracket.addEventListener("click", () => {
  if (createdNumber !== "") {
    pushCreatedNumber();
    numberCollection.push("*");
  }
  numberCollection.push("(");
  showInfoOnScreen();
});

// Closing Bracket
closingBracket.addEventListener("click", () => {
  pushCreatedNumber();
  numberCollection.push(")");
  showInfoOnScreen();
});

// ========== CORE FUNCTIONS ==========

function showInfoOnScreen() {
  screen.innerText = numberCollection.join("") + createdNumber;
}

function pushCreatedNumber() {
  if (createdNumber !== "") {
    numberCollection.push(createdNumber);
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
    numberCollection = [];
    createdNumber = [result.toString()];
    wrongSyntax = false;
  } catch (error) {
    wrongSyntax = true;
    numberCollection = [];
    createdNumber = "Error (press C)";
  }
}

function applyMathOperation(operation) {
  let value = createdNumber;
  let numericValue = parseFloat(value);
  if (isNaN(numericValue)) return;

  let calculated = operation(numericValue);
  createdNumber = calculated.toString();
  showInfoOnScreen();
}