
function buildTree(inorder, postorder) {
    let postorderIndex = postorder.length - 1;
    const inorderMap = new Map();

    for (let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i);
    }

    function build(left, right) {
        if (left > right) return null;

        const value = postorder[postorderIndex--];

        const root = {
            val: value,
            left: null,
            right: null
        };

        const middle = inorderMap.get(value);

        // Build the right subtree first.
        root.right = build(middle + 1, right);
        root.left = build(left, middle - 1);

        return root;
    }

    return build(0, inorder.length - 1);
}

const inorder = [9, 3, 15, 20, 7];
const postorder = [9, 15, 7, 20, 3];

const root = buildTree(inorder, postorder);
console.log(root);
