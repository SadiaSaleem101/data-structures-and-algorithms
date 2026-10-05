
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    // Add an element to the top
    push(value) {
        const newNode = new Node(value);

        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    // Remove and return the top element
    pop() {
        if (this.isEmpty()) {
            return null;
        }

        const value = this.top.value;
        this.top = this.top.next;
        this.size--;

        return value;
    }

    // View the top element
    peek() {
        return this.isEmpty() ? null : this.top.value;
    }

    // Check whether the stack is empty
    isEmpty() {
        return this.top === null;
    }

    // Return the number of elements
    getSize() {
        return this.size;
    }
}

// Test the stack
const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.getSize());
console.log(stack.isEmpty());
