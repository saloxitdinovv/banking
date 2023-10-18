import { transactions } from "../../modules/transictions"
import { getData } from "../../modules/http"
import { user } from "../../modules/user_data"



let btn = document.querySelector('button')
let tbody = document.querySelector('tbody')

btn.onclick = () => {
    location.assign('/pages/addTrans/')
}

getData('/transactions?user_id=' + user.id)
    .then(res => transactions(res, tbody))
