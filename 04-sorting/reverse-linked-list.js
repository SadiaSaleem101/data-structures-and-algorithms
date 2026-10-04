
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function reverseLinkedList(head) {
    let previous = null;
    let current = head;

    while (current !== null) {
        let nextNode = current.next; // Save the next node
        current.next = previous;     // Reverse the link
        previous = current;          // Move previous forward
        current = nextNode;          // Move current forward
    }

    return previous;
}

// Helper function to create a linked list
function createLinkedList(values) {
    let head = null;
    let tail = null;

    for (let value of values) {
        let node = new ListNode(value);

        if (head === null) {
            head = node;
            tail = node;
        } else {
            tail.next = node;
            tail = node;
        }
    }

    return head;
}

// Helper function to print the list as an array
function toArray(head) {
    let result = [];

    while (head !== null) {
        result.push(head.value);
        head = head.next;
    }

    return result;
}

let head = createLinkedList([1, 2, 3, 4, 5]);
head = reverseLinkedList(head);

console.log(toArray(head)); // [5, 4, 3, 2, 1]
console.log(toArray(reverseLinkedList(null))); // []
