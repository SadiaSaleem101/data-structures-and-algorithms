
function nextGreaterElement(arr) {
  const result = new Array(arr.length).fill(-1);
  const stack = [];

  for (let i = 0; i < arr.length; i++) {
    while (
      stack.length > 0 &&
      arr[i] > arr[stack[stack.length - 1]]
    ) {
      const index = stack.pop();
      result[index] = arr[i];
    }

    stack.push(i);
  }

  return result;
}

console.log(nextGreaterElement([2, 1, 2, 4, 3]));
// [4, 2, 4, -1, -1]
