let totalAmount = 0;

function addExpense() {
  const descInput = document.getElementById("description");
  const amountInput = document.getElementById("amount");
  const list = document.getElementById("list");
  const totalDisplay = document.getElementById("total");

  const description = descInput.value.trim();
  const amount = parseFloat(amountInput.value);

  if (description === "" || isNaN(amount) || amount <= 0) {
    alert("Please enter a valid description and amount.");
    return;
  }

  const li = document.createElement("li");
  li.textContent = `${description} - ₹${amount}`;
  list.appendChild(li);

  totalAmount += amount;
  totalDisplay.textContent = totalAmount.toFixed(2);

  descInput.value = "";
  amountInput.value = "";
}
