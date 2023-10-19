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

    let date = new Date()
    let trans = {
        user_id: user?.id,
        date: `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`
    }

    fm.forEach((value, key) => trans[key] = value)

    let findedCard = cards.find(item => +item.id === +trans.card)

    delete findedCard.user_id
    delete findedCard.currency

    trans.card = findedCard

    inps.forEach(inp => {
        if (inp.value.length === 0) {
            inp.classList.add("error");
        } else {
            error = true
            inp.classList.remove("error");
        }
    });

    if(error){
        alert('Типа добавил')
        location.assign('/pages/transictions/')
    }
}