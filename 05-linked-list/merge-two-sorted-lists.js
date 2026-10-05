
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function mergeTwoLists(list1, list2) {
    let dummy = new ListNode(0);
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.value <= list2.value) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }

        current = current.next;
    }

    // Attach the remaining nodes
    if (list1 !== null) {
        current.next = list1;
    } else {
        current.next = list2;
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

let list1 = createList([1, 3, 5]);
let list2 = createList([2, 4, 6]);

let merged = mergeTwoLists(list1, list2);

console.log(toArray(merged));
// [1, 2, 3, 4, 5, 6]

// Different length lists
let list3 = createList([1, 2]);
let list4 = createList([3, 4, 5]);

console.log(toArray(mergeTwoLists(list3, list4)));
// [1, 2, 3, 4, 5]
