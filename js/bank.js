document.getElementById('btn-deposit').addEventListener('click', function () {
    const depositAmountField = document.getElementById('deposit-field');
    const depositAmount = parseFloat(depositAmountField.value);
    if(isNaN(depositAmount)) {
        alert('Please Enter valid amount');
        depositAmountField.value = '';
        return;
    }
    
    const previousDepositAmountField = document.getElementById('deposit-balance');
    const previousDepositAmount = parseFloat(previousDepositAmountField.innerText);

    const newDepositAmount = depositAmount + previousDepositAmount;
    previousDepositAmountField.innerText = newDepositAmount;

    const previousAccountBalanceField = document.getElementById('account-balance');
    const previousAccountBalance = parseFloat(previousAccountBalanceField.innerText);
    const newAccountBalance = previousAccountBalance + depositAmount;
    previousAccountBalanceField.innerText = newAccountBalance;

    depositAmountField.value = '';
})

document.getElementById('btn-withdraw').addEventListener('click', function() {
    const withdrawAmountField = document.getElementById('withdraw-field');
    const withdrawAmount = parseFloat(withdrawAmountField.value);
    if(isNaN(withdrawAmount)) {
        alert('Please Enter valid amount');
        withdrawAmountField.value = '';
        return;
    }

    const previousWithdrawAmountField = document.getElementById('withdraw-balance');
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountField.innerText);

    const newWithdrawAmount = withdrawAmount + previousWithdrawAmount;
    previousWithdrawAmountField.innerText = newWithdrawAmount;

    const previousAccountBalanceField = document.getElementById('account-balance');
    const previousAccountBalance = parseFloat(previousAccountBalanceField.innerText);

    if(withdrawAmount > previousAccountBalance) {
        alert('Insufficient amount in the account');
        withdrawAmountField.value = '';
        return
    }
    else {
        const newAccountBalance = previousAccountBalance - withdrawAmount;
        previousAccountBalanceField.innerText = newAccountBalance;
    }


    withdrawAmountField.value = '';
})