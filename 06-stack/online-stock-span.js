
class StockSpanner {
  constructor() {
    this.stack = [];
  }

  next(price) {
    let span = 1;

    while (
      this.stack.length > 0 &&
      this.stack[this.stack.length - 1][0] <= price
    ) {
      span += this.stack.pop()[1];
    }

    this.stack.push([price, span]);

    return span;
  }
}

const stock = new StockSpanner();

console.log(stock.next(100)); // 1
console.log(stock.next(80));  // 1
console.log(stock.next(60));  // 1
console.log(stock.next(70));  // 2
console.log(stock.next(60));  // 1
console.log(stock.next(75));  // 4
console.log(stock.next(85));  // 6
