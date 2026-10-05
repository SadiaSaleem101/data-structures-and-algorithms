
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function swapPairs(head) {
    let dummy = new ListNode(0);
    dummy.next = head;

    let previous = dummy;

    while (previous.next !== null &&
           previous.next.next !== null) {

        let first = previous.next;
        let second = first.next;

        // Swap the two nodes
        first.next = second.next;
        second.next = first;
        previous.next = second;

        // Move to the next pair
        previous = first;
    }

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

console.log(toArray(swapPairs(createList([1, 2, 3, 4]))));
// [2, 1, 4, 3]

console.log(toArray(swapPairs(createList([1, 2, 3, 4, 5]))));
// [2, 1, 4, 3, 5]

console.log(toArray(swapPairs(createList([1]))));
// [1]

console.log(toArray(swapPairs(null)));
// []
