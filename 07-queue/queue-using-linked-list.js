
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
        this.size = 0;
    }

    // Add an element to the back
    enqueue(value) {
        const newNode = new Node(value);

        if (this.isEmpty()) {
            this.front = newNode;
            this.rear = newNode;
        } else {
            this.rear.next = newNode;
            this.rear = newNode;
        }

        this.size++;
    }

    // Remove and return the front element
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }

        const value = this.front.value;
        this.front = this.front.next;
        this.size--;

        // Reset rear when the queue becomes empty
        if (this.front === null) {
            this.rear = null;
        }

        return value;
    }

    // View the front element
    peek() {
        return this.isEmpty() ? null : this.front.value;
    }

    isEmpty() {
        return this.front === null;
    }

    getSize() {
        return this.size;
    }
}

// Test the queue
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.getSize());
