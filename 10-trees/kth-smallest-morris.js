
function kthSmallest(root, k) {
    let count = 0;
    let current = root;

    while (current !== null) {
        if (current.left === null) {
            count++;

            if (count === k) return current.val;

            current = current.right;
        } else {
            // Find the inorder predecessor.
            let predecessor = current.left;

            while (
                predecessor.right !== null &&
                predecessor.right !== current
            ) {
                predecessor = predecessor.right;
            }

            if (predecessor.right === null) {
                // Create a temporary link back to current.
                predecessor.right = current;
                current = current.left;
            } else {
                // Remove the temporary link.
                predecessor.right = null;

                count++;

                if (count === k) return current.val;

                current = current.right;
            }
        }
    }

    return null; // k is invalid
}

const root = {
    val: 5,
    left: {
        val: 3,
        left: { val: 2, left: null, right: null },
        right: { val: 4, left: null, right: null }
    },
    right: { val: 7, left: null, right: null }
};

console.log(kthSmallest(root, 3));
// Output: 4
