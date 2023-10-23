import { user } from "/modules/user_data"

let id = location.search.split('=').at(-1)

import {
    transactions
} from "/modules/transictions"

fetch('http://localhost:7000/transactions?user_id=' + user.id)
    .then(res => res.json())
    .then(res => {
        let box = document.querySelector('.transactions')
        transactions(res, box)
    })

fetch('http://localhost:7000/cards?id=' + id)
    .then(res => res.json())
    .then(res => {
        for(let item of res){
            let walletName = document.querySelector('.walletName')
            let currency = document.querySelector('.currency')
            let balance = document.querySelector('.balancik')
            let curr = document.querySelector('.currrrency')
    
            walletName.innerHTML = item.name
            currency.innerHTML = item.currency
            balance.innerHTML = item.balance
            curr.innerHTML = item.currency
        }
    })    


let click = true

let wallet = document.querySelector('.front')
let walletName = document.querySelector('.walletName')
let currency = document.querySelector('.currency')

wallet.ondblclick = () => {
    wallet.style.width = '0%'
    wallet.style.padding = '0'
    if(click){
        setTimeout(() => {
            click = false
            walletName.innerHTML = 'Данные'
            currency.innerHTML = 'Очень важные!!!'
            wallet.style.width = '50%'
            wallet.style.padding = '20px 215px 20px 25px'
        }, 500)
    } else {
        setTimeout(() => {
            click = true
            walletName.innerHTML = 'Visa'
            currency.innerHTML = 'USD'
            wallet.style.width = '50%'
            wallet.style.padding = '20px 215px 20px 25px'
        }, 500)
    }
}