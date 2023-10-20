import { transactions } from "../../modules/transactions";
import { user } from "../../modules/user_data"
import { getData } from "../../modules/http"

let btn = document.querySelector('button')

btn.onclick = () => {
    location.assign('/pages/addTrans/')
}

let tbody = document.querySelector('tbody')

getData('/transactions?user_id=' + user.id)
    .then(res => transactions(res, tbody))
