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
    divide (a, b) {
        return a / b;
    },

    // Handles operation calls
    operate(operator, a, b) {
        switch(operator) {
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
    }
}

console.log(calculator.operate('*', 5, 10));