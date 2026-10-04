function singleNonDuplicate(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        // Ensure mid is at an even index
        if (mid % 2 === 1) {
            mid--;
        }

        // Check whether the pair is correct
        if (arr[mid] === arr[mid + 1]) {
            left = mid + 2;
        } else {
            right = mid;
        }
    }

    return arr[left];
}

console.log(singleNonDuplicate([1, 1, 2, 3, 3, 4, 4, 8, 8])); // 2
console.log(singleNonDuplicate([3, 3, 7, 7, 10, 11, 11]));   // 10
console.log(singleNonDuplicate([5]));                         // 5
