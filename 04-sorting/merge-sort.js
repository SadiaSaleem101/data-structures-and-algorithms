
function mergeSort(arr) {
    // Base case: arrays with 0 or 1 element are sorted
    if (arr.length <= 1) {
        return arr;
    }

    // Divide the array into two halves
    let mid = Math.floor(arr.length / 2);

    let left = mergeSort(arr.slice(0, mid));
    let right = mergeSort(arr.slice(mid));

    // Merge the sorted halves
    return merge(left, right);
}

function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;

    // Compare elements and add the smaller one
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add any remaining elements
    while (i < left.length) {
        result.push(left[i]);
        i++;
    }

    while (j < right.length) {
        result.push(right[j]);
        j++;
    }

    return result;
}

console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));
// [3, 9, 10, 27, 38, 43, 82]

console.log(mergeSort([5, 2, 8, 1, 3]));
// [1, 2, 3, 5, 8]

console.log(mergeSort([]));
// []
