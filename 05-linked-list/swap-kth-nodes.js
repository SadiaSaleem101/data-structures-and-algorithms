
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function swapKthNodes(head, k) {
    if (head === null || k <= 0) return head;

    let first = head;

    // Find the kth node from the beginning
    for (let i = 1; i < k; i++) {
        if (first.next === null) return head;
        first = first.next;
    }

    let second = head;
    let fast = first;

    // Move fast to the end; second reaches kth from end
    while (fast.next !== null) {
        fast = fast.next;
        second = second.next;
    }

    // Swap the values
    [first.value, second.value] = [second.value, first.value];

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

swapKthNodes(head, 2);
printList(head);
