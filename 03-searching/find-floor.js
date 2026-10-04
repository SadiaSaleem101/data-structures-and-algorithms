function findFloor(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    let answer = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] <= target) {
            answer = arr[mid];
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return answer;
}

console.log(findFloor([1, 2, 4, 6, 8], 5)); // 4
console.log(findFloor([1, 2, 4, 6, 8], 6)); // 6
console.log(findFloor([1, 2, 4, 6, 8], 0)); // -1
console.log(findFloor([1, 2, 4, 6, 8], 9)); // 8
