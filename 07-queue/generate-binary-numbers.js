
function generateBinaryNumbers(n) {
  const queue = ["1"];
  const result = [];

  for (let i = 0; i < n; i++) {
    const current = queue.shift();

    result.push(current);

    queue.push(current + "0");
    queue.push(current + "1");
  }

  return result;
}

console.log(generateBinaryNumbers(5));
// ["1", "10", "11", "100", "101"]
