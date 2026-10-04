function searchRange(arr, target) {
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

    return [findFirst(), findLast()];
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3, 4]
console.log(searchRange([5, 7, 7, 8, 8, 10], 7)); // [1, 2]
console.log(searchRange([1, 2, 3, 4, 5], 6));     // [-1, -1]
console.log(searchRange([], 0));                   // [-1, -1]
