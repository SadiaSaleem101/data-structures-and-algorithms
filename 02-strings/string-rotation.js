// Check if One String Is a Rotation of Another
//
// Example:
// Input: "waterbottle", "erbottlewat"
// Output: true

function isRotation(str1, str2) {

    // Rotations must have the same length
    if (str1.length !== str2.length) {
        return false;
    }

    // Join the first string with itself
    let combined = str1 + str1;

    // Check if the second string exists inside it
    return combined.includes(str2);
}

// Examples
console.log(isRotation("waterbottle", "erbottlewat")); // true
console.log(isRotation("hello", "world")); // false

// Time Complexity: O(n)
// Space Complexity: O(n)
