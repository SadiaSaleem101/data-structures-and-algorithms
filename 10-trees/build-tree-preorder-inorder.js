
function buildTree(preorder, inorder) {
    let preorderIndex = 0;

    const inorderMap = new Map();

    for (let i = 0; i < inorder.length; i++) {
        inorderMap.set(inorder[i], i);
    }

    function build(left, right) {
        if (left > right) return null;

        const rootValue = preorder[preorderIndex++];
        const root = {
            val: rootValue,
            left: null,
            right: null
        };

        const middle = inorderMap.get(rootValue);

        root.left = build(left, middle - 1);
        root.right = build(middle + 1, right);

        return root;
    }

    return build(0, inorder.length - 1);
}

const preorder = [3, 9, 20, 15, 7];
const inorder = [9, 3, 15, 20, 7];

const root = buildTree(preorder, inorder);

console.log(root);
