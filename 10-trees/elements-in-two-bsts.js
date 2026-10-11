
function getAllElements(root1, root2) {
    const values = [];

    function inorder(node) {
        if (node === null) return;

        inorder(node.left);
        values.push(node.val);
        inorder(node.right);
    }

    inorder(root1);
    inorder(root2);

    return values.sort((a, b) => a - b);
}

// Tree 1: [2, 1, 4]
// Tree 2: [1, 0, 3]

const root1 = {
    val: 2,
    left: { val: 1, left: null, right: null },
    right: { val: 4, left: null, right: null }
};

const root2 = {
    val: 1,
    left: {
        val: 0,
        left: null,
        right: null
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
};

console.log(getAllElements(root1, root2));
// Output: [0, 1, 1, 2, 3, 4]
