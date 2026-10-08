class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function maxDepth(root) {
    // Base case
    if (root === null) {
        return 0;
    }

    // Find depth of left and right subtrees
    const leftDepth = maxDepth(root.left);
    const rightDepth = maxDepth(root.right);

    // Current node adds 1
    return 1 + Math.max(leftDepth, rightDepth);
}

// Create tree
const root = new TreeNode(
    3,
    new TreeNode(9),
    new TreeNode(
        20,
        new TreeNode(15),
        new TreeNode(7)
    )
);

console.log(maxDepth(root));
// 3
