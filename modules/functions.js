export function wallets(arr){
    let wallets_box = document.querySelector('.wallets_box')
    let myWallet = document.createElement('h1')
    
    let wallets = document.createElement('div')
    console.log(arr);

    for (let item of arr) {
        let wallet = document.createElement('div')
        wallets.append(wallet)
        wallet.classList.add(`wallet_${1}`)
    
        let walletName = document.createElement('h2')
        walletName.innerHTML = item.name
        walletName.classList.add('walletName')
        wallet.append(walletName)
    
        let currency = document.createElement('h2')
        currency.innerHTML = item.currency
        currency.classList.add('currency')
        wallet.append(currency)
    }
    
    wallets.classList.add('wallets')
    
    myWallet.innerHTML = 'Мои кошельки'
    
    wallets_box.prepend(myWallet, wallets)

}


export function createCurrs(obj, place) {

    for(let key in obj ) {
        let opt = new Option(key, key)

        place.append(opt)
    }
}