import { user } from "/modules/user_data"
import { wallets } from "/modules/functions"

let btn = document.querySelector('button')

btn.onclick = () => {
    location.assign('/pages/addcard/')
}



fetch('http://localhost:7000/cards?user_id=' + user.id)
    .then(res => res.json())
    .then(res => {
        let box = document.querySelector('.wallets_box')
        wallets(res, box)
    })