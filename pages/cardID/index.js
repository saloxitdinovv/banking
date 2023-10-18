import { getData } from "/modules/http"
import { user } from "/modules/user_data"
import { transactions } from "../../modules/transictions"
let tbody = document.querySelector('tbody')
function wallets(arr){
    let wallets_box = document.querySelector('.wallets_box')
    
    let wallets = document.createElement('div')

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
        
    wallets_box.prepend(wallets)

}
getData('/cards?user_id=' + user.id)
    .then(res => wallets(res))

getData('/transactions?user_id=' + user.id)
    .then(res => transactions(res, tbody))
let bal = document.querySelector('.balanse')
let obm_val = document.querySelector('.obm_val')
function fun(arr) {
    for(let item of arr){
        bal.innerHTML = item.balance
        obm_val.innerHTML = item.currency
    }
}
getData('/cards?user_id=' + user.id)
    .then(res => fun(res))