
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function nthNodeFromEnd(head, n) {
    let slow = head;
    let fast = head;

    // Move fast n nodes ahead
    for (let i = 0; i < n; i++) {
        if (fast === null) {
            return null; // n is greater than list length
        }

        fast = fast.next;
    }

    // Move both pointers together
    while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    return slow ? slow.value : null;
}

// Create: 10 → 20 → 30 → 40 → 50
const head = new ListNode(10);
head.next = new ListNode(20);
head.next.next = new ListNode(30);
head.next.next.next = new ListNode(40);
head.next.next.next.next = new ListNode(50);

console.log(nthNodeFromEnd(head, 2));
console.log(nthNodeFromEnd(head, 1));
console.log(nthNodeFromEnd(head, 5));
console.log(nthNodeFromEnd(head, 6));
