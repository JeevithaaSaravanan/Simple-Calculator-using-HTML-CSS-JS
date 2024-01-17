let currentInput = '0';

function clearDisplay() {
  currentInput = '0';
  updateDisplay();
}

function appendToDisplay(value) {
  currentInput === '0' ? currentInput = value : currentInput += value;
  updateDisplay();
}

function operate(operator) {
  currentInput += operator;
  updateDisplay();
}

function calculate() {
  try {
    currentInput = eval(currentInput).toString();
  } catch (error) {
    currentInput = 'Error';
  }
  updateDisplay();
}

function updateDisplay() {
  document.getElementById('display').innerText = currentInput;
}
