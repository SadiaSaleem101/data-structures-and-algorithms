function findCeiling(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let answer = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] >= target) {
            answer = arr[mid];
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return answer;
}

console.log(findCeiling([1, 2, 4, 6, 8], 5)); // 6
console.log(findCeiling([1, 2, 4, 6, 8], 6)); // 6
console.log(findCeiling([1, 2, 4, 6, 8], 0)); // 1
console.log(findCeiling([1, 2, 4, 6, 8], 9)); // -1
console.log(findCeiling([], 5));               // -1
