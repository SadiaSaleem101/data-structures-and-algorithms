function power(x, n) {
    // Base case
    if (n === 0) {
        return 1;
    }

    // Handle negative exponent
    if (n < 0) {
        return 1 / power(x, -n);
    }

    // Calculate x^(n / 2)
    const half = power(x, Math.floor(n / 2));

    // If n is even
    if (n % 2 === 0) {
        return half * half;
    }

    // If n is odd
    return x * half * half;
}

console.log(power(2, 5));  // 32
console.log(power(3, 4));  // 81
console.log(power(5, 0));  // 1
console.log(power(2, -2)); // 0.25
