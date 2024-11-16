document.addEventListener('DOMContentLoaded', () => {
    const sendForm = document.getElementById('send-form');
    const receiveForm = document.getElementById('receive-form');
    const transactionsList = document.getElementById('transactions-list');

    let transactions = [];

    function addTransaction(transaction) {
        transactions.push(transaction);
        renderTransactions();
    }

    function renderTransactions() {
        transactionsList.innerHTML = '';
        transactions.forEach((transaction, index) => {
            const li = document.createElement('li');
            li.textContent = `${transaction.type}: ${transaction.amount} to ${transaction.to}`;
            transactionsList.appendChild(li);
        });
    }

    sendForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const to = document.getElementById('send-to').value;
        const amount = document.getElementById('send-amount').value;
        addTransaction({ type: 'Send', to, amount });
        sendForm.reset();
    });

    receiveForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const from = document.getElementById('receive-from').value;
        const amount = document.getElementById('receive-amount').value;
        addTransaction({ type: 'Receive', to: from, amount });
        receiveForm.reset();
    });
});
</write_to_file>
