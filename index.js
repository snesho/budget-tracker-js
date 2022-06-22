var state = {
    balance: 100,
    income: 1200,
    expense: 200,
    transaction: [
        { name: 'Salary', amount: 5000, type: 'income' },
        { name: 'Buy Grocery', amount: 50, type: 'expense'},
        { name: 'Buy Guitar', amount: 500, type: 'expense'}
    ]
}

var balanceEl = document.querySelector('#balance');
var incomeEl = document.querySelector('#income');
var expenseEl = document.querySelector('#expense');

function init() {
    balanceEl.innerHTML = `$${state.balance}`;
    incomeEl.innerHTML = `$${state.income}`;
    expenseEl.innerHTML = `$${state.expense}`;
}


init();