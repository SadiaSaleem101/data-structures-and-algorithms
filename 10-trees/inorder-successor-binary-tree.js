
function inorderSuccessor(node) {
    if (node === null) return null;

    // Case 1: A right subtree exists.
    // The successor is the leftmost node there.
    if (node.right !== null) {
        let current = node.right;

        while (current.left !== null) {
            current = current.left;
        }

        return current;
    }

    // Case 2: No right subtree.
    // Move upward until we come from a left child.
    let current = node;
    let parent = current.parent;

    while (parent !== null && parent.right === current) {
        current = parent;
        parent = parent.parent;
    }

    return parent;
}

function createNode(val) {
    return {
        val,
        left: null,
        right: null,
        parent: null
    };
}

const root = createNode(20);
const node10 = createNode(10);
const node30 = createNode(30);
const node15 = createNode(15);

root.left = node10;
root.right = node30;
node10.parent = root;
node30.parent = root;

node10.right = node15;
node15.parent = node10;

console.log(inorderSuccessor(node10).val);
// Output: 15
