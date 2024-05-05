const expenseNameInput = document.getElementById('expenseName');
const expenseAmountInput = document.getElementById('expenseAmount');
const expenseCategorySelect = document.getElementById('expenseCategory');
const addExpenseBtn = document.getElementById('addExpenseBtn');
const expenseList = document.getElementById('expenseList');
const totalExpenses = document.getElementById('totalExpenses');

let expenses = [];

addExpenseBtn.addEventListener('click', addExpense);

function addExpense() {
    const name = expenseNameInput.value.trim();
    const amount = parseFloat(expenseAmountInput.value);
    const category = expenseCategorySelect.value;

    if (name === '' || isNaN(amount) || category === '') {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    const expense = {
        name: name,
        amount: amount,
        category: category
    };

    expenses.push(expense);

    updateExpenseList();
    updateTotalExpenses();

    // Limpar os campos após adicionar a despesa
    expenseNameInput.value = '';
    expenseAmountInput.value = '';
    expenseCategorySelect.value = '';
}

function updateExpenseList() {
    expenseList.innerHTML = '';
    expenses.forEach(expense => {
        const listItem = document.createElement('div');
        listItem.classList.add('expense-item');
        listItem.innerHTML = `
            <span>${expense.name}</span>
            <span>R$ ${expense.amount.toFixed(2)}</span>
            <span>${expense.category}</span>
        `;
        expenseList.appendChild(listItem);
    });
}

function updateTotalExpenses() {
    const total = expenses.reduce((acc, curr) => acc + curr.amount, 0);
    totalExpenses.textContent = `Total de Despesas: R$ ${total.toFixed(2)}`;
}
