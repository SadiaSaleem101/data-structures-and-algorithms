
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function rotateRight(head, k) {
    if (head === null || head.next === null || k === 0) {
        return head;
    }

    // Find the length and the last node
    let length = 1;
    let tail = head;

    while (tail.next !== null) {
        tail = tail.next;
        length++;
    }

    // Avoid unnecessary rotations
    k = k % length;

    if (k === 0) {
        return head;
    }

    // Connect the tail to the head to form a circle
    tail.next = head;

    // Find the new tail
    let stepsToNewTail = length - k;
    let newTail = head;

    for (let i = 1; i < stepsToNewTail; i++) {
        newTail = newTail.next;
    }

    // Break the circle
    let newHead = newTail.next;
    newTail.next = null;

    return newHead;
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

console.log(toArray(rotateRight(createList([1, 2, 3, 4, 5]), 2)));
// [4, 5, 1, 2, 3]

console.log(toArray(rotateRight(createList([0, 1, 2]), 4)));
// [2, 0, 1]

console.log(toArray(rotateRight(createList([1, 2, 3]), 3)));
// [1, 2, 3]

console.log(toArray(rotateRight(null, 2)));
// []
