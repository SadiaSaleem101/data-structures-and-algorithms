
function maxRootToLeafSum(root) {
    if (root === null) return 0;

    // A leaf node
    if (root.left === null && root.right === null) {
        return root.val;
    }

    // Only the right subtree exists
    if (root.left === null) {
        return root.val + maxRootToLeafSum(root.right);
    }

    // Only the left subtree exists
    if (root.right === null) {
        return root.val + maxRootToLeafSum(root.left);
    }

    // Both children exist
    return root.val + Math.max(
        maxRootToLeafSum(root.left),
        maxRootToLeafSum(root.right)
    );
}

const root = {
    val: 10,
    left: {
        val: 5,
        left: { val: 7, left: null, right: null },
        right: { val: 2, left: null, right: null }
    },
    right: {
        val: 15,
        left: null,
        right: { val: 20, left: null, right: null }
    }
};

console.log(maxRootToLeafSum(root));
// Output: 45
