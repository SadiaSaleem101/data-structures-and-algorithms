
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function addTwoNumbers(l1, l2) {
    const stack1 = [];
    const stack2 = [];

    // Push digits from the first list
    while (l1 !== null) {
        stack1.push(l1.value);
        l1 = l1.next;
    }

    // Push digits from the second list
    while (l2 !== null) {
        stack2.push(l2.value);
        l2 = l2.next;
    }

    let carry = 0;
    let result = null;

    // Process digits from right to left
    while (
        stack1.length > 0 ||
        stack2.length > 0 ||
        carry > 0
    ) {
        const a = stack1.length > 0 ? stack1.pop() : 0;
        const b = stack2.length > 0 ? stack2.pop() : 0;

        const sum = a + b + carry;

        carry = Math.floor(sum / 10);

        const node = new ListNode(sum % 10);
        node.next = result;
        result = node;
    }

    return result;
}

function printList(head) {
    const values = [];
    let current = head;

    while (current !== null) {
        values.push(current.value);
        current = current.next;
    }

    console.log(values);
}

// First number: 7 → 2 → 4 → 3
const l1 = new ListNode(7);
l1.next = new ListNode(2);
l1.next.next = new ListNode(4);
l1.next.next.next = new ListNode(3);

// Second number: 5 → 6 → 4
const l2 = new ListNode(5);
l2.next = new ListNode(6);
l2.next.next = new ListNode(4);

const result = addTwoNumbers(l1, l2);
printList(result);
