```javascript
// Find the Second Largest Element
// Find the second largest number in an array.

// Example:
// Input: [10, 5, 20, 8, 15]
// Output: 15

function findSecondLargest(arr) {
    let largest = arr[0];
    let secondLargest = -Infinity;

    // Check every number in the array
    for (let i = 1; i < arr.length; i++) {

        // If the current number is larger than largest
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        }

        // If the current number is between
        // largest and secondLargest
        else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

// Example
console.log(findSecondLargest([10, 5, 20, 8, 15]));
// Output: 15

// Time Complexity: O(n)
// Space Complexity: O(1)
```
