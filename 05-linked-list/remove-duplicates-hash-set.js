
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function removeDuplicates(head) {
    const seen = new Set();
    let current = head;
    let previous = null;

    while (current !== null) {
        if (seen.has(current.value)) {
            // Skip the duplicate node
            previous.next = current.next;
        } else {
            // Record the value
            seen.add(current.value);
            previous = current;
        }

        current = current.next;
    }

    return head;
}

function printList(head) {
    const values = [];
    let current = head;

    while (current !== null) {
        values.push(current.value);
        current = current.next;
    }

    console.log(values);
}

// Create: 1 → 2 → 3 → 2 → 4 → 1 → 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(2);
head.next.next.next.next = new ListNode(4);
head.next.next.next.next.next = new ListNode(1);
head.next.next.next.next.next.next = new ListNode(5);

removeDuplicates(head);
printList(head);
