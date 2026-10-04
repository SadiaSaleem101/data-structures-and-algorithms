
function countingSort(arr) {
    if (arr.length === 0) {
        return arr;
    }

    // Find the minimum and maximum values
    let min = arr[0];
    let max = arr[0];

    for (let num of arr) {
        if (num < min) min = num;
        if (num > max) max = num;
    }

    // Create a count array
    let count = new Array(max - min + 1).fill(0);

    // Count each number's occurrences
    for (let num of arr) {
        count[num - min]++;
    }

    // Rebuild the sorted array
    let index = 0;

    for (let i = 0; i < count.length; i++) {
        while (count[i] > 0) {
            arr[index] = i + min;
            index++;
            count[i]--;
        }
    }

    return arr;
}

console.log(countingSort([4, 2, 2, 8, 3, 3, 1]));
// [1, 2, 2, 3, 3, 4, 8]

console.log(countingSort([-2, 3, 0, -2, 1]));
// [-2, -2, 0, 1, 3]

console.log(countingSort([]));
// []
