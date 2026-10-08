function treeToDoublyLinkedList(root) {
  let previous = null;
  let head = null;

  function inorder(node) {
    if (node === null) {
      return;
    }

    // Visit left subtree
    inorder(node.left);

    // First node becomes the head
    if (previous === null) {
      head = node;
    } else {
      // Connect current node with previous node
      previous.right = node;
      node.left = previous;
    }

    previous = node;

    // Visit right subtree
    inorder(node.right);
  }

  inorder(root);

  return head;
}
