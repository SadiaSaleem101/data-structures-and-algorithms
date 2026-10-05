
class MyDeque {
    constructor(k) {
        this.capacity = k;
        this.queue = new Array(k);
        this.front = 0;
        this.size = 0;
    }

    insertFront(value) {
        if (this.isFull()) return false;

        this.front =
            (this.front - 1 + this.capacity) % this.capacity;

        this.queue[this.front] = value;
        this.size++;

        return true;
    }

    insertLast(value) {
        if (this.isFull()) return false;

        const rear =
            (this.front + this.size) % this.capacity;

        this.queue[rear] = value;
        this.size++;

        return true;
    }

    deleteFront() {
        if (this.isEmpty()) return false;

        this.front = (this.front + 1) % this.capacity;
        this.size--;

        return true;
    }

    deleteLast() {
        if (this.isEmpty()) return false;

        this.size--;
        return true;
    }

    getFront() {
        return this.isEmpty()
            ? -1
            : this.queue[this.front];
    }

    getRear() {
        if (this.isEmpty()) return -1;

        const rear =
            (this.front + this.size - 1) % this.capacity;

        return this.queue[rear];
    }

    isEmpty() {
        return this.size === 0;
    }

    isFull() {
        return this.size === this.capacity;
    }
}

// Test the deque
const deque = new MyDeque(3);

console.log(deque.insertLast(10));  // true
console.log(deque.insertLast(20));  // true
console.log(deque.insertFront(5));  // true

console.log(deque.getFront());      // 5
console.log(deque.getRear());       // 20

console.log(deque.deleteLast());    // true
console.log(deque.getRear());       // 10
console.log(deque.isEmpty());       // false
