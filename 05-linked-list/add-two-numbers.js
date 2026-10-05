
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function addTwoNumbers(l1, l2) {
    let dummy = new ListNode(0);
    let current = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry > 0) {
        let sum = carry;

        if (l1 !== null) {
            sum += l1.value;
            l1 = l1.next;
        }

        if (l2 !== null) {
            sum += l2.value;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);

        current.next = new ListNode(sum % 10);
        current = current.next;
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

let l1 = createList([2, 4, 3]);
let l2 = createList([5, 6, 4]);

console.log(toArray(addTwoNumbers(l1, l2)));
// [7, 0, 8]

// Example with a carry
let l3 = createList([9, 9]);
let l4 = createList([1]);

console.log(toArray(addTwoNumbers(l3, l4)));
// [0, 0, 1]
