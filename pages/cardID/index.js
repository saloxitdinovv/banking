import { user } from "../../modules/user_data"
import { getData } from "../../modules/http"
import { transactions } from "../../modules/transactions";

let userName = document.querySelector('h3')
let tbody = document.querySelector('tbody')
let card = null


let id = location.search.split('=').at(-1)


getData('/cards/' + id)
    .then(res => {
        userName.innerHTML = res?.name
        card = res
        getData('/transactions?card_id=' + id)
            .then(res => transactions(res, tbody))
    })



// userName.innerHTML = user?.name