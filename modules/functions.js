export function wallets(arr) {
    let wallets_box = document.querySelector('.wallets_box')
    let myWallet = document.createElement('h1')

    let wallets = document.createElement('div')

    for (let item of arr) {
        let wallet = document.createElement('div')
        wallets.append(wallet)
        wallet.classList.add(`wallet_${Math.floor(Math.random() * 4) + 1}`)
        wallet.classList.add(`wallet`)

        let walletName = document.createElement('h2')
        walletName.innerHTML = item.name
        walletName.classList.add('walletName')
        wallet.append(walletName)
        let currency = document.createElement('h2')
        currency.innerHTML = item.currency
        currency.classList.add('currency')
        wallet.append(currency)


        wallet.onclick = () => {
            location.assign('/pages/cardID/?id=' + item.id)
        }
        wallet.onmouseenter = () => {
            wallet.style.transition = '100ms'

            setTimeout(() => {
                wallet.style.scale = '1.05'
            }, 100);
        }
        wallet.onmouseleave = () => {
            wallet.style.scale = '1'
        }

    }

    wallets.classList.add('wallets')

    myWallet.innerHTML = 'Мои кошельки'

    wallets_box.prepend(myWallet, wallets)

}


export function createCurrs(obj, place) {

    for (let key in obj) {
        let opt = new Option(key, key)

        place.append(opt)
    }
}