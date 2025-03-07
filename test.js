c// Function to perform addition
function add(a, b) {
    return a + b;
}

// Function to perform subtraction
function subtract(a, b) {
    return a - b;
}

// Function to perform multiplication
function multiply(a, b) {
    return a * b;
}

// Function to perform division
function divide(a, b) {
    if (b === 0) {
        return "Error! Division by zero.";
    }
    return a / b;
}

// Function to get user input and perform the selected operation
function calculator() {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log("Simple Calculator");
    console.log("1. Add");
    console.log("2. Subtract");
    console.log("3. Multiply");
    console.log("4. Divide");

    readline.question("Enter your choice (1/2/3/4): ", function(choice) {
        readline.question("Enter the first number: ", function(num1) {
            readline.question("Enter the second number: ", function(num2) {
                num1 = parseFloat(num1);
                num2 = parseFloat(num2);
                let result;

                switch (choice) {
                    case '1':
                        result = add(num1, num2);
                        console.log(`Result: ${num1} + ${num2} = ${result}`);
                        break;
                    case '2':
                        result = subtract(num1, num2);
                        console.log(`Result: ${num1} - ${num2} = ${result}`);
                        break;
                    case '3':
                        result = multiply(num1, num2);
                        console.log(`Result: ${num1} * ${num2} = ${result}`);
                        break;
                    case '4':
                        result = divide(num1, num2);
                        console.log(`Result: ${num1} / ${num2} = ${result}`);
                        break;
                    default:
                        console.log("Invalid choice. Please enter 1, 2, 3, or 4.");
                        break;
                }

                readline.close();
            });
        });
    });
}

// Run the calculator function
calculator();