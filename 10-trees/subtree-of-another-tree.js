
function isSubtree(root, subRoot) {
    if (subRoot === null) return true;
    if (root === null) return false;

    function isSameTree(a, b) {
        if (a === null && b === null) return true;
        if (a === null || b === null) return false;

        if (a.val !== b.val) return false;

        return (
            isSameTree(a.left, b.left) &&
            isSameTree(a.right, b.right)
        );
    }

    if (isSameTree(root, subRoot)) return true;

    return (
        isSubtree(root.left, subRoot) ||
        isSubtree(root.right, subRoot)
    );
}

const root = {
    val: 3,
    left: {
        val: 4,
        left: { val: 1, left: null, right: null },
        right: { val: 2, left: null, right: null }
    },
    right: { val: 5, left: null, right: null }
};

const subRoot = {
    val: 4,
    left: { val: 1, left: null, right: null },
    right: { val: 2, left: null, right: null }
};

console.log(isSubtree(root, subRoot));
// Output: true
