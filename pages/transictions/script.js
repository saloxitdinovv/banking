import { transactions } from "../../modules/transictions";
import { user } from "/modules/user_data"

let btn = document.querySelector('button')

btn.onclick = () => {
    location.assign('/pages/addTrans/')
}


fetch('http://localhost:7000/transactions?user_id=' + user.id)
    .then(res => res.json())
    .then(res => transactions(res))