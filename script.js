const numberDisplay = document.getElementById('input-numbers');
const buttons = document.querySelectorAll('.button');

buttons.forEach((button) =>
  button.addEventListener('click', handleButtonPress)
);

function handleButtonPress(e) {
  const buttonType = e.target.classList;
  operatorActive = false;

  // Handle number buttons
  if (buttonType.contains('num')) {
    const number = e.target.id;

    // If previous input was operator, next input will reset number
    if (operatorActive) {
      numberDisplay.innerText = number.toString();
      operatorActive = false;
    }

    if (numberDisplay.innerText === '0') numberDisplay.innerText = '';
    if (numberDisplay.innerText.length < 10) numberDisplay.innerText += number.toString();
  }

  // Handle clear buttons
  if (buttonType.contains('delete')) numberDisplay.innerText = '0';
}

const calculator = {
  // Common operations
  add(a, b) {
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
  multiply(a, b) {
    return a * b;
  },
  divide(a, b) {
    return a / b;
  },

  // Handles operation calls
  operate(operator, a, b) {
    switch (operator) {
      case '+':
        return this.add(a, b);
      case '-':
        return this.subtract(a, b);
      case '*':
        return this.multiply(a, b);
      case '/':
        return this.divide(a, b);
      default:
        return 'Invalid Operator.';
    }
  },
};

console.log(calculator.operate('*', 5, 10));
