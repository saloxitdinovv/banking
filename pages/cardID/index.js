import {
    user
} from "../../modules/user_data"
import {
    getData, getSymbols
} from "../../modules/http"
import {
    transactions
} from "../../modules/transactions";
import { createCurrs } from "../../modules/functions";
import axios from "axios";

let userName = document.querySelector('h3')
let tbody = document.querySelector('tbody')
let from_sel = document.querySelector('#from')
let to_sel = document.querySelector('#to')
let balance_view = document.querySelector('#balance')
let hidden_div = document.querySelector('.hidden')
let card_info_chils = document.querySelectorAll('span')
let loading_animation = `<dotlottie-player src="https://lottie.host/392bad94-e730-4710-94b6-7200465f1519/bIr4xFL2bH.json" background="transparent" speed="1" style="width: 300px; height: 300px;" loop autoplay></dotlottie-player>`

let card = null

let id = location.search.split('=').at(-1)

let symbols = JSON.parse(localStorage.getItem('symbols') || "[]")

if (symbols.length === 0) {
    getSymbols()
        .then(res => {
            localStorage.setItem('symbols', JSON.stringify(res.symbols))
            createCurrs(res.symbols, to_sel)
        })
} else {
    createCurrs(symbols, to_sel)
}

to_sel.onchange = () => {

    hidden_div.innerHTML = loading_animation
    card_info_chils.forEach(el => el.classList.add('hide_elems'))

    axios.get(`https://api.apilayer.com/fixer/convert?to=${to_sel.value}&from=${card.currency}&amount=${card.balance}`, {
        headers: {
            "apikey": import.meta.env.VITE_FIXER_API_KEY
        }
    })
        .then(({data}) => {
            balance_view.innerHTML = `${data.result.toFixed(2)} ${data.query.to}`
            card_info_chils.forEach(el => el.classList.remove('hide_elems'))
            hidden_div.innerHTML = ""
        })
}



getData('/cards/' + id)
    .then(res => {
        userName.innerHTML = res?.name
        card = res
        from_sel.value = card.currency
        balance_view.innerHTML = `${card.balance} ${card.currency}`
        getData('/transactions?card_id=' + id)
            .then(res => transactions(res, tbody))
    })



// userName.innerHTML = user?.name