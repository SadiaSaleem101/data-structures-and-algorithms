
function reverseQueue(queue) {
  const stack = [];

  // Move elements from the queue to the stack.
  while (queue.length > 0) {
    stack.push(queue.shift());
  }

  // Move elements back into the queue.
  while (stack.length > 0) {
    queue.push(stack.pop());
  }

  return queue;
}

console.log(reverseQueue([1, 2, 3, 4, 5]));
// [5, 4, 3, 2, 1]
