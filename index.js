var state = {
    balance: 100,
    income: 400,
    expense: 100,
    transactions: [
        { name:'Salary', amount: 5000, type: 'incme'},
        { name:' Buy Grocery', amount: 50, type: 'expense'},
        { name:'Buy Guitar ', amount: 500, type: 'expense'},
    ]
}

var balanceEl = document.querySelector('#balance');
var incomeEl = document.querySelector('#income');
var expenseEl = document.querySelector('#expense');
var transactionEl = document.querySelector('#transaction');
var incomeBtnEl = document.querySelector('#incomeBtn');
var expenseBtnEl = document.querySelector('#expenseBtn');
var nameInputEl = document.querySelector('#name');
var amountInputEl = document.querySelector('#amount');

function init() {
    updateState();
    initListeners();
}

function initListeners() {
    incomeBtnEl.addEventListener('click', onAddIncomeClick);
    expenseBtnEl.addEventListener('click', onAddExpenseClick);
}

// DRY - Do not repeat yourself

function onAddIncomeClick() {
    addTransaction(nameInputEl.value, amountInputEl.value, 'income');
}

function addTransaction(name, amount, type) {
    if (name !== '' && amount !== ''){
        var transaction = { 
            name: name,
             amount: perseInt(amount), 
             type: type
        };

        state.transactions.push(transaction);

        updateState();
    } else {
        alert('Please enter valid data')
    }
}
nameInputEl.value = '';
amountInputEl.value = '';
 
function onAddIncomeClick() {
    addTransaction(nameInputEl.value, amountInputEl.value, 'expense')
}

function updateState() {
    var balance = 0,
        income = 0,
        expense = 0,
        item;

for (var i = 0; i < state.transactions.length; i++) {
        item = state.transactions[i];

    if (item.type === 'income') {
        income += item.amount;
      } else if (item.type === 'expense') {
        expense += item.amount;
      }
    }

    balance = income - expense;

    state.balance = balance;
    state.balance = income;
    state.balance = expense;

    render();

}


function render() {
    balanceEl.innerHTML = `$${state.balance}`;
    incomeEl.innerHTML = `$${state.income}`;
    expenseEl.innerHTML = `$${state.expense}`;

    var transactionEl, containerEl, amountEl, item, btnEl;

    transactionEl.innerHTML = '';

    for (var i = 0; i < state.transactions.length; i++){
         item = state.transactions[i];
         transactionEl = document.createElement('li');
         transactionEl.append(item.name);
transactionEl.appendChild(transactionEl);

         containerEl = document.createElement('div');
         amountEl = document.createElement('span');
         if (item.type === 'income') {
            amountEl.classList.add('income-amt');
         } else if (item.type === 'expense') {
            amountEl.classList.add('expense-amt');
         }
         amountEl.innerHTML = `$${item.amount}`;

         containerEl.appendChild(amountEl);

         btnEl = document.createElement('button');
         btnEl.innerHTML = 'X';


        btnEl.addEventListener('click', onDeleteClick);

         containerEl.appendChild(btnEl);

         transactionEl.appendChild(containerEl);
    }
}
 
init();
