// deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
  const depositInput = inputFieldNumber('deposit-field');

  if ((isNaN(depositInput)) || (depositInput < 0)) {
    alert("Your deposit amount is not a number");
    return;
  }
  else {
    const depositCurrentBalance = currentBalanceNumber('deposit-amount');
    document.getElementById('deposit-amount').innerText = add(depositInput, depositCurrentBalance);
    const currentBalance = currentBalanceNumber('current-balance');
    document.getElementById('current-balance').innerText = add(depositInput, currentBalance);
  }
});

// withdraw button
document.getElementById('btn-withdraw').addEventListener('click', () => {
  const withdrawAmount = inputFieldNumber('withdraw-field');
  const currentBalance = currentBalanceNumber('current-balance');

  if (isNaN(withdrawAmount)) {
    alert("Your withdraw amount is not a number");
    return;
  }

  if (withdrawAmount > currentBalance) {
    alert("There is not enough money in your account.")
    return;
  }
  else {
    const withdrawCurrentBalance = currentBalanceNumber('withdraw-amount');
    document.getElementById('withdraw-amount').innerText = add(withdrawAmount, withdrawCurrentBalance);
    document.getElementById('current-balance').innerText = add(currentBalance, (-1 * withdrawAmount));
  }
});

// input filed: string to number
function inputFieldNumber(id) {
  const amount = document.getElementById(id).value;
  const amountNumber = parseFloat(amount);
  document.getElementById(id).value = '';
  return amountNumber;
}

// amount filed : string to Number
function currentBalanceNumber(id) {
  const currentBalance = document.getElementById(id).innerText;
  const amountNumber = parseFloat(currentBalance);
  document.getElementById(id).value = '';
  return amountNumber;
}

//
function add(input, currentBalance) {
  return (input + currentBalance);
}