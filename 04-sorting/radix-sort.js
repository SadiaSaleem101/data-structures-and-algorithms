
function radixSort(arr) {
    if (arr.length === 0) return arr;

    // This implementation supports non-negative integers.
    if (arr.some(num => !Number.isInteger(num) || num < 0)) {
        throw new Error("Radix Sort requires non-negative integers.");
    }

    let max = Math.max(...arr);

    // Sort by ones, tens, hundreds, and so on
    for (let exp = 1; Math.floor(max / exp) > 0; exp *= 10) {
        countingSortByDigit(arr, exp);
    }

    return arr;
}

function countingSortByDigit(arr, exp) {
    let n = arr.length;
    let output = new Array(n);
    let count = new Array(10).fill(0);

    // Count occurrences of each digit
    for (let num of arr) {
        let digit = Math.floor(num / exp) % 10;
        count[digit]++;
    }

    // Convert counts into positions
    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    // Place elements in stable order
    for (let i = n - 1; i >= 0; i--) {
        let digit = Math.floor(arr[i] / exp) % 10;
        output[count[digit] - 1] = arr[i];
        count[digit]--;
    }

    // Copy sorted values back
    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }
}

console.log(radixSort([170, 45, 75, 90, 802, 24, 2, 66]));
// [2, 24, 45, 66, 75, 90, 170, 802]

console.log(radixSort([5, 1, 100, 25, 10]));
// [1, 5, 10, 25, 100]

console.log(radixSort([]));
// []
