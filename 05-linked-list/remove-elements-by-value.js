
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function removeElements(head, val) {
    // Dummy node handles cases where the head must be removed
    const dummy = new ListNode(0);
    dummy.next = head;

    let current = dummy;

    while (current.next !== null) {
        if (current.next.value === val) {
            // Skip the matching node
            current.next = current.next.next;
        } else {
            current = current.next;
        }
    }

    return dummy.next;
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

// Create: 1 → 2 → 6 → 3 → 6 → 4 → 5 → 6
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(6);
head.next.next.next = new ListNode(3);
head.next.next.next.next = new ListNode(6);
head.next.next.next.next.next = new ListNode(4);
head.next.next.next.next.next.next = new ListNode(5);
head.next.next.next.next.next.next.next = new ListNode(6);

const result = removeElements(head, 6);
printList(result);
