import { user } from "../../modules/user_data"
import { getData } from "../../modules/http"
import { transactions } from "../../modules/transactions";

let userName = document.querySelector('h3')
userName.innerHTML = user?.name


let tbody = document.querySelector('tbody')

getData('/transactions?user_id=' + user.id)
    .then(res => transactions(res, tbody))