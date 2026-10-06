
function containsNearbyDuplicate(nums, k) {
    const lastSeen = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (
            lastSeen.has(nums[i]) &&
            i - lastSeen.get(nums[i]) <= k
        ) {
            return true;
        }

        lastSeen.set(nums[i], i);
    }

    return false;
}

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
// true

console.log(containsNearbyDuplicate([1, 2, 3, 1, 2, 3], 2));
// false

console.log(containsNearbyDuplicate([1, 2, 3, 4], 1));
// false
