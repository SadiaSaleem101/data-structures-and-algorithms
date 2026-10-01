```javascript
// Intersection of Two Arrays
// Find the elements that are present in both arrays.

// Example:
// Input:  [1, 2, 2, 3]
//         [2, 3, 4]
// Output: [2, 3]

function findIntersection(arr1, arr2) {
    let result = [];

    // Check every number in the first array
    for (let i = 0; i < arr1.length; i++) {

        // Check if it exists in the second array
        if (arr2.includes(arr1[i])) {

            // Add it if it is not already in result
            if (!result.includes(arr1[i])) {
                result.push(arr1[i]);
            }
        }
    }

    return result;
}

// Example
console.log(findIntersection([1, 2, 2, 3], [2, 3, 4]));
// Output: [2, 3]

// Time Complexity: O(n × m)
// Space Complexity: O(n)
```
