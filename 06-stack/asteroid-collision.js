
function asteroidCollision(asteroids) {
  const stack = [];

  for (const asteroid of asteroids) {
    let alive = true;

    while (
      alive &&
      asteroid < 0 &&
      stack.length > 0 &&
      stack[stack.length - 1] > 0
    ) {
      const top = stack[stack.length - 1];

      if (top < -asteroid) {
        stack.pop();
      } else if (top === -asteroid) {
        stack.pop();
        alive = false;
      } else {
        alive = false;
      }
    }

    if (alive) {
      stack.push(asteroid);
    }
  }

  return stack;
}

console.log(asteroidCollision([5, 10, -5]));
// [5, 10]

console.log(asteroidCollision([8, -8]));
// []

console.log(asteroidCollision([10, 2, -5]));
// [10]
