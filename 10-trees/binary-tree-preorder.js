class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function preorderTraversal(root) {
    const result = [];

    function traverse(node) {
        if (node === null) {
            return;
        }

        // Root
        result.push(node.value);

        // Left
        traverse(node.left);

        // Right
        traverse(node.right);
    }

    traverse(root);

    return result;
}

// Create the tree
const root = new TreeNode(
    1,
    new TreeNode(
        2,
        new TreeNode(4),
        new TreeNode(5)
    ),
    new TreeNode(3)
);

console.log(preorderTraversal(root));
// [1, 2, 4, 5, 3]
