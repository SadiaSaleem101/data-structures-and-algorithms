
class MyCircularQueue {
    constructor(k) {
        this.capacity = k;
        this.queue = new Array(k);
        this.front = 0;
        this.rear = -1;
        this.size = 0;
    }

    enQueue(value) {
        if (this.isFull()) {
            return false;
        }

        // Wrap around to the beginning when necessary
        this.rear = (this.rear + 1) % this.capacity;
        this.queue[this.rear] = value;
        this.size++;

        return true;
    }

    deQueue() {
        if (this.isEmpty()) {
            return false;
        }

        this.front = (this.front + 1) % this.capacity;
        this.size--;

        return true;
    }

    Front() {
        return this.isEmpty()
            ? -1
            : this.queue[this.front];
    }

    Rear() {
        return this.isEmpty()
            ? -1
            : this.queue[this.rear];
    }

    isEmpty() {
        return this.size === 0;
    }

    isFull() {
        return this.size === this.capacity;
    }
}

// Test the circular queue
const queue = new MyCircularQueue(3);

console.log(queue.enQueue(10)); // true
console.log(queue.enQueue(20)); // true
console.log(queue.enQueue(30)); // true
console.log(queue.enQueue(40)); // false

console.log(queue.Front());    // 10
console.log(queue.Rear());     // 30

console.log(queue.deQueue());  // true
console.log(queue.enQueue(40));// true

console.log(queue.Front());    // 20
console.log(queue.Rear());     // 40
