let user = JSON.parse(localStorage.getItem('user'))

let header = document.querySelector('.box')
let nav = document.createElement('nav')
let accountBox = document.createElement('div')
let links = []
for (let i = 0; i < 3; i++) {
    let link = document.createElement('a')
    link.classList.add(`nav-link_${i + 1}`)
    links.push(link)
}
let email = document.createElement('p')
let logOut = document.createElement('a')
let image = document.createElement('img')


links[0].innerHTML = 'Главная'
links[1].innerHTML = 'Мои кошельки'
links[2].innerHTML = 'Мои транзакции'
email.innerHTML = user.email
logOut.href = '/pages/signin/'
image.src = 'https://cdn-icons-png.flaticon.com/128/4043/4043198.png'
links[0].href = '#'
links[1].href = '#'
links[2].href = '#'


image.classList.add('logOutIcon')
accountBox.classList.add('accountBox')
logOut.classList.add('logOut')


header.append(nav, accountBox)
nav.append(links[0], links[1], links[2])
accountBox.append(email, logOut)
logOut.append(image)


////////////////////////////////
let userName = document.querySelector('.user_name')
userName.innerHTML = user.name

let userEmail = document.querySelector('.user_email')
userEmail.innerHTML = user.email



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
seeAll.href = '#'

wallets_box.append(myWallet, wallets, seeAll)





let lastTransactions = document.createElement('h1')
lastTransactions.innerHTML = 'Последние транзакции'


let seeAllTransactions = document.createElement('a')
seeAllTransactions.innerHTML = 'Смотреть все оплаты'
seeAllTransactions.href = '#'

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