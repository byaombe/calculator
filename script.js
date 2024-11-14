//calculator



let firstNumber ;
let secondNumber;
let operator = "";
display = document.querySelector("#display");



function displayOnScreen() {
    const operatorBtn = document.querySelectorAll(".operators");
    const dot = document.querySelector(".dot");
    const clearBtn = document.querySelector(".clear");
   const numberBtn = document.querySelectorAll("#numberBtn");
   const equalsBtn = document.querySelector(".equals-btn");
  
    numberBtn.forEach(button => {
      button.addEventListener('click', () => {
        if (!operator) {
          firstNumber += button.textContent; // Store digits for the first #
          display.textContent = firstNumber;
        } else {
          secondNumber += button.textContent; // Store digits for the second #
          display.textContent = secondNumber;
        }
      });
    });
  
    operatorBtn.forEach(button => {
      button.addEventListener('click', () => {
        if (firstNumber && !secondNumber) {
          operator = button.textContent; // Store the selected operator
          display.textContent = operator;
        }
      });
    });
  
    equalsBtn.addEventListener('click', () => {
      if (firstNumber && secondNumber && operator) {
        const num1 = parseFloat(firstNumber);
        const num2 = parseFloat(secondNumber);
  
        switch (operator) {
          case '+':
            result = num1 + num2;
            break;
          case '-':
            result = num1 - num2;
            break;
          case '*':
            result = num1 * num2;
            break;
          case '/':
            result = num1 / num2;
            break;
          default:
            result = "Error";
        }
  
        display.textContent = result;
        // Reset for next calculation
        firstNumber = result.toString();
        secondNumber = "";
        operator = "";
      }
    });
  
    clearBtn.addEventListener('click', () => {
      firstNumber = "";
      secondNumber = "";
      operator = "";
      result = 0;
      display.textContent = "";
    });
  }
  
  displayOnScreen()  