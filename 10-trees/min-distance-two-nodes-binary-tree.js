
function lowestCommonAncestor(root, p, q) {
    if (root === null) return null;

    if (root.val === p || root.val === q) {
        return root;
    }

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    if (left !== null && right !== null) {
        return root;
    }

    return left !== null ? left : right;
}

function distanceFrom(root, target) {
    if (root === null) return -1;

    if (root.val === target) return 0;

    const leftDistance = distanceFrom(root.left, target);

    if (leftDistance !== -1) {
        return leftDistance + 1;
    }

    const rightDistance = distanceFrom(root.right, target);

    if (rightDistance !== -1) {
        return rightDistance + 1;
    }

    return -1;
}

function minDistance(root, p, q) {
    const lca = lowestCommonAncestor(root, p, q);

    if (lca === null) return -1;

    const distanceP = distanceFrom(lca, p);
    const distanceQ = distanceFrom(lca, q);

    if (distanceP === -1 || distanceQ === -1) {
        return -1;
    }

    return distanceP + distanceQ;
}

const root = {
    val: 1,
    left: {
        val: 2,
        left: { val: 4, left: null, right: null },
        right: { val: 5, left: null, right: null }
    },
    right: {
        val: 3,
        left: null,
        right: null
    }
};

console.log(minDistance(root, 4, 3));
// Output: 3
