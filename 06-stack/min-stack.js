
class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(value) {
        this.stack.push(value);

        // Track the minimum value so far
        if (
            this.minStack.length === 0 ||
            value <= this.getMin()
        ) {
            this.minStack.push(value);
        }
    }

    pop() {
        if (this.stack.length === 0) {
            return null;
        }

        const value = this.stack.pop();

        // Remove the minimum too if it matches
        if (value === this.getMin()) {
            this.minStack.pop();
        }

        return value;
    }

    top() {
        if (this.stack.length === 0) {
            return null;
        }

        return this.stack[this.stack.length - 1];
    }

    getMin() {
        if (this.minStack.length === 0) {
            return null;
        }

        return this.minStack[this.minStack.length - 1];
    }
}

// Test the MinStack
const stack = new MinStack();

stack.push(5);
stack.push(3);
stack.push(7);
stack.push(2);

console.log(stack.getMin()); // 2
console.log(stack.top());    // 2

stack.pop();

console.log(stack.getMin()); // 3
console.log(stack.top());    // 7
