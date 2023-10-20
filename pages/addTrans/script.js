import {
    user
} from "/modules/user_data"
import {
    getData,
    patchData
} from "/modules/http"
import { postData } from "../../modules/http"

let form = document.forms.addTrans
let inps = form.querySelectorAll('input')
let select = form.querySelector('select')
let cards = []

getData('/cards?user_id=' + user?.id)
    .then(res => {
        cards = res
        for (let card of res) {
            let opt = new Option(card.name, card.id)
            select.append(opt)
        }
    })


form.onsubmit = (e) => {
    e.preventDefault()

    let date = new Date()
    let trans = {
        user_id: user?.id,
        date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => trans[key] = value)

    let findedCard = cards.find(item => +item.id === +trans.card)

    delete findedCard.user_id
    delete findedCard.currency

    trans.card = findedCard

    if (+trans.total > +findedCard.balance) {
        alert('Недостаточно средств!')
    } else if (trans.total < 10) {
        alert('Меньше 10usd снять нельзя!')
    } else {
        patchData('/cards/' + findedCard.id, {
            balance: findedCard.balance - trans.total
        }).then(res => {
            if(res.status === 200 || res.status === 201) {
                postData('/transactions', trans)
                    .then(res => {
                        if(res.status === 200 || res.status === 201) {
                            alert('Транзакция прошла успешно')

                            setTimeout(() => {
                                location.assign('/pages/transactions/')
                            }, 1500);
                        }
                    })
            }
        })
    }
}