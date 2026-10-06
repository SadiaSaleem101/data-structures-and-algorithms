
function isAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }

  const frequency = new Map();

  for (const char of s) {
    frequency.set(char, (frequency.get(char) || 0) + 1);
  }

  for (const char of t) {
    if (!frequency.has(char) || frequency.get(char) === 0) {
      return false;
    }

    frequency.set(char, frequency.get(char) - 1);
  }

  return true;
}

console.log(isAnagram("anagram", "nagaram")); // true
console.log(isAnagram("rat", "car"));         // false
