import { user } from "./modules/user_data"
import { wallets } from "./modules/functions"
import { transactions } from "./modules/transictions"
import { getData } from "./modules/http"

let userName = document.querySelector('.user_name')
let userEmail = document.querySelector('.user_email')
let tbody = document.querySelector('tbody')

userName.innerHTML = user?.name
userEmail.innerHTML = user?.email
////////////////////////////////

getData('/cards?user_id=' + user.id)
    .then(res => wallets(res))

getData('/transactions?user_id=' + user.id)
    .then(res => transactions(res, tbody))