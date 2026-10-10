
function isCompleteTree(root) {
  if (root === null) return true;

  const queue = [root];
  let index = 0;
  let foundNull = false;

  while (index < queue.length) {
    const node = queue[index++];

    if (node === null) {
      foundNull = true;
    } else {
      // Once a null position appears,
      // no more actual nodes may follow.
      if (foundNull) return false;

      queue.push(node.left);
      queue.push(node.right);
    }
  }

  return true;
}

// Example 1: Complete tree
const root1 = {
  val: 1,
  left: {
    val: 2,
    left: { val: 4, left: null, right: null },
    right: { val: 5, left: null, right: null }
  },
  right: {
    val: 3,
    left: { val: 6, left: null, right: null },
    right: null
  }
};

console.log(isCompleteTree(root1)); // true

// Example 2: Not complete
const root2 = {
  val: 1,
  left: {
    val: 2,
    left: null,
    right: { val: 5, left: null, right: null }
  },
  right: { val: 3, left: null, right: null }
};

console.log(isCompleteTree(root2)); // false
