document.addEventListener('DOMContentLoaded', () => {
    // ... vorhandener Code ...

    addExpenseButton.addEventListener('click', () => {
        const expenseItem = document.createElement('div');
        expenseItem.className = 'expense-item';
        expenseItem.innerHTML = `
            <input type="text" name="expense-name" placeholder="Expense Name">
            <input type="number" name="expense-amount" placeholder="Amount">
            <button type="button" class="edit-expense">Edit</button> <!-- Neu hinzugefügt -->
        `;
        expensesList.appendChild(expenseItem);

        // Event Listener für Edit Button
        expenseItem.querySelector('.edit-expense').addEventListener('click', () => {
            const name = prompt('Edit Expense Name:', expenseItem.querySelector('input[name="expense-name"]').value);
            const amount = prompt('Edit Expense Amount:', expenseItem.querySelector('input[name="expense-amount"]').value);
            if (name !== null) expenseItem.querySelector('input[name="expense-name"]').value = name;
            if (amount !== null) expenseItem.querySelector('input[name="expense-amount"]').value = amount;
        });
    });
});