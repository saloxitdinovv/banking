import { transactions } from "../../modules/transictions";

let btn = document.querySelector('button')

btn.onclick = () => {
    location.assign('/pages/addTrans/')
}

transactions()