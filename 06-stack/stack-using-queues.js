
class MyStack {
  constructor() {
    this.queue = [];
  }

  push(x) {
    this.queue.push(x);

    // Move previous elements behind the new element.
    for (let i = 0; i < this.queue.length - 1; i++) {
      this.queue.push(this.queue.shift());
    }
  }

  pop() {
    return this.queue.shift();
  }

  top() {
    return this.queue[0];
  }

  empty() {
    return this.queue.length === 0;
  }
}

const stack = new MyStack();

stack.push(1);
stack.push(2);

console.log(stack.top());   // 2
console.log(stack.pop());   // 2
console.log(stack.empty()); // false
console.log(stack.pop());   // 1
console.log(stack.empty()); // true
