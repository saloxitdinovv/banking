import { user } from "../../modules/user_data"
import { getData } from "../../modules/http"
import { transactions } from "../../modules/transactions";

let userName = document.querySelector('h3')
let userBalance = document.querySelector('.balance')
let tbody = document.querySelector('tbody')
let card = null


let id = location.search.split('=').at(-1)


getData('/cards/' + id)
    .then(res => {
        card = res
        userName.innerHTML = card.name
        userBalance.innerHTML = `Balance: ${card.balance}`
        getData('/transactions?card_id=' + id)
            .then(res => transactions(res, tbody))
    })


let flippingCard = document.querySelector('.card');

flippingCard.ondblclick = () => {
    flippingCard.classList.toggle('flipped');
}