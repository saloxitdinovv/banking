import { user } from "/modules/user_data"
let form = document.forms.addTrans
let inps = form.querySelectorAll('input')

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
        fetch('http://localhost:7000/transactions', {
            method: "post", 
            body: JSON.stringify(transactions),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => console.log(res))
        
        location.assign('/pages/transictions/index.html')
    }
}