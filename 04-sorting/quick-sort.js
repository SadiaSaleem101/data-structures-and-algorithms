
function quickSort(arr) {
    // Base case
    if (arr.length <= 1) {
        return arr;
    }

    // Choose the last element as the pivot
    let pivot = arr[arr.length - 1];

    let left = [];
    let right = [];

    // Divide elements around the pivot
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] <= pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    // Sort both sides and combine
    return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([5, 3, 8, 4, 2]));
// [2, 3, 4, 5, 8]

console.log(quickSort([10, 7, 8, 9, 1, 5]));
// [1, 5, 7, 8, 9, 10]

console.log(quickSort([]));
// []
