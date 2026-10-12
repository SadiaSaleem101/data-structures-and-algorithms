
function inorderSuccessor(root, p) {
    let successor = null;
    let current = root;

    while (current !== null) {
        if (current.val > p) {
            // This node could be the successor.
            successor = current;

            // Search for a smaller valid successor.
            current = current.left;
        } else {
            // Current value is too small or equal.
            current = current.right;
        }
    }

    return successor;
}

const root = {
    val: 20,
    left: {
        val: 10,
        left: { val: 5, left: null, right: null },
        right: { val: 15, left: null, right: null }
    },
    right: {
        val: 30,
        left: { val: 25, left: null, right: null },
        right: { val: 35, left: null, right: null }
    }
};

const result = inorderSuccessor(root, 15);

console.log(result ? result.val : null);
// Output: 20
