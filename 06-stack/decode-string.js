
function decodeString(s) {
  const countStack = [];
  const stringStack = [];

  let currentString = "";
  let currentNumber = 0;

  for (const char of s) {
    if (char >= "0" && char <= "9") {
      currentNumber = currentNumber * 10 + Number(char);
    } else if (char === "[") {
      countStack.push(currentNumber);
      stringStack.push(currentString);

      currentNumber = 0;
      currentString = "";
    } else if (char === "]") {
      const repeatCount = countStack.pop();
      const previousString = stringStack.pop();

      currentString =
        previousString + currentString.repeat(repeatCount);
    } else {
      currentString += char;
    }
  }

  return currentString;
}

console.log(decodeString("3[a2[c]]"));
// "accaccacc"

console.log(decodeString("3[ab]"));
// "ababab"
