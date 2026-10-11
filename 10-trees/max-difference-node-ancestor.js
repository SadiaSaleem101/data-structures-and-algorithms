
function maxAncestorDiff(root) {
    if (root === null) return 0;

    let maxDiff = 0;

    function dfs(node, minValue, maxValue) {
        if (node === null) return;

        minValue = Math.min(minValue, node.val);
        maxValue = Math.max(maxValue, node.val);

        maxDiff = Math.max(
            maxDiff,
            maxValue - minValue
        );

        dfs(node.left, minValue, maxValue);
        dfs(node.right, minValue, maxValue);
    }

    dfs(root, root.val, root.val);

    return maxDiff;
}

const root = {
    val: 8,
    left: {
        val: 3,
        left: { val: 1, left: null, right: null },
        right: { val: 6, left: null, right: null }
    },
    right: {
        val: 10,
        left: null,
        right: { val: 14, left: null, right: null }
    }
};

console.log(maxAncestorDiff(root));
// Output: 7
