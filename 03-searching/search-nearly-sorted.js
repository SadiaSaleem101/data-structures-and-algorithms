function searchNearlySorted(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        // Check the middle element
        if (arr[mid] === target) {
            return mid;
        }

        // Check the element just before mid
        if (mid > left && arr[mid - 1] === target) {
            return mid - 1;
        }

        // Check the element just after mid
        if (mid < right && arr[mid + 1] === target) {
            return mid + 1;
        }

        // Search the appropriate half
        if (arr[mid] > target) {
            right = mid - 2;
        } else {
            left = mid + 2;
        }
    }

    return -1;
}

console.log(searchNearlySorted([10, 3, 40, 20, 50, 80, 70], 40)); // 2
console.log(searchNearlySorted([10, 3, 40, 20, 50, 80, 70], 20)); // 3
console.log(searchNearlySorted([10, 3, 40, 20, 50, 80, 70], 90)); // -1
