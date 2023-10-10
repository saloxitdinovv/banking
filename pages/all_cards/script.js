let user = JSON.parse(localStorage.getItem('user')) || null
let userEmail = document.querySelector('.user_email')
userEmail.innerHTML = user?.email

let wallets_box = document.querySelector('.wallets_box')
let myWallet = document.createElement('h1')

let img = [
    {
        img: './img/Rectangle 3.png'
    },
    {
        img: './img/Rectangle 3 (1).png'
    },
    {
        img: './img/Rectangle 3 (2).png'
    },
    {
        img: './img/Rectangle 3 (3).png'
    }
]

let wallets = document.createElement('div')
for (let i = 0; i < 7; i++) {
    let wallet = document.createElement('div')
    wallets.append(wallet)
    wallet.classList.add(`wallet`)
    wallet.style.background = `url("${img[0].img}")`

    let walletName = document.createElement('h2')
    walletName.innerHTML = 'VISA'
    walletName.classList.add('walletName')
    wallet.append(walletName)

    let currency = document.createElement('h2')
    currency.innerHTML = 'RUB'
    currency.classList.add('currency')
    wallet.append(currency)
}

let add_btn = document.createElement('button')
add_btn.innerHTML = 'Добавить'

wallets_box.append(myWallet, wallets, add_btn)