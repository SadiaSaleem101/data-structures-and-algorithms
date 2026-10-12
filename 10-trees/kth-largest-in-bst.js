
function kthLargest(root, k) {
    let count = 0;
    let result = null;

    function reverseInorder(node) {
        if (node === null || result !== null) return;

        // Visit larger values first.
        reverseInorder(node.right);

        count++;

        if (count === k) {
            result = node.val;
            return;
        }

        reverseInorder(node.left);
    }

    reverseInorder(root);
    return result;
}

const root = {
    val: 5,
    left: {
        val: 3,
        left: { val: 2, left: { val: 1, left: null, right: null }, right: null },
        right: { val: 4, left: null, right: null }
    },
    right: { val: 6, left: null, right: null }
};

console.log(kthLargest(root, 3));
// Output: 4
