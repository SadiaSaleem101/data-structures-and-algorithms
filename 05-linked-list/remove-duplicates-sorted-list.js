
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function removeDuplicates(head) {
    let current = head;

    while (current !== null && current.next !== null) {
        if (current.value === current.next.value) {
            // Skip the duplicate node
            current.next = current.next.next;
        } else {
            // Move to the next node
            current = current.next;
        }
    }

    return head;
}

// Helper function to create a linked list
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

// Helper function to convert the list to an array
function toArray(head) {
    let result = [];

    while (head !== null) {
        result.push(head.value);
        head = head.next;
    }

    return result;
}

let head = createList([1, 1, 2, 3, 3]);
head = removeDuplicates(head);

console.log(toArray(head)); // [1, 2, 3]

let head2 = createList([1, 1, 1, 1]);
head2 = removeDuplicates(head2);

console.log(toArray(head2)); // [1]

let head3 = createList([]);
console.log(toArray(removeDuplicates(head3))); // []
