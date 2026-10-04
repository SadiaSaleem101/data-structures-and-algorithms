function nextGreatestLetter(letters, target) {
    let left = 0;
    let right = letters.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (letters[mid] <= target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    // Wrap around if no greater letter exists
    return letters[left % letters.length];
}

console.log(nextGreatestLetter(["c", "f", "j"], "a")); // "c"
console.log(nextGreatestLetter(["c", "f", "j"], "c")); // "f"
console.log(nextGreatestLetter(["c", "f", "j"], "j")); // "c"
