import { user } from "/modules/user_data.js";
import { transactions } from "/modules/transictions.js";
let form = document.forms.addTrans
let inps = form.querySelectorAll('input')
let select = document.querySelector("select")

fetch('http://localhost:7000/cards')
    .then(res => res.json())
    .then(res => add_trans(res))

    function add_trans(data) {
        data.forEach(element => {
            if(element.user_id===user.id){
                select.innerHTML += `<option>${element.name}</option>`
            }
        });
    }
form.onsubmit = (e) => {
    e.preventDefault()

    let error = false

    inps.forEach(inp => {
        if (inp.value.length === 0) {
            inp.classList.add("error");
            error = false
        } else {
            error = true
            inp.classList.remove("error");
        }
    });

    if (error) {
        alert('Типа добавил')
        location.assign('/pages/transictions/')
    }
}

let info
form.onsubmit = (e) => {
    e.preventDefault()

    let transiction = {
        user_id: user?.id
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        transiction[key] = value
    })
    fetch('http://localhost:7000/cards')
        .then(res => res.json())
        .then(res => {
            res.forEach(elem => {
                info = [elem.id,transiction.wallet,transiction.category,transiction.price,"недавно"]
                localStorage.setItem("info",JSON.stringify(info))
                if (elem.name ===transiction.wallet ) {
                    feth(elem)
                }
            });
        })

    console.log(transiction.wallet);
    function feth(element) {
        fetch('http://localhost:7000/cards/'+element.id,{
            method: "Put",
            headers:{
                "Content-type":"application/json"
            },
            body: JSON.stringify({
                "user_id": element.user_id,
                "name": element.name,
                "currency": element.currency,
                "balance": element.balance-transiction.price,
                "id": element.id
            })
        })
    }
}
