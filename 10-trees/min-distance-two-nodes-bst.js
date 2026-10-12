
function lowestCommonAncestor(root, p, q) {
    let current = root;

    while (current !== null) {
        if (p < current.val && q < current.val) {
            current = current.left;
        } else if (p > current.val && q > current.val) {
            current = current.right;
        } else {
            return current;
        }
    }

    return null;
}

function distanceFrom(root, target) {
    let distance = 0;
    let current = root;

    while (current !== null) {
        if (target === current.val) {
            return distance;
        }

        if (target < current.val) {
            current = current.left;
        } else {
            current = current.right;
        }

        distance++;
    }

    return -1;
}

function minDistanceBST(root, p, q) {
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
    val: 6,
    left: {
        val: 2,
        left: { val: 0, left: null, right: null },
        right: { val: 4, left: null, right: null }
    },
    right: {
        val: 8,
        left: { val: 7, left: null, right: null },
        right: { val: 9, left: null, right: null }
    }
};

console.log(minDistanceBST(root, 2, 8));
// Output: 3
