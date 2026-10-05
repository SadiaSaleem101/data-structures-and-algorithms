
function dailyTemperatures(temperatures) {
  const n = temperatures.length;
  const result = new Array(n).fill(0);
  const stack = [];

  for (let i = 0; i < n; i++) {
    while (
      stack.length > 0 &&
      temperatures[i] > temperatures[stack[stack.length - 1]]
    ) {
      const previousIndex = stack.pop();
      result[previousIndex] = i - previousIndex;
    }

    stack.push(i);
  }

  return result;
}

console.log(
  dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73])
);
// [1, 1, 4, 2, 1, 1, 0, 0]
