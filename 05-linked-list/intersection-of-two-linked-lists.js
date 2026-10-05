
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function getIntersectionNode(headA, headB) {
    let a = headA;
    let b = headB;

    while (a !== b) {
        // Switch to the other list when reaching the end
        a = a === null ? headB : a.next;
        b = b === null ? headA : b.next;
    }

    return a; // Shared node, or null if no intersection
}

// Build two lists with shared nodes
let shared1 = new ListNode(8);
let shared2 = new ListNode(10);
shared1.next = shared2;

let headA = new ListNode(1);
headA.next = new ListNode(2);
headA.next.next = shared1;

let headB = new ListNode(9);
headB.next = shared1;

let intersection = getIntersectionNode(headA, headB);

console.log(intersection.value); // 8

// Example with no intersection
let list1 = new ListNode(1);
let list2 = new ListNode(2);

console.log(getIntersectionNode(list1, list2)); // null
