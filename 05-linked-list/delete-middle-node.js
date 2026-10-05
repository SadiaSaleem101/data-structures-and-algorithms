
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function deleteMiddle(head) {
    // Handle an empty list or a single node
    if (head === null || head.next === null) {
        return null;
    }

    let slow = head;
    let fast = head;
    let previous = null;

    // Find the middle node
    while (fast !== null && fast.next !== null) {
        previous = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    // Remove the middle node
    previous.next = slow.next;

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

// Create: 1 → 2 → 3 → 4 → 5
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);
head.next.next.next.next = new ListNode(5);

const result = deleteMiddle(head);
printList(result);
