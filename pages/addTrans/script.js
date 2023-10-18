import { postData } from "../../modules/http"
import { user } from "/modules/user_data"
let form = document.forms.addTrans
let inps = form.querySelectorAll('input')
let name = document.querySelector('.name')

form.onsubmit = (e) => {
    e.preventDefault()

    let today = new Date()

    let transactions = {
        user_id: user?.id,
        data: `${today.getFullYear()}.${today.getMonth()}.${today.getDay()}.${today.getHours()}.${today.getMinutes()}`
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        transactions[key] = value
    })

    console.log(transactions);

    let error = false

    inps.forEach(inp => {
        if (inp.value.length === 0) {
            inp.classList.add("error");
        } else {
            error = true
            inp.classList.remove("error");
        }
    });

    if(error){
        postData("/transactions", transactions)
            .then(res => console.log(res))
        
        location.assign('/pages/transictions/index.html')
        fetch('http://localhost:7000/cards')
        .then(res => res)
        .then(res => {
            if(res.wallet === name || res.user_id === user.id){
                transactions.push(JSON.parse(res))
            }
            console.log(JSON.parse(res))
        })
    }
}