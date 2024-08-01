document.addEventListener('DOMContentLoaded', () => {
    const budgetCtx = document.getElementById('budgetChart').getContext('2d');
    const savingsCtx = document.getElementById('savingsChart').getContext('2d');
    const investmentsCtx = document.getElementById('investmentsChart').getContext('2d');
    const debtsCtx = document.getElementById('debtsChart').getContext('2d');

    // Example data for charts
    const budgetData = {
        labels: ['Income', 'Expenses'],
        datasets: [{
            label: 'Budget',
            data: [1000, 500],
            backgroundColor: ['green', 'red']
        }]
    };

    const budgetChart = new Chart(budgetCtx, {
        type: 'pie',
        data: budgetData
    });

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

    const debtsData = {
        labels: ['Debt 1', 'Debt 2'],
        datasets: [{
            label: 'Debts',
            data: [700, 300],
            backgroundColor: ['pink', 'brown']
        }]
    };

    const debtsChart = new Chart(debtsCtx, {
        type: 'doughnut',
        data: debtsData
    });
});
