import { user } from "../../modules/user_data"

let userEmail = document.querySelector('.user_email')
userEmail.innerHTML = user?.email

let table = document.createElement('table');

let th = document.createElement('tr');
let thText = ['ID', 'Отправлено с кошелька', 'Категория', 'Сумма транзации', 'Когда'];

thText.forEach(text => {
    let header = document.createElement('th');
    header.innerHTML = text;
    th.append(header);
});

table.append(th);

for (let i = 0; i < 14; i++) {
    let tr = document.createElement('tr');
    let tdText = ['1232312', 'VISA', 'Автомобиль', '414,000,000', '4 дня назад'];

    tdText.forEach(text => {
        let td = document.createElement('td');
        td.innerHTML = text;
        tr.append(td);
    });

    table.append(tr);
}

let transactions = document.querySelector('.transactions');
transactions.append(table);