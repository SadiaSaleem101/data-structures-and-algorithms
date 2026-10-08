class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function postorderTraversal(root) {
    const result = [];

    function traverse(node) {
        if (node === null) {
            return;
        }

        // Left
        traverse(node.left);

        // Right
        traverse(node.right);

        // Root
        result.push(node.value);
    }

    traverse(root);

    return result;
}

// Create tree
const root = new TreeNode(
    1,
    new TreeNode(2),
    new TreeNode(3)
);

console.log(postorderTraversal(root));
// [2, 3, 1]
