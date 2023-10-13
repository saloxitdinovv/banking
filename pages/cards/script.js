import { wallets } from "/modules/functions"

let btn = document.querySelector('button')

btn.onclick = () => {
    location.assign('/pages/addcard/')
}

wallets()