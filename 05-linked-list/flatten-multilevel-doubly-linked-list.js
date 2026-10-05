
class Node {
    constructor(value) {
        this.value = value;
        this.prev = null;
        this.next = null;
        this.child = null;
    }
}

function flatten(head) {
    if (head === null) return null;

    const stack = [head];
    let previous = null;

    while (stack.length > 0) {
        const current = stack.pop();

        if (current.next !== null) {
            stack.push(current.next);
        }

        if (current.child !== null) {
            stack.push(current.child);
            current.child = null;
        }

        current.prev = previous;

        if (previous !== null) {
            previous.next = current;
        }

        previous = current;
    }

    previous.next = null;
    return head;
}

// Create the main list: 1 <-> 2 <-> 3
const node1 = new Node(1);
const node2 = new Node(2);
const node3 = new Node(3);

node1.next = node2;
node2.prev = node1;
node2.next = node3;
node3.prev = node2;

// Create child list: 7 <-> 8
const node7 = new Node(7);
const node8 = new Node(8);

node7.next = node8;
node8.prev = node7;

// Attach the child list to node 2
node2.child = node7;

const result = flatten(node1);

// Print the flattened list
let current = result;
const values = [];

while (current !== null) {
    values.push(current.value);
    current = current.next;
}

console.log(values);
