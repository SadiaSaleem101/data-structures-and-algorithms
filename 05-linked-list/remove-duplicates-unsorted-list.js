
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function removeDuplicates(head) {
    let seen = new Set();
    let current = head;
    let previous = null;

    while (current !== null) {
        if (seen.has(current.value)) {
            // Remove the duplicate node
            previous.next = current.next;
        } else {
            seen.add(current.value);
            previous = current;
        }

        current = current.next;
    }

    return head;
}

function createList(values) {
    let head = null;
    let tail = null;

    for (let value of values) {
        let node = new ListNode(value);

        if (head === null) {
            head = node;
            tail = node;
        } else {
            tail.next = node;
            tail = node;
        }
    }

    return head;
}

function toArray(head) {
    let result = [];

    while (head !== null) {
        result.push(head.value);
        head = head.next;
    }

    return result;
}

let head = createList([3, 1, 3, 2, 1]);

head = removeDuplicates(head);

console.log(toArray(head)); // [3, 1, 2]

let head2 = createList([5, 5, 5]);
console.log(toArray(removeDuplicates(head2))); // [5]

let head3 = createList([]);
console.log(toArray(removeDuplicates(head3))); // []
