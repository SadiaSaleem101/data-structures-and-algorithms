function searchBitonicArray(arr, target) {
    // Step 1: Find the peak index
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] < arr[mid + 1]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    let peak = left;

    // Step 2: Search the increasing half
    left = 0;
    right = peak;

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

    // Step 3: Search the decreasing half
    left = peak + 1;
    right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        } else if (arr[mid] < target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return -1;
}

console.log(searchBitonicArray([1, 3, 8, 12, 9, 5, 2], 9));  // 4
console.log(searchBitonicArray([1, 3, 8, 12, 9, 5, 2], 12)); // 3
console.log(searchBitonicArray([1, 3, 8, 12, 9, 5, 2], 7));  // -1
