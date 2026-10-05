
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function removeNthFromEnd(head, n) {
    let dummy = new ListNode(0);
    dummy.next = head;

    let slow = dummy;
    let fast = dummy;

    // Move fast n + 1 steps ahead
    for (let i = 0; i <= n; i++) {
        if (fast === null) {
            throw new Error("n is larger than the list length");
        }
        fast = fast.next;
    }

    // Move both pointers until fast reaches the end
    while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
    }

    // Remove the target node
    slow.next = slow.next.next;

    return dummy.next;
}

function createList(values) {
    let dummy = new ListNode(0);
    let current = dummy;

    for (let value of values) {
        current.next = new ListNode(value);
        current = current.next;
    }

    return dummy.next;
}

function toArray(head) {
    let result = [];

    while (head !== null) {
        result.push(head.value);
        head = head.next;
    }

    return result;
}

let head = createList([1, 2, 3, 4, 5]);

head = removeNthFromEnd(head, 2);

console.log(toArray(head)); // [1, 2, 3, 5]

// Remove the only node
let head2 = createList([10]);

head2 = removeNthFromEnd(head2, 1);

console.log(toArray(head2)); // []
