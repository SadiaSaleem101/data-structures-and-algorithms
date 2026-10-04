
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;

        // Shift larger elements one position to the right
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert key into its correct position
        arr[j + 1] = key;
    }

    return arr;
}

console.log(insertionSort([5, 3, 8, 4, 2]));
// [2, 3, 4, 5, 8]

console.log(insertionSort([12, 11, 13, 5, 6]));
// [5, 6, 11, 12, 13]

console.log(insertionSort([1, 2, 3, 4]));
// [1, 2, 3, 4]
