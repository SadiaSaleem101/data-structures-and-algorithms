
function lowestCommonAncestor(p, q) {
  let a = p;
  let b = q;

  while (a !== b) {
    a = a === null ? q : a.parent;
    b = b === null ? p : b.parent;
  }

  return a;
}

// Build the tree.
const root = { val: 3, parent: null };

const node5 = { val: 5, parent: root };
const node1 = { val: 1, parent: root };

const node6 = { val: 6, parent: node5 };
const node2 = { val: 2, parent: node5 };

console.log(lowestCommonAncestor(node6, node2).val); // 5
