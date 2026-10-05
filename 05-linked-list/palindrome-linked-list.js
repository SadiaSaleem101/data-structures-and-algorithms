
class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function isPalindrome(head) {
    if (head === null || head.next === null) {
        return true;
    }

    // Find the middle of the list
    let slow = head;
    let fast = head;

    while (fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    // Reverse the second half
    let previous = null;
    let current = slow.next;

    while (current !== null) {
        let nextNode = current.next;
        current.next = previous;
        previous = current;
        current = nextNode;
    }

    // Compare both halves
    let first = head;
    let second = previous;

    while (second !== null) {
        if (first.value !== second.value) {
            return false;
        }

        first = first.next;
        second = second.next;
    }

    return true;
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

console.log(isPalindrome(createList([1, 2, 2, 1])));
// true

console.log(isPalindrome(createList([1, 2, 3])));
// false

console.log(isPalindrome(createList([1, 2, 3, 2, 1])));
// true

console.log(isPalindrome(createList([])));
// true
