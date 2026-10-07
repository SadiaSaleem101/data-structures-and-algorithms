function sumOfDigits(n) {
    // Base case
    if (n === 0) {
        return 0;
    }

    // Last digit + sum of remaining digits
    return (n % 10) + sumOfDigits(Math.floor(n / 10));
}

console.log(sumOfDigits(1234)); // 10
console.log(sumOfDigits(567));  // 18
console.log(sumOfDigits(9));    // 9
console.log(sumOfDigits(100));  // 1
