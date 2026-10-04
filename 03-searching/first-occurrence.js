// Find the First Occurrence Using Binary Search

function firstOccurrence(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let answer = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            answer = mid;
            right = mid - 1; // Search the left half
        } else if (arr[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return answer;
}

// Examples
console.log(firstOccurrence([1, 2, 2, 2, 3, 4], 2)); // 1
console.log(firstOccurrence([1, 2, 3, 4, 5], 4));    // 3
console.log(firstOccurrence([1, 2, 3, 4, 5], 9));    // -1

// Time Complexity: O(log n)
// Space Complexity: O(1)
