export function transactions(id, name, cat, sum, time) {
    let lastTransactions = document.createElement('h1')
    lastTransactions.innerHTML = 'Последние транзакции'

    let table = document.createElement('table');

    let th = document.createElement('tr');
    let thText = ['ID', 'Отправлено с кошелька', 'Категория', 'Сумма транзации', 'Когда'];

    thText.forEach(text => {
        let header = document.createElement('th');
        header.innerHTML = text;
        th.append(header);
    });

    table.append(th);


    let tr = document.createElement('tr');
    let tdText = [id, name, cat, sum, time];

    tdText.forEach(text => {
        let td = document.createElement('td');
        td.innerHTML = text;
        tr.append(td);
    });

    table.append(tr);


    let transactions = document.querySelector('.transactions');
    transactions.prepend(lastTransactions, table);
}

