
function lowestCommonAncestor(root, p, q) {
    if (root === null) return null;

    // If we find either target, return it.
    if (root.val === p || root.val === q) {
        return root;
    }

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    // Targets found in different subtrees.
    if (left !== null && right !== null) {
        return root;
    }

    // Otherwise, return whichever subtree found a target.
    return left !== null ? left : right;
}

const root = {
    val: 3,
    left: {
        val: 5,
        left: { val: 6, left: null, right: null },
        right: {
            val: 2,
            left: { val: 7, left: null, right: null },
            right: { val: 4, left: null, right: null }
        }
    },
    right: {
        val: 1,
        left: { val: 0, left: null, right: null },
        right: { val: 8, left: null, right: null }
    }
};

const result = lowestCommonAncestor(root, 5, 4);
console.log(result.val);
// Output: 5
