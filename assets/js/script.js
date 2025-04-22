// ========== GETTING ELEMENTS FROM THE HTML ==========
const buttons = document.querySelectorAll(".btn");               // Number buttons (0-9)
const operationButtons = document.querySelectorAll(".op-btn");  // Operation buttons (+, -, *, /)
const actionButtons = document.querySelectorAll(".ac-btn");     // Action buttons (=, C, backspace)
const openingBracket = document.getElementById("open-bracket"); // Opening bracket button
const closingBracket = document.getElementById("close-bracket");// Closing bracket button
const comma = document.getElementById("comma");                 // Decimal point button
const screen = document.getElementById("calculator-screen");    // Screen to display expression/result
const squared = document.getElementById("squared");             // Square button (x²)
const squaredRoot = document.getElementById("squared-root");   // Square root button (√x)

// ========== CALCULATOR STATE ==========
let numberCollection = [];  // Holds numbers and operators as they are entered
let createdNumber = "";     // Stores the current number being typed
let result = "";            // Stores the result after calculation
let wrongSyntax = false;    // Flag for invalid expressions
let bracketsActive = false; // Flag for bracket handling (currently unused)

const operationButtonsList = Array.from(operationButtons).map(btn => btn.innerText); // Just stores operation symbols

// ========== BUTTON EVENT HANDLERS ==========

// Number buttons (0-9)
buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.innerText;
    createdNumber += value;     // Add digit to current number
    showInfoOnScreen();         // Update the screen
  });
});

// Operator buttons (+, -, *, /)
operationButtons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.innerText;
    pushCreatedNumber();        // Move current number to numberCollection
    numberCollection.push(value); // Add operator to collection
    showInfoOnScreen();
  });
});

// Action buttons (=, C, backspace)
actionButtons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.innerText;
    handleAction(value);        // Handle logic for =, clear, backspace
    showInfoOnScreen();
  });
});

// Decimal point button
comma.addEventListener("click", () => {
  console.log("comma pressed");
  if (!createdNumber.includes(".")) {
    createdNumber += ".";      // Only allow one decimal point
    showInfoOnScreen();
  }
});

// Square (x²) button
squared.addEventListener("click", () => {
  applyMathOperation(val => val ** 2); // Square the current number
});

// Square root (√x) button
squaredRoot.addEventListener("click", () => {
  applyMathOperation(val => Math.sqrt(val)); // Apply square root
});

// Opening bracket button
openingBracket.addEventListener("click", () => {
  if (createdNumber !== "") {
    pushCreatedNumber();       // Add number to collection if one exists
    numberCollection.push("*"); // Implicit multiplication before bracket
  }
  numberCollection.push("("); // Add opening bracket
  showInfoOnScreen();
});

// Closing bracket button
closingBracket.addEventListener("click", () => {
  pushCreatedNumber();        // Make sure any number being typed is added first
  numberCollection.push(")"); // Add closing bracket
  showInfoOnScreen();
});

// ========== CORE LOGIC FUNCTIONS ==========

// Updates what's shown on the calculator screen
function showInfoOnScreen() {
  screen.innerText = numberCollection.join("") + createdNumber;
}

// Adds the currently typed number to the collection, then clears it
function pushCreatedNumber() {
  if (createdNumber !== "") {
    numberCollection.push(createdNumber);
    createdNumber = "";
  }
}

// Handles special actions: calculation, clear, and backspace
function handleAction(value) {
  switch (value) {
    case "=": // Calculate
      pushCreatedNumber();
      calculate();
      break;
    case "c": // Clear everything
      numberCollection = [];
      createdNumber = "";
      wrongSyntax = false;
      break;
    case "--": // Backspace
      if (createdNumber) {
        createdNumber = createdNumber.slice(0, -1); // Remove last digit
      } else {
        numberCollection.pop(); // Remove last item from expression
      }
      break;
  }
}

// Evaluate the full expression using JavaScript's Function constructor
function calculate() {
  const expression = numberCollection.join("");
  try {
    result = Function(`return ${expression}`)(); // Evaluate expression
    numberCollection = [];
    createdNumber = [result.toString()];         // Start new number with result
    wrongSyntax = false;
  } catch (error) {
    wrongSyntax = true;
    numberCollection = [];
    createdNumber = "Error (press C)";
  }
}

// Applies square or square root to the current number
function applyMathOperation(operation) {
  let value = createdNumber;
  let numericValue = parseFloat(value); // Convert string to number
  if (isNaN(numericValue)) return;      // Exit if invalid number

  let calculated = operation(numericValue); // Apply the passed operation
  createdNumber = calculated.toString();    // Convert result back to string
  showInfoOnScreen();
}
