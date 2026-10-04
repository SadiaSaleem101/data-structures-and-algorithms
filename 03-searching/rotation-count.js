function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] > arr[right]) {
            // Minimum is in the right half
            left = mid + 1;
        } else {
            // Minimum is at mid or in the left half
            right = mid;
        }
    }

    return left;
}

console.log(findRotationCount([4, 5, 6, 7, 1, 2, 3])); // 4
console.log(findRotationCount([3, 4, 5, 1, 2]));       // 3
console.log(findRotationCount([1, 2, 3, 4, 5]));       // 0
console.log(findRotationCount([2, 1]));                 // 1
