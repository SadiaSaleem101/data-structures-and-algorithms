
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function partitionList(head, x) {
    let lessDummy = new ListNode(0);
    let greaterDummy = new ListNode(0);

    let less = lessDummy;
    let greater = greaterDummy;
    let current = head;

    while (current !== null) {
        if (current.value < x) {
            less.next = current;
            less = less.next;
        } else {
            greater.next = current;
            greater = greater.next;
        }

        current = current.next;
    }

    // End the second list
    greater.next = null;

    // Join both partitions
    less.next = greaterDummy.next;

    return lessDummy.next;
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
    toArray(partitionList(createList([1, 4, 3, 2, 5, 2]), 3))
);
// [1, 2, 2, 4, 3, 5]

console.log(
    toArray(partitionList(createList([5, 1, 2, 6]), 4))
);
// [1, 2, 5, 6]

console.log(
    toArray(partitionList(createList([]), 3))
);
// []
