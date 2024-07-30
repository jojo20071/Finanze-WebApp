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

document.addEventListener('DOMContentLoaded', () => {
    // ... vorhandener Code ...

    // Neue Event Listener für Cancel Buttons
    document.getElementById('login-cancel').addEventListener('click', () => {
        document.getElementById('loginForm').reset();
    });

    document.getElementById('register-cancel').addEventListener('click', () => {
        document.getElementById('registerForm').reset();
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const budgetCtx = document.getElementById('budgetChart').getContext('2d');
    const savingsCtx = document.getElementById('savingsChart').getContext('2d');
    const investmentsCtx = document.getElementById('investmentsChart').getContext('2d');
    const debtsCtx = document.getElementById('debtsChart').getContext('2d');

    // Beispielhafte Daten werden aus dem Formular bezogen
    const income = parseFloat(document.getElementById('income').value) || 1000;
    const totalExpenses = Array.from(document.getElementById('expenses-list').getElementsByClassName('expense-item'))
        .reduce((sum, item) => sum + (parseFloat(item.querySelector('input[name="expense-amount"]').value) || 0), 500);

    const budgetData = {
        labels: ['Income', 'Expenses'],
        datasets: [{
            label: 'Budget',
            data: [income, totalExpenses],
            backgroundColor: ['green', 'red']
        }]
    };

    const budgetChart = new Chart(budgetCtx, {
        type: 'pie',
        data: budgetData
    });

    // Beispielhafte Daten für andere Charts
    const savingsData = {
        labels: ['Goal 1', 'Goal 2'],
        datasets: [{
            label: 'Savings Goals',
            data: [300, 200],
            backgroundColor: ['blue', 'orange']
        }]
    };

    const savingsChart = new Chart(savingsCtx, {
        type: 'bar',
        data: savingsData
    });

    const investmentsData = {
        labels: ['Investment 1', 'Investment 2'],
        datasets: [{
            label: 'Investments',
            data: [400, 600],
            backgroundColor: ['purple', 'yellow']
        }]
    };

    const investmentsChart = new Chart(investmentsCtx, {
        type: 'line',
        data: investmentsData
    });
