
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function twoSumLinkedList(head, target) {
    const seen = new Set();
    let current = head;

    while (current !== null) {
        const complement = target - current.value;

        // Check whether the required value was seen
        if (seen.has(complement)) {
            return [complement, current.value];
        }

        seen.add(current.value);
        current = current.next;
    }

    return [];
}

// Create: 2 → 7 → 11 → 15
const head = new ListNode(2);
head.next = new ListNode(7);
head.next.next = new ListNode(11);
head.next.next.next = new ListNode(15);

console.log(twoSumLinkedList(head, 9));
console.log(twoSumLinkedList(head, 20));
