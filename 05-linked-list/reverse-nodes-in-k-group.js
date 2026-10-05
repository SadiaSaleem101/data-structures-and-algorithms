
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function reverseKGroup(head, k) {
    if (head === null || k <= 1) {
        return head;
    }

    let dummy = new ListNode(0);
    dummy.next = head;
    let groupPrev = dummy;

    while (true) {
        // Find the kth node in this group
        let kth = groupPrev;

        for (let i = 0; i < k && kth !== null; i++) {
            kth = kth.next;
        }

        // Fewer than k nodes remain
        if (kth === null) {
            break;
        }

        let groupNext = kth.next;

        // Reverse this group
        let previous = groupNext;
        let current = groupPrev.next;

        while (current !== groupNext) {
            let nextNode = current.next;
            current.next = previous;
            previous = current;
            current = nextNode;
        }

        // Connect the reversed group
        let oldGroupStart = groupPrev.next;
        groupPrev.next = kth;
        groupPrev = oldGroupStart;
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

console.log(
    toArray(reverseKGroup(createList([1, 2, 3, 4, 5]), 2))
);
// [2, 1, 4, 3, 5]

console.log(
    toArray(reverseKGroup(createList([1, 2, 3, 4, 5]), 3))
);
// [3, 2, 1, 4, 5]

console.log(
    toArray(reverseKGroup(createList([1, 2, 3]), 1))
);
// [1, 2, 3]
