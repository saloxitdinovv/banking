import {
    user
} from "./modules/user_data"
import {
    wallets
} from "./modules/functions"
import {
    transactions
} from "./modules/transictions"



////////////////////////////////
let userName = document.querySelector('.user_name')
userName.innerHTML = user?.name

let userEmail = document.querySelector('.user_email')
userEmail.innerHTML = user?.email

////////////////////////////////


fetch('http://localhost:7000/cards?user_id=' + user.id)
    .then(res => res.json())
    .then(res => {
        let box = document.querySelector('.wallets_box')
        wallets(res, box)
    })

fetch('http://localhost:7000/transactions?user_id=' + user.id)
    .then(res => res.json())
    .then(res => {
        let box = document.querySelector('.transactions')
        transactions(res, box)
    })