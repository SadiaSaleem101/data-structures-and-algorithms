
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function sortList(head) {
    // Empty list or one node is already sorted
    if (head === null || head.next === null) {
        return head;
    }

    // Find the middle of the list
    let slow = head;
    let fast = head.next;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Split the list into two halves
    let rightHead = slow.next;
    slow.next = null;

    // Sort both halves
    let left = sortList(head);
    let right = sortList(rightHead);

    // Merge the sorted halves
    return merge(left, right);
}

function merge(left, right) {
    let dummy = new ListNode(0);
    let current = dummy;

    while (left !== null && right !== null) {
        if (left.value <= right.value) {
            current.next = left;
            left = left.next;
        } else {
            current.next = right;
            right = right.next;
        }

        current = current.next;
    }

    // Attach remaining nodes
    current.next = left !== null ? left : right;

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

console.log(toArray(sortList(createList([4, 2, 1, 3]))));
// [1, 2, 3, 4]

console.log(toArray(sortList(createList([5, 1, 4, 2, 3]))));
// [1, 2, 3, 4, 5]

console.log(toArray(sortList(createList([]))));
// []
