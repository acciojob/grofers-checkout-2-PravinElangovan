function calculateTotal() {
  const prices = Array.from(document.querySelectorAll('[data-ns-test="prices"]')).map((price) => parseFloat(price.textContent));
  const grandTotal = document.querySelector('[data-ns-test="grandTotal"]');
  
  // Check if the number of prices is correct
  if (prices.length !== 4) {
    console.error('Incorrect number of prices');
    return;
  }
  
  const totalPrice = prices.reduce((acc, price) => acc + price, 0);
  
  // Check if the total price is correct
  if (totalPrice !== parseFloat(grandTotal.textContent)) {
    console.error('Incorrect total price');
    return;
  }
  
  // Add a new row to the table with the total price
  const newRow = document.createElement('tr');
  const newCell = document.createElement('td');
  newCell.textContent = `Total: ${totalPrice.toFixed(2)}`;
  newRow.appendChild(newCell);
  grandTotal.parentElement.parentElement.appendChild(newRow);
}

calculateTotal();
