var state = {
    balance: 100,
    income: 400,
    expense: 100,
    transactions: [
        { name: 'Salary', amount: 5000, type: 'income' },
        { name: 'Buy Grocery', amount: 50, type: 'expense'},
        { name: 'Buy Guitar', amount: 500, type: 'expense'}
    ]
}

var balanceEl = document.querySelector('#balance');
var incomeEl = document.querySelector('#income');
var expenseEl = document.querySelector('#expense');
var transactionEl = document.querySelector('#transaction');

function init() {
    balanceEl.innerHTML = `$${state.balance}`;
    incomeEl.innerHTML = `$${state.income}`;
    expenseEl.innerHTML = `$${state.expense}`;

    var transactionsEl;

    for (var i = 0; i < state.transactions.length; i++) {
        item = state.transactions[i];
        transactionEl = document.createElement('li');
        transactionEl.append(item.name[i]);

        transactionEl.appendChild(transactionEl);

        containerEl = document.createElement('div');
        amountEl = document.createElement('span');
        if (item.type === 'income') {
            amountEl.classList.add('income-ant');
        } else if (item.type === 'expense') {
            amountEl.classList.add('expense-ant')
        }

        amountEl.innerHTML = '$${item.amout'};

        console.log(amountEl);

        containerEl.appendChild(amountEl);
    }



init();