
function sortedListToBST(head) {
  // Step 1: Store the sorted values.
  const values = [];
  let current = head;

  while (current !== null) {
    values.push(current.val);
    current = current.next;
  }

  // Step 2: Build a balanced BST from the array.
  function buildBST(left, right) {
    if (left > right) return null;

    const mid = Math.floor((left + right) / 2);

    const node = {
      val: values[mid],
      left: null,
      right: null
    };

    node.left = buildBST(left, mid - 1);
    node.right = buildBST(mid + 1, right);

    return node;
  }

  return buildBST(0, values.length - 1);
}

// Create a sorted doubly linked list: 1 ⇄ 2 ⇄ 3 ⇄ 4 ⇄ 5
function createDoublyLinkedList(values) {
  let head = null;
  let tail = null;

  for (const value of values) {
    const node = {
      val: value,
      prev: tail,
      next: null
    };

    if (tail !== null) {
      tail.next = node;
    } else {
      head = node;
    }

    tail = node;
  }

  return head;
}

function inorderTraversal(root) {
  if (root === null) return [];

  return [
    ...inorderTraversal(root.left),
    root.val,
    ...inorderTraversal(root.right)
  ];
}

const head = createDoublyLinkedList([1, 2, 3, 4, 5]);
const root = sortedListToBST(head);

console.log(inorderTraversal(root));
// [1, 2, 3, 4, 5]

console.log(root.val);
// 3
