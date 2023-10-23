const transactions = [
    { id: 465216, type: `Visa`, date: '2023-01-15', categories: 'Покупка продуктов', sum: 1200 },
    { id: 465216, type: `VISA`, date: '2023-07-14', categories: 'Зачисление зарплаты', sum: 35000 },
    { id: 465216, type: `Visa`, date: '2023-07-12', categories: 'Оплата счета за интернет', sum: 800 },
    { id: 465216, type: `visa`, date: '2023-07-12', categories: 'Оплата счета за интернет', sum: 800 },
    { id: 465216, type: `visa`, date: '2023-07-12', categories: 'Оплата счета за интернет', sum: 800 },
    { id: 465216, type: `visa`, date: '2023-07-12', categories: 'Оплата счета за интернет', sum: 800 },
    { id: 465216, type: `visa`, date: '2023-07-12', categories: 'Оплата счета за интернет', sum: 800 },
    { id: 465216, type: `visa`, date: '2023-07-12', categories: 'Оплата счета за интернет', sum: 800 },
    { id: 465216, type: `visa`, date: '2023-07-12', categories: 'Оплата счета за интернет', sum: 800 },
    { id: 465216, type: `visa`, date: '2023-07-12', categories: 'Оплата счета за интернет', sum: 800 },
    { id: 465216, type: `visa`, date: '2023-07-12', categories: 'Оплата счета за интернет', sum: 800 },
    { id: 465216, type: `visa`, date: '2023-07-12', categories: 'Оплата счета за интернет', sum: 800 },
    { id: 465216, type: `visa`, date: '2023-07-12', categories: 'Оплата счета за интернет', sum: 800 },
    { id: 465216, type: `visa`, date: '2023-07-12', categories: 'Оплата счета за интернет', sum: 800 },
    { id: 465216, type: `visa`, date: '2023-07-12', categories: 'Оплата счета за интернет', sum: 800 },
    { id: 465216, type: `visa`, date: '2023-07-12', categories: 'Оплата счета за интернет', sum: 800 },
    { id: 465216, type: `visa`, date: '2023-07-12', categories: 'Оплата счета за интернет', sum: 800 },
];
const transaction = document.querySelector('.transaction');

CreateTransactionBox(transactions, transaction, 7)

function CreateTransactionBox(arr, place, limit) {
    let title = document.createElement("h2")
    let tr1 = document.createElement(`tr`)
    let th1 = document.createElement(`th`)
    let th2 = document.createElement(`th`)
    let th3 = document.createElement(`th`)
    let th4 = document.createElement(`th`)
    let th5 = document.createElement(`th`)
    let thead = document.createElement("thead")
    let tbody = document.createElement("tbody")
    let table = document.createElement("table")
    let all_transactions = document.createElement("a")

    all_transactions.classList.add("link")

    title.textContent = "Последние транзакции"
    all_transactions.textContent = "Смотреть все оплаты"
    all_transactions.href = "#"
    th1.innerHTML = `ID`
    th2.innerHTML = `Отправленно с кашелька`
    th3.innerHTML = `Категория`
    th4.innerHTML = `Сумма транзации`
    th5.innerHTML = `Когда`

    tr1.append(th1, th2, th3, th4, th5)
    thead.append(tr1)
    table.append(thead, tbody)
    place.append(title, table, all_transactions)

    populateTable(arr.slice(0, limit), tbody);
}


function populateTable(arr, place) {
    place.innerHTML = ""
    for (let item of arr) {
        const row = place.insertRow(-1);
        const id = row.insertCell(0);
        const cart_type = row.insertCell(1);
        const descriptionCell = row.insertCell(2);
        const amountCell = row.insertCell(3);
        const dateCell = row.insertCell(4);

        id.innerHTML = item.id;
        cart_type.innerHTML = item.type;
        dateCell.innerHTML = `${(getDaysRemaining(item.date) * (-1))} дней назад`;
        descriptionCell.innerHTML = item.categories;
        amountCell.innerHTML = item.sum.toFixed(2);
    }
}




function getDaysRemaining(targetDateString) {
    const targetDate = new Date(targetDateString);
    const currentDate = new Date();

    const timeDifference = targetDate.getTime() - currentDate.getTime();
    const daysRemaining = Math.ceil(timeDifference / (1000 * 60 * 60 * 24));

    return daysRemaining;
}