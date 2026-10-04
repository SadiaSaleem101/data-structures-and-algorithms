function findKthPositive(arr, k) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // Count how many positive numbers are missing
        // before arr[mid]
        let missing = arr[mid] - (mid + 1);

        if (missing < k) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return left + k;
}

console.log(findKthPositive([2, 3, 4, 7, 11], 5)); // 9
console.log(findKthPositive([1, 2, 3, 4], 2));     // 6
console.log(findKthPositive([2, 3, 4, 5], 1));     // 1
