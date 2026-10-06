
function firstNonRepeating(stream) {
  const frequency = new Map();
  const queue = [];
  let result = "";

  for (const char of stream) {
    frequency.set(char, (frequency.get(char) || 0) + 1);
    queue.push(char);

    while (
      queue.length > 0 &&
      frequency.get(queue[0]) > 1
    ) {
      queue.shift();
    }

    result += queue.length > 0 ? queue[0] : "#";
  }

  return result;
}

console.log(firstNonRepeating("aabc"));
// "a#bb"

console.log(firstNonRepeating("abad"));
// "aabb"
