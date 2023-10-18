import { user } from "/modules/user_data"

// let code = localStorage.getItem('code')
// let walletName = document.querySelector('.walletName')
// let currency = document.querySelector('.currency')
// let balance = document.querySelector('.balancik')
// let currrrency = document.querySelector('.currrrency')

// fetch('http://localhost:7000/cards?user_id=' + user.id)
//     .then(res => res.json())
//     .then(res => reload(res))

// function reload(arr){
//     for(let item of arr){
//         if(item.id === code){
//             walletName.innerHTML = item.name
//             currency.innerHTML = item.currency
//             balance.innerHTML = item.balance
//             currrrency.innerHTML = item.currency
//         }
//     }
// }

import {
    transactions
} from "/modules/transictions"

fetch('http://localhost:7000/transactions?user_id=' + user.id)
    .then(res => res.json())
    .then(res => {
        let box = document.querySelector('.transactions')
        transactions(res, box)
    })

let wallet = document.querySelector('.wallet_1')
let walletName = document.querySelector('.walletName')
let currency = document.querySelector('.currency')

let click = true

wallet.ondblclick = () => {
    wallet.style.width = '1%'
    wallet.style.padding = '0'
    if(click){
        setTimeout(() => {
            click = false
            walletName.innerHTML = 'Данные'
            currency.innerHTML = 'Очень важные!!!'
            wallet.style.width = '30%'
            wallet.style.padding = '20px 215px 20px 25px'
        }, 700)
    } else {
        setTimeout(() => {
            click = true
            walletName.innerHTML = 'Visa'
            currency.innerHTML = 'USD'
            wallet.style.width = '30%'
            wallet.style.padding = '20px 215px 20px 25px'
        }, 700)
    }
}