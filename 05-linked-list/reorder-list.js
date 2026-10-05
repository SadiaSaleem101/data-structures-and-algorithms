
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function reorderList(head) {
    if (head === null || head.next === null) {
        return head;
    }

    // Step 1: Find the middle
    let slow = head;
    let fast = head;

    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Step 2: Reverse the second half
    let current = slow.next;
    slow.next = null;
    let previous = null;

    while (current !== null) {
        let nextNode = current.next;
        current.next = previous;
        previous = current;
        current = nextNode;
    }

    // Step 3: Merge the two halves alternately
    let first = head;
    let second = previous;

    while (second !== null) {
        let nextFirst = first.next;
        let nextSecond = second.next;

        first.next = second;
        second.next = nextFirst;

        first = nextFirst;
        second = nextSecond;
    }

    return head;
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

console.log(toArray(reorderList(createList([1, 2, 3, 4, 5]))));
// [1, 5, 2, 4, 3]

console.log(toArray(reorderList(createList([1, 2, 3, 4]))));
// [1, 4, 2, 3]

console.log(toArray(reorderList(createList([1]))));
// [1]
