function factorial(n) {
    // Base case
    if (n === 0 || n === 1) {
        return 1;
    }

    // Recursive case
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
console.log(factorial(4)); // 24
console.log(factorial(3)); // 6
console.log(factorial(1)); // 1
console.log(factorial(0)); // 1
