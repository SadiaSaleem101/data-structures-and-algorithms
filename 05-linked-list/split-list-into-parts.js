
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function splitListToParts(head, k) {
    let length = 0;
    let current = head;

    // Step 1: Count the nodes
    while (current !== null) {
        length++;
        current = current.next;
    }

    // Step 2: Calculate each part's size
    const baseSize = Math.floor(length / k);
    const extraNodes = length % k;

    const parts = [];
    current = head;

    // Step 3: Split the list
    for (let i = 0; i < k; i++) {
        parts[i] = current;

        // Earlier parts get one extra node
        const partSize = baseSize + (i < extraNodes ? 1 : 0);

        for (let j = 0; j < partSize - 1; j++) {
            current = current.next;
        }

        if (current !== null) {
            const nextPart = current.next;
            current.next = null;
            current = nextPart;
        }
    }

    return parts;
}

// Create: 1 → 2 → 3 → 4 → 5 → 6 → 7 → 8 → 9 → 10
const head = new ListNode(1);
let tail = head;

for (let value = 2; value <= 10; value++) {
    tail.next = new ListNode(value);
    tail = tail.next;
}

const parts = splitListToParts(head, 3);

// Print each part
for (const part of parts) {
    const values = [];
    let current = part;

    while (current !== null) {
        values.push(current.value);
        current = current.next;
    }

    console.log(values);
}
