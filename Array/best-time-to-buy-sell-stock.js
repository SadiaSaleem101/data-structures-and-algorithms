// Best Time to Buy and Sell Stock
// Find the maximum profit from buying and selling a stock once.

// Example:
// Input: [7, 1, 5, 3, 6, 4]
// Output: 5

function maxProfit(prices) {
    let lowestPrice = prices[0];
    let maxProfit = 0;

    // Check each day's price
    for (let i = 1; i < prices.length; i++) {

        // Update the lowest price
        if (prices[i] < lowestPrice) {
            lowestPrice = prices[i];
        }

        // Calculate today's profit
        let profit = prices[i] - lowestPrice;

        // Update maximum profit
        if (profit > maxProfit) {
            maxProfit = profit;
        }
    }

    return maxProfit;
}

// Example
console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5

// Time Complexity: O(n)
// Space Complexity: O(1)
