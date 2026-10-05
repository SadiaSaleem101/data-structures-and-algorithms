
function calculate(s) {
  const stack = [];
  let result = 0;
  let number = 0;
  let sign = 1;

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char >= "0" && char <= "9") {
      number = number * 10 + Number(char);
    } else if (char === "+") {
      result += sign * number;
      number = 0;
      sign = 1;
    } else if (char === "-") {
      result += sign * number;
      number = 0;
      sign = -1;
    } else if (char === "(") {
      stack.push(result);
      stack.push(sign);

      result = 0;
      sign = 1;
    } else if (char === ")") {
      result += sign * number;
      number = 0;

      result *= stack.pop();
      result += stack.pop();
    }
  }

  return result + sign * number;
}

console.log(calculate("(1+(4+5+2)-3)+(6+8)"));
// 23
