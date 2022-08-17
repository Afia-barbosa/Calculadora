const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operator]");
const equalsButton = document.querySelectorAll("[data-equals]");
const deleteButton = document.querySelectorAll("[data-delete]");
const allClearButton = document.querySelectorAll("[data-all-clear]");
const previuosOperandTextElement = document.querySelectorAll(
  "[data-previuos-operand]"
);
const currentOperandTextElement = document.querySelectorAll(
  "[data-current-operand]"
);

class Calculator {
  constructor(previuosOperandTextElement, currentOperandTextElement) {
    this.previuosOperandTextElement = previuosOperandTextElement;
    this.currentOperandTextElement = currentOperandTextElement;
    this.clear();
  }

  formatDisplayNumber(number) {
    const StringNumber = number.toString();

    const IntegerDigits = parseFloat(StringNumber.split(".")[0]);
    const decimalDigits = StringNumber.split("."[1]);

    let IntegerDisplay;

    if (is(IntegerDigits)) {
      IntegerDisplay = "";
    } else {
      IntegerDisplay = IntegerDigits.toLocaleString("en", {});
    }

    if (decimalDigits != null) {
      return `${IntegerDisplay}.${decimalDigits}`;
    } else {
      return IntegerDisplay;
    }
  }

  delete() {
    this.currentOperand = this.currentOperand.toString().slice(0, -1);
  }

  calculate() {
    let result;

    const _previousOpernd = parseFloat(this.previuosOperand);
    const _currentOperand = parseFloat(this.currentOperand);

    if (isNaN(_previousOpernd) || isNaN(_currentOperand)) return;

    switch (this.operation) {
      case "+":
        result = _previousOpernd + _currentOperand;
        break;
      case "-":
        result = _previousOpernd - _currentOperand;
        break;
      case "÷":
        result = _previousOpernd / _currentOperand;
        break;
      case "*":
        result = _previousOpernd * _currentOperand;
        break;
      default:
        return;

        this.currentOperand = result;
        this.operation = undefined;
        this.previuosOperand = "";
    }
  }

  chooseOperation(operation) {
    if (this.currentOperand == "") return;

    if ((this.previuosOperand = !"")) {
      this.calculate();
    }
    this.operation = operation;

    this.previuosOperand = this.currentOperand;
    this.currentOperand = "";
  }

  appendNumber(number) {
    if (this.currentOperand.includes(".") && number == ".") return;

    this.currentOperand = `${this.currentOperand}${number.toString()}`;
  }

  clear() {
    this.currentOperand = "";
    this.previuosOperand = "";
    this.operator = undefined;
  }

  updateDisplay() {
    this.previuosOperandTextElement.innerText = `$${this.formatDisplayNumber(
      this.previuosOperand
    )}${this.operation || ""}`;
    this.currentOperandTextElement.innerText = this.formatDisplayNumber(
      this.currentOperand
    );
  }
}

const calculator = new Calculator(
  previuosOperandTextElement,
  currentOperandTextElement
);

for (const numberButtons of numberButtons) {
  numberButtons.addEventListener("click", () => {
    calculator.appendNumber(numberButtons.innerText);
    calculator.updateDisplay();
  });
}

for (const operationButtons of operationButtons) {
  operationButton.addEventListener("click", () => {
    calculator.chooseOperation(operationButtons.innerText);
    this.updateDisplay();
  });
}

allClearButton.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

equalsButton.addEventListener("click", () => {
  calculator.calculate();
  calculator.updateDisplay();
});

deleteButton.addEventListener("click", () => {
  calculate.delete();
  this.updateDisplay();
});
