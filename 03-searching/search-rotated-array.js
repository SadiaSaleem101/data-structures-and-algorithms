// Search in a Rotated Sorted Array
// Return the index of the target, or -1 if not found.

function searchRotatedArray(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid;
        }

        // Check if the left half is sorted
        if (arr[left] <= arr[mid]) {
            if (target >= arr[left] && target < arr[mid]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        } else {
            // The right half is sorted
            if (target > arr[mid] && target <= arr[right]) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    }

    return -1;
}

// Examples
console.log(searchRotatedArray([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log(searchRotatedArray([4, 5, 6, 7, 0, 1, 2], 5)); // 1
console.log(searchRotatedArray([4, 5, 6, 7, 0, 1, 2], 3)); // -1

// Time Complexity: O(log n)
// Space Complexity: O(1)
