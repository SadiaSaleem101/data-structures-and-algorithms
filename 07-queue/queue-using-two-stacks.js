
class MyQueue {
    constructor() {
        this.inputStack = [];
        this.outputStack = [];
    }

    enqueue(value) {
        this.inputStack.push(value);
    }

    dequeue() {
        this.moveElements();

        if (this.outputStack.length === 0) {
            return null;
        }

        return this.outputStack.pop();
    }

    peek() {
        this.moveElements();

        if (this.outputStack.length === 0) {
            return null;
        }

        return this.outputStack[this.outputStack.length - 1];
    }

    isEmpty() {
        return (
            this.inputStack.length === 0 &&
            this.outputStack.length === 0
        );
    }

    moveElements() {
        // Transfer only when the output stack is empty
        if (this.outputStack.length === 0) {
            while (this.inputStack.length > 0) {
                this.outputStack.push(this.inputStack.pop());
            }
        }
    }
}

// Test the queue
const queue = new MyQueue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.dequeue());

queue.enqueue(40);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.isEmpty());
