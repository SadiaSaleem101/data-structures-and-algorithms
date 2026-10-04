
function bubbleSort(arr) {
    let n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        let swapped = false;

        for (let j = 0; j < n - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap adjacent elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;

                swapped = true;
            }
        }

        // Stop if no swaps occurred
        if (!swapped) {
            break;
        }
    }

    return arr;
}

console.log(bubbleSort([5, 3, 8, 4, 2]));
// [2, 3, 4, 5, 8]

console.log(bubbleSort([1, 2, 3, 4]));
// [1, 2, 3, 4]

console.log(bubbleSort([]));
// []
