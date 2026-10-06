
function findDuplicates(nums) {
    const seen = new Set();
    const duplicates = [];

    for (const num of nums) {
        if (seen.has(num)) {
            duplicates.push(num);
        } else {
            seen.add(num);
        }
    }

    return duplicates;
}

console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]));
// [2, 3]

console.log(findDuplicates([1, 1, 2]));
// [1]

console.log(findDuplicates([1, 2, 3]));
// []
