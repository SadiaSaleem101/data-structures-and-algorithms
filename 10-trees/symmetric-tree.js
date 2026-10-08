class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function isSymmetric(root) {
    if (root === null) {
        return true;
    }

    function isMirror(left, right) {
        // Both are empty
        if (left === null && right === null) {
            return true;
        }

        // Only one is empty
        if (left === null || right === null) {
            return false;
        }

        // Values must match
        if (left.value !== right.value) {
            return false;
        }

        // Compare opposite sides
        return (
            isMirror(left.left, right.right) &&
            isMirror(left.right, right.left)
        );
    }

    return isMirror(root.left, root.right);
}

// Symmetric tree
const root = new TreeNode(
    1,
    new TreeNode(
        2,
        new TreeNode(3),
        new TreeNode(4)
    ),
    new TreeNode(
        2,
        new TreeNode(4),
        new TreeNode(3)
    )
);

console.log(isSymmetric(root));
// true
