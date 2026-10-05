
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function getIntersectionNode(headA, headB) {
    const visited = new Set();
    let current = headA;

    // Store every node from List A
    while (current !== null) {
        visited.add(current);
        current = current.next;
    }

    // Find the first shared node in List B
    current = headB;

    while (current !== null) {
        if (visited.has(current)) {
            return current;
        }

        current = current.next;
    }

    return null;
}

// Shared nodes: 8 → 9
const shared = new ListNode(8);
shared.next = new ListNode(9);

// List A: 1 → 2 → 8 → 9
const a1 = new ListNode(1);
a1.next = new ListNode(2);
a1.next.next = shared;

// List B: 4 → 8 → 9
const b1 = new ListNode(4);
b1.next = shared;

const intersection = getIntersectionNode(a1, b1);

console.log(intersection ? intersection.value : null);
