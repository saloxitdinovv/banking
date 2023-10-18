import { createCurrs } from "../../modules/functions"
import { getSymbols, postData } from "../../modules/http"
import { user } from "/modules/user_data"

let form = document.forms.addWallet
let inps = form.querySelectorAll('input')
let select = document.querySelector('#currency')
let symbols = JSON.parse(localStorage.getItem('symbols') || "[]")

if (symbols.length === 0) {
    getSymbols()
        .then(res => {
            localStorage.setItem('symbols', JSON.stringify(res.symbols))
            createCurrs(res.symbols, select)
        })
} else {
    createCurrs(symbols, select)
}



form.onsubmit = (e) => {
    e.preventDefault()

    let card = {
        user_id: user?.id
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        card[key] = value
    })

    console.log(card);
    let error = false

    inps.forEach(inp => {
        if (inp.value.length === 0) {
            inp.classList.add("error");
        } else {
            error = true
            inp.classList.remove("error");
        }
    });

    if (error) {
        postData('/cards', card)
            .then(res => {
                if (res.status === 200 || res.status === 201) {
                    location.assign('/pages/cards/')
                }
            })
    }
}