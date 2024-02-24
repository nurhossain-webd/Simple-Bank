document.getElementById('deposit').addEventListener('click', function () {
    updateamount('amount-input', 'deposit-balance', true);

    // const amountInput = document.getElementById('amount-input');
    // const amountText = amountInput.value;
    // const amount = parseFloat(amountText);
    // const inputamount = getValue('amount-input');
    // if (inputamount > 0) {
    //     const balance = document.getElementById('deposit-balance');
    //     const balanceText = balance.innerText;
    //     const previousBalance = parseFloat(balanceText);
    //     const balancetotal = inputamount + previousBalance;
    //     balance.innerText = balancetotal;



    // }
})
document.getElementById('Withdraw').addEventListener('click', function () {
    updateamount('withdraw-input', 'withdraw-balance', false);
})



function updateamount(amountInput, previousAmount, addbalance) {
    const amountinput = document.getElementById(amountInput);
    const amountText = amountinput.value;
    const amount = parseFloat(amountText);
    amountinput.value = '';
    if (amount > 0) {
        const balance = document.getElementById(previousAmount);
        const balanceText = balance.innerText;
        const previousBalance = parseFloat(balanceText);
        const balancetotal = amount + previousBalance;
        balance.innerText = balancetotal;
    }
    const previous = document.getElementById('total');
    const totalbalanceText = previous.innerText;
    const previousTotalbalance = parseFloat(totalbalanceText);
    if (addbalance == true) {
        const totalbalance = previousTotalbalance + amount;
        previous.innerText = totalbalance;
    }
    if (addbalance == false) {
        const totalbalance = previousTotalbalance - amount;
        previous.innerText = totalbalance;
    }

}




// separate function 

// function getValue(inputId) {
//     const amountInput = document.getElementById(inputId);
//     const amountText = amountInput.value;
//     const amount = parseFloat(amountText);
//     amountInput.value = '';
//     return amount;
// }