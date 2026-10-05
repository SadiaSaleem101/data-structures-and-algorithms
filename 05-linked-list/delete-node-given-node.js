
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function deleteNode(node) {
    if (node === null || node.next === null) {
        throw new Error("Node must not be null or the last node.");
    }

    // Copy the next node's value
    node.value = node.next.value;

    // Skip the next node
    node.next = node.next.next;
}

// Create: 4 -> 5 -> 1 -> 9
let head = new ListNode(4);
head.next = new ListNode(5);
head.next.next = new ListNode(1);
head.next.next.next = new ListNode(9);

// We have access only to the node containing 5
let nodeToDelete = head.next;

deleteNode(nodeToDelete);

// Print the list
let current = head;
let result = [];

while (current !== null) {
    result.push(current.value);
    current = current.next;
}

console.log(result); // [4, 1, 9]
