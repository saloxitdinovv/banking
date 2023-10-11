export function wallets(){
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
    
    wallets.classList.add('wallets')
    
    myWallet.innerHTML = 'Мои кошельки'
    
    wallets_box.prepend(myWallet, wallets)

}