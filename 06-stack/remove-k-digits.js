
function removeKdigits(num, k) {
  const stack = [];

  for (const digit of num) {
    while (
      k > 0 &&
      stack.length > 0 &&
      stack[stack.length - 1] > digit
    ) {
      stack.pop();
      k--;
    }

    stack.push(digit);
  }

  // If removals remain, remove digits from the end.
  while (k > 0) {
    stack.pop();
    k--;
  }

  // Remove leading zeros.
  const result = stack.join("").replace(/^0+/, "");

  return result || "0";
}

console.log(removeKdigits("1432219", 3));
// "1219"

console.log(removeKdigits("10200", 1));
// "200"

console.log(removeKdigits("10", 2));
// "0"
