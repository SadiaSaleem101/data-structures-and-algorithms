function searchInfiniteArray(arr, target) {
    let left = 0;
    let right = 1;

    // Step 1: Find a range that may contain the target
    while (right < arr.length && arr[right] < target) {
        left = right;
        right = right * 2;
    }

    // Step 2: Apply binary search within the range
    right = Math.min(right, arr.length - 1);

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

console.log(searchInfiniteArray([3, 5, 7, 9, 10, 15, 20, 25, 30], 15)); // 5
console.log(searchInfiniteArray([3, 5, 7, 9, 10, 15, 20, 25, 30], 3));  // 0
console.log(searchInfiniteArray([3, 5, 7, 9, 10, 15, 20, 25, 30], 100)); // -1
