function countOccurrences(arr, target) {
    function findFirst() {
        let left = 0;
        let right = arr.length - 1;
        let answer = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (arr[mid] === target) {
                answer = mid;
                right = mid - 1;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return answer;
    }

    function findLast() {
        let left = 0;
        let right = arr.length - 1;
        let answer = -1;

        while (left <= right) {
            let mid = Math.floor((left + right) / 2);

            if (arr[mid] === target) {
                answer = mid;
                left = mid + 1;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return answer;
    }

    let first = findFirst();
    let last = findLast();

    if (first === -1) {
        return 0;
    }

    return last - first + 1;
}

console.log(countOccurrences([1, 2, 2, 2, 3, 4], 2)); // 3
console.log(countOccurrences([1, 1, 1, 1, 2, 3], 1)); // 4
console.log(countOccurrences([1, 2, 3, 4, 5], 6));    // 0
console.log(countOccurrences([], 2));                  // 0
