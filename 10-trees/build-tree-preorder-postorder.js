
function constructFromPrePost(preorder, postorder) {
    if (preorder.length === 0) return null;

    const postorderMap = new Map();

    for (let i = 0; i < postorder.length; i++) {
        postorderMap.set(postorder[i], i);
    }

    function build(preStart, preEnd, postStart, postEnd) {
        if (preStart > preEnd) return null;

        const root = {
            val: preorder[preStart],
            left: null,
            right: null
        };

        if (preStart === preEnd) return root;

        // The next preorder value starts the left subtree.
        const leftRoot = preorder[preStart + 1];
        const leftRootIndex = postorderMap.get(leftRoot);

        const leftSize = leftRootIndex - postStart + 1;

        root.left = build(
            preStart + 1,
            preStart + leftSize,
            postStart,
            leftRootIndex
        );

        root.right = build(
            preStart + leftSize + 1,
            preEnd,
            leftRootIndex + 1,
            postEnd - 1
        );

        return root;
    }

    return build(
        0,
        preorder.length - 1,
        0,
        postorder.length - 1
    );
}

const preorder = [1, 2, 4, 5, 3, 6, 7];
const postorder = [4, 5, 2, 6, 7, 3, 1];

console.log(constructFromPrePost(preorder, postorder));
