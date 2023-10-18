import { user } from "/modules/user_data"
import { wallets } from "/modules/functions"
import { getData } from "../../modules/http"

let btn = document.querySelector('button')

btn.onclick = () => {
    location.assign('/pages/addcard/')
}

getData('/cards?user_id=' + user.id)
    .then(res => wallets(res))