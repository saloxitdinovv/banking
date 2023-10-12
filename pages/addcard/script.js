import { user } from "/modules/user_data"

let form = document.forms.addWallet
let inps = form.querySelectorAll('input')

console.log(user);

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

    if(error){
        fetch('http://localhost:7000/cards', {
            method: "post", 
            body: JSON.stringify(card),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(res => console.log(res))
        
        location.assign('/pages/cards/')
    }
}