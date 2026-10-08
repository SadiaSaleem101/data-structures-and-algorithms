class TreeNode {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function isSameTree(root1, root2) {
    // Both trees are empty
    if (root1 === null && root2 === null) {
        return true;
    }

    // One tree is empty, the other isn't
    if (root1 === null || root2 === null) {
        return false;
    }

    // Values are different
    if (root1.value !== root2.value) {
        return false;
    }

    // Compare left and right subtrees
    return (
        isSameTree(root1.left, root2.left) &&
        isSameTree(root1.right, root2.right)
    );
}

// Tree 1
const tree1 = new TreeNode(
    1,
    new TreeNode(2),
    new TreeNode(3)
);

// Tree 2
const tree2 = new TreeNode(
    1,
    new TreeNode(2),
    new TreeNode(3)
);

console.log(isSameTree(tree1, tree2));
// true

// Different tree
const tree3 = new TreeNode(
    1,
    new TreeNode(2),
    new TreeNode(4)
);

console.log(isSameTree(tree1, tree3));
// false
