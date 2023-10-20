import { transactions } from "../../modules/transactions";
import { user } from "../../modules/user_data"
import { getData } from "../../modules/http"
let tbody = document.querySelector('tbody')
let btn = document.querySelector('button')

btn.onclick = () => {
    location.assign('/pages/addTrans/')
}

getData('/transactions?user_id=' + user.id)
    .then(res => transactions(res, tbody))
