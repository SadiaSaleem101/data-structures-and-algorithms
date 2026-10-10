
function floorInBST(root, target) {
  let floor = -1;
  let current = root;

  while (current !== null) {
    if (current.val === target) {
      return current.val;
    }

    if (current.val < target) {
      // This is a possible floor.
      floor = current.val;
      current = current.right;
    } else {
      // Search for a smaller value.
      current = current.left;
    }
  }

  return floor;
}

const root = {
  val: 8,
  left: {
    val: 3,
    left: { val: 1, left: null, right: null },
    right: {
      val: 6,
      left: { val: 4, left: null, right: null },
      right: { val: 7, left: null, right: null }
    }
  },
  right: { val: 10, left: null, right: null }
};

console.log(floorInBST(root, 5));  // 4
console.log(floorInBST(root, 6));  // 6
console.log(floorInBST(root, 0));  // -1
console.log(floorInBST(root, 9));  // 8
