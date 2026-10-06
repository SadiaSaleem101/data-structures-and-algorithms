
class MyQueue {
  constructor() {
    this.inputStack = [];
    this.outputStack = [];
  }

  push(x) {
    this.inputStack.push(x);
  }

  transfer() {
    if (this.outputStack.length === 0) {
      while (this.inputStack.length > 0) {
        this.outputStack.push(this.inputStack.pop());
      }
    }
  }

  pop() {
    this.transfer();
    return this.outputStack.pop();
  }

  peek() {
    this.transfer();
    return this.outputStack[this.outputStack.length - 1];
  }

  empty() {
    return (
      this.inputStack.length === 0 &&
      this.outputStack.length === 0
    );
  }
}

const queue = new MyQueue();

queue.push(1);
queue.push(2);

console.log(queue.peek());  // 1
console.log(queue.pop());   // 1
console.log(queue.empty()); // false
console.log(queue.pop());   // 2
console.log(queue.empty()); // true
