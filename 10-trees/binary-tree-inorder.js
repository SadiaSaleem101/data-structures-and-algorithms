class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function inorderTraversal(root) {
    const result = [];

    function traverse(node) {
        if (node === null) {
            return;
        }

        // Left
        traverse(node.left);

        // Root
        result.push(node.value);

        // Right
        traverse(node.right);
    }

    traverse(root);

    return result;
}

// Create tree
const root = new TreeNode(
    1,
    null,
    new TreeNode(
        2,
        new TreeNode(3),
        null
    )
);

console.log(inorderTraversal(root));
// [1, 3, 2]
