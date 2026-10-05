
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function getIntersectionNode(headA, headB) {
    let pointerA = headA;
    let pointerB = headB;

    while (pointerA !== pointerB) {
        pointerA = pointerA === null
            ? headB
            : pointerA.next;

        pointerB = pointerB === null
            ? headA
            : pointerB.next;
    }

    return pointerA;
}

// Shared nodes: 8 → 9
const shared = new ListNode(8);
shared.next = new ListNode(9);

// List A: 1 → 2 → 8 → 9
const headA = new ListNode(1);
headA.next = new ListNode(2);
headA.next.next = shared;

// List B: 4 → 5 → 8 → 9
const headB = new ListNode(4);
headB.next = new ListNode(5);
headB.next.next = shared;

const result = getIntersectionNode(headA, headB);

console.log(result ? result.value : null);
