document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('budgetForm');
    const resultMessage = document.getElementById('resultMessage');
    const expensesList = document.getElementById('expenses-list');
    const addExpenseButton = document.getElementById('add-expense');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const income = parseFloat(document.getElementById('income').value);
        const expenseElements = expensesList.getElementsByClassName('expense-item');
        let totalExpenses = 0;

        Array.from(expenseElements).forEach(item => {
            const expenseAmount = parseFloat(item.querySelector('input[name="expense-amount"]').value);
            if (!isNaN(expenseAmount) && expenseAmount >= 0) {
                totalExpenses += expenseAmount;
            }
        });

        if (isNaN(income) || income <= 0) {
            resultMessage.textContent = 'Please enter a valid number for income.';
            return;
        }

        const balance = income - totalExpenses;
        if (balance > 0) {
            resultMessage.textContent = `You have a surplus of $${balance.toFixed(2)} this month.`;
            resultMessage.style.color = 'green';
        } else if (balance < 0) {
            resultMessage.textContent = `You have a deficit of $${(-balance).toFixed(2)} this month.`;
            resultMessage.style.color = 'red';
        } else {
            resultMessage.textContent = 'You have a balanced budget this month.';
            resultMessage.style.color = 'blue';
        }
    });

    addExpenseButton.addEventListener('click', () => {
        const expenseItem = document.createElement('div');
        expenseItem.className = 'expense-item';
        expenseItem.innerHTML = `
            <input type="text" name="expense-name" placeholder="Expense Name">
            <input type="number" name="expense-amount" placeholder="Amount">
        `;
        expensesList.appendChild(expenseItem);
    });
});