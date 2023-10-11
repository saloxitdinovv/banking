import { user } from "./modules/user_data"

////////////////////////////////
let userName = document.querySelector('.user_name')
userName.innerHTML = user?.name

let userEmail = document.querySelector('.user_email')
userEmail.innerHTML = user?.email

////////////////////////////////
let wallets_box = document.querySelector('.wallets_box')
let myWallet = document.createElement('h1')

let wallets = document.createElement('div')
for (let i = 0; i < 4; i++) {
    let wallet = document.createElement('div')
    wallets.append(wallet)
    wallet.classList.add(`wallet_${i + 1}`)

    let walletName = document.createElement('h2')
    walletName.innerHTML = 'VISA'
    walletName.classList.add('walletName')
    wallet.append(walletName)

    let currency = document.createElement('h2')
    currency.innerHTML = 'RUB'
    currency.classList.add('currency')
    wallet.append(currency)
}

let seeAll = document.createElement('a')

wallets.classList.add('wallets')

myWallet.innerHTML = 'Мои кошельки'
seeAll.innerHTML = 'Смотреть все кошельки'
seeAll.href = '/pages/all_cards/index.html'

wallets_box.append(myWallet, wallets, seeAll)





let lastTransactions = document.createElement('h1')
lastTransactions.innerHTML = 'Последние транзакции'


let seeAllTransactions = document.createElement('a')
seeAllTransactions.innerHTML = 'Смотреть все оплаты'
seeAllTransactions.href = '/pages/all_transactions/index.html'

let table = document.createElement('table');

let th = document.createElement('tr');
let thText = ['ID', 'Отправлено с кошелька', 'Категория', 'Сумма транзации', 'Когда'];

thText.forEach(text => {
    let header = document.createElement('th');
    header.innerHTML = text;
    th.append(header);
});

table.append(th);

for (let i = 0; i < 7; i++) {
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
transactions.append(lastTransactions, table, seeAllTransactions);