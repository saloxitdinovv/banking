import {
    user
} from '/modules/user_data'

let form = document.forms.addTrans
let inps = form.querySelectorAll('input')
let selector = document.querySelector('.selector')

fetch('http://localhost:7000/cards?user_id=' + user.id)
    .then(res => res.json())
    .then(res => reload(res, selector))
    
    function reload(arr, place) {
        for (let item of arr) {
        let option = document.createElement('option')

        option.innerHTML = item.name
        option.name = 'card'
        
        place.append(option)
    }
}


form.onsubmit = (e) => {
    e.preventDefault()

    let transaction = {
        user_id: user?.id,
        time: new Date().getHours() + ':' + new Date().getMinutes()
    }

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        transaction[key] = value
    })

    let error = false

    inps.forEach(inp => {
        if (inp.value.length === 0) {
            inp.classList.add("error");
        } else {
            error = true
            inp.classList.remove("error");
        }
    });
    console.log(transaction);

    if (error) {
        fetch('http://localhost:7000/transactions', {
            method: "post",
            body: JSON.stringify(transaction),
            headers: {
                "Content-Type": "application/json"
            }
        })
        location.assign('/pages/transictions/')
    }
}
