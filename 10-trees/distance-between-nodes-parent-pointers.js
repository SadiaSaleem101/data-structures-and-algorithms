
function distanceBetweenNodes(p, q) {
    const distances = new Map();

    // Record distances from p to all its ancestors.
    let current = p;
    let distance = 0;

    while (current !== null) {
        distances.set(current, distance);
        current = current.parent;
        distance++;
    }

    // Walk upward from q until a common ancestor is found.
    current = q;
    distance = 0;

    while (current !== null) {
        if (distances.has(current)) {
            return distances.get(current) + distance;
        }

        current = current.parent;
        distance++;
    }

    // Nodes belong to different trees.
    return -1;
}

function createNode(val) {
    return { val, parent: null };
}

const root = createNode(1);
const node2 = createNode(2);
const node3 = createNode(3);
const node4 = createNode(4);
const node5 = createNode(5);

node2.parent = root;
node3.parent = root;
node4.parent = node2;
node5.parent = node2;

console.log(distanceBetweenNodes(node4, node3));
// Output: 3
