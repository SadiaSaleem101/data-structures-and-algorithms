
function stockSpan(prices) {
  const n = prices.length;
  const result = new Array(n).fill(0);
  const stack = [];

  for (let i = 0; i < n; i++) {
    while (
      stack.length > 0 &&
      prices[stack[stack.length - 1]] <= prices[i]
    ) {
      stack.pop();
    }

    result[i] = stack.length === 0
      ? i + 1
      : i - stack[stack.length - 1];

    stack.push(i);
  }

  return result;
}

console.log(stockSpan([100, 80, 60, 70, 60, 75, 85]));
// [1, 1, 1, 2, 1, 4, 6]
