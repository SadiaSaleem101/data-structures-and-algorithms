
function isBalanced(root) {
    function height(node) {
        if (node === null) return 0;

        const leftHeight = height(node.left);

        // -1 means the left subtree is unbalanced.
        if (leftHeight === -1) return -1;

        const rightHeight = height(node.right);

        if (rightHeight === -1) return -1;

        // Check the height difference.
        if (Math.abs(leftHeight - rightHeight) > 1) {
            return -1;
        }

        return 1 + Math.max(leftHeight, rightHeight);
    }

    return height(root) !== -1;
}

const root = {
    val: 1,
    left: {
        val: 2,
        left: { val: 4, left: null, right: null },
        right: { val: 5, left: null, right: null }
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
};

console.log(isBalanced(root));
// Output: true
