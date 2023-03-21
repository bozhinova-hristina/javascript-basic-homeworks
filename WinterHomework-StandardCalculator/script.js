console.log('=======working=======')


// Standard Calculator
// Now it’s time for some more challenges! Create a web calculator with all the standard features. 
// -	The calculator should have buttons for the numbers to click (just like calculators in real life, no inputs!). 
// -	It should have buttons for the operations: Sum, Subtract, Multiply and Divide. 
// -	It should also have the standard buttons equals, decimal dot and reset ( C ). 
// -	There should be a display where we can see the numbers that we are entering and results (like calculators in real life). 
// -	The calculator should show error message if number is too large or if we are dividing by zero.
// NOTE: The eval() function is not allowed!


class Calculator {
 constructor(previousOperandTextElement, currentOperandTextElement) {
  this.previousOperandTextElement = previousOperandTextElement
  this.currentOperandTextElement = currentOperandTextElement
  this.clear()
 }

 // used to clear all values on screen
 clear() {
  this.currentOperand = 0;
  this.previousOperand = ''
  this.operation = undefined
 }
 // used to delete one number of value on screen
 delete() {
  this.currentOperand = this.currentOperand.toString().slice(0, -1)
 }
 // how to add clicked numbers to output screen
 appendNumber(number) {
  if (number === '.' && this.currentOperand.includes('.')) return
  this.currentOperand = this.currentOperand.toString() + number.toString()
 }
 // is going to happen anytime a user clicks on one of operations button; it takes particular operation
 chooseOperation(operation) {
  if (this.currentOperand === '') return
  if (this.previousOperand !== '') {
   this.compute()
  }
  this.operation = operation
  this.previousOperand = this.currentOperand
  this.currentOperand = ''
 }
 // needs to take correct values inside of the calculator
 compute() {
  let computation
  const prev = parseFloat(this.previousOperand)
  const current = parseFloat(this.currentOperand)
  if (isNaN(prev) || isNaN(current)) return
  switch (this.operation) {
   case '+':
    computation = prev + current
    break
   case '-':
    computation = prev - current
    break
   case '*':
    computation = prev * current
    break
   case '÷':
    if (current === 0) {
     alert("Cannot divide by zero");
     return;
    }
    computation = prev / current;
    break;
   default:
    return
  }
  if (computation > 999999999) {
   alert("Number is too large");
   return;
  }

  this.currentOperand = computation
  this.operation = undefined
  this.previousOperand = ''
 }
 // needs to display values on calculator’s screen
 getDisplayNumber(number) {
  const stringNumber = number.toString()
  const integerDigits = parseFloat(stringNumber.split('.')[0])
  const decimalDigits = stringNumber.split('.')[1]
  let integerDisplay
  if (isNaN(integerDigits)) {
   integerDisplay = ''
  } else {
   integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
  }
  if (decimalDigits != null) {
   return `${integerDisplay}.${decimalDigits}`
  } else {
   return integerDisplay
  }
 }
 // needs to update output values on screen
 updateDisplay() {
  this.currentOperandTextElement.innerText =
   this.getDisplayNumber(this.currentOperand)
  if (this.operation != null) {
   this.previousOperandTextElement.innerText =
    `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
  } else {
   this.previousOperandTextElement.innerText = ''
  }
 }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)


numberButtons.forEach(button => {
 button.addEventListener('click', () => {
  calculator.appendNumber(button.innerText)
  calculator.updateDisplay()
 })

});
operationButtons.forEach(button => {
 button.addEventListener('click', () => {
  calculator.chooseOperation(button.innerText)
  calculator.updateDisplay()
 })
})

equalsButton.addEventListener('click', button => {
 calculator.compute()
 calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
 calculator.clear()
 calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
 calculator.delete()
 calculator.updateDisplay()
})

















console.log('------EVAL()-----')


// const prevOperand = document.querySelector('.previous-operand');
// const currentOperand = document.querySelector('.current-operand');
// const keys = document.querySelectorAll('button');

// keys.forEach(key => {
//  key.addEventListener('click', calculate);
// });


// function calculate() {
//  let buttonText = this.innerText;
//  if (buttonText === 'DEL'){
//   prevOperand.innerText = '';
//   currentOperand.innerText = '0';
//   return;
//  }

// if(buttonText === 'C'){
//  prevOperand.textContent = prevOperand.textContent.substring(0, prevOperand.textContent.length-1);
//  return;
// }

// if(buttonText === '='){
//  currentOperand.innerText = eval(prevOperand.innerText)

// }
// else{
//  prevOperand.textContent += buttonText;
//  return;
// }
// }
