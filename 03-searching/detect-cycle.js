
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function hasCycle(head) {
    let slow = head;
    let fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;       // Move one step
        fast = fast.next.next;  // Move two steps

        if (slow === fast) {
            return true;
        }
    }

    return false;
}

// Example 1: List with a cycle
let head1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);
let node4 = new ListNode(4);

head1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node2; // Creates a cycle

console.log(hasCycle(head1)); // true

// Example 2: List without a cycle
let head2 = new ListNode(1);
head2.next = new ListNode(2);
head2.next.next = new ListNode(3);

console.log(hasCycle(head2)); // false

// Example 3: Empty list
console.log(hasCycle(null)); // false
