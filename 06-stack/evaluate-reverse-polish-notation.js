
function evalRPN(tokens) {
    const stack = [];

    for (const token of tokens) {
        if (
            token === "+" ||
            token === "-" ||
            token === "*" ||
            token === "/"
        ) {
            // Pop the second operand first
            const b = stack.pop();
            const a = stack.pop();

            let result;

            switch (token) {
                case "+":
                    result = a + b;
                    break;

                case "-":
                    result = a - b;
                    break;

                case "*":
                    result = a * b;
                    break;

                case "/":
                    // Truncate toward zero
                    result = Math.trunc(a / b);
                    break;
            }

            stack.push(result);
        } else {
            // Convert the number string to a number
            stack.push(Number(token));
        }
    }

    return stack.pop();
}

console.log(
    evalRPN(["2", "1", "+", "3", "*"])
);

console.log(
    evalRPN(["4", "13", "5", "/", "+"])
);

console.log(
    evalRPN(["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"])
);
