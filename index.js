// Calculator class
class Calculator {
    constructor() {
      this.value = 0;
    }
  
    // Add a number to the value
    add(number) {
      this.value += number;
    }
  
    // Subtract a number from the value
    subtract(number) {
      this.value -= number;
    }
  
    // Multiply the value by a number
    multiply(number) {
      this.value *= number;
    }
  
    // Divide the value by a number
    divide(number) {
      this.value /= number;
    }
  }
  
  // Usage
  const calculator = new Calculator();
  
  calculator.add(5);
  calculator.multiply(2);
  calculator.subtract(1);
  console.log(calculator.value); // Prints 10