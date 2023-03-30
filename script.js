// Get all the prices from the table
const prices = document.querySelectorAll('[data-ns-test="prices"]');

// Calculate the sum of prices
let sum = 0;
prices.forEach(price => {
  sum += parseInt(price.textContent);
});

// Set the sum as the value of the last cell
const grandTotal = document.querySelector('[data-ns-test="grandTotal"]');
grandTotal.textContent = sum.toString();
