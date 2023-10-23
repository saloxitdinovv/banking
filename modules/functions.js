export function wallets(arr, place){
    let myWallet = document.createElement('h1')
    
    let wallets = document.createElement('div')
    wallets.classList.add('wallets')

    let random = Math.round(Math.random() * 360)
    console.log(random);
    if(arr.length === 0){
        let hs1 = document.createElement('h2')
        hs1.innerHTML = 'У вас нет кошельков :/'
        let btnsik = document.createElement('div')
        btnsik.innerHTML = '+'
        wallets.style.display = 'block'
        btnsik.onclick = () => {
            location.assign('/pages/addcard/')
        }
        btnsik.classList.add('btnsik')
        wallets.prepend(hs1, btnsik) 
    } else {
        for(let item of arr){
            let wallet = document.createElement('div')
            wallets.append(wallet)
            wallet.classList.add(`wallet_${1}`)
            wallet.style.background = `linear-gradient(${random}deg, #6e6ad7 2.27%, #5444bb 87.26%)`
        
            let walletName = document.createElement('h2')
            walletName.innerHTML = item.name
            walletName.classList.add('walletName')
            wallet.append(walletName)
        
            let currency = document.createElement('h2')
            currency.innerHTML = item.currency
            currency.classList.add('currency')
            wallet.append(currency)

            let balance = document.createElement('h2')
            balance.innerHTML = 'Balance: ' + item.balance
            balance.classList.add('balance')
            wallet.append(balance)

            wallet.onclick = () => {
                location.assign('/pages/cardOptions/?id=' + item.id)
            }
        }
    }
    
    
    myWallet.innerHTML = 'Мои кошельки'
    
    place.prepend(myWallet, wallets)
}