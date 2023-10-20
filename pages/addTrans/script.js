let form = document.forms.addTrans
let inps = form.querySelectorAll('input')

form.onsubmit = (e) => {
    e.preventDefault()

    let transaction = {
        user_id: user?.id,
        card: {
            id: 1,
            name: "Card Name",
            balance: 30000
        },
        total: form.querySelector('input[name="price"]').value,
        category: form.querySelector('input[name="category"]').value,
        date: formattedDate
    }

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

let select = document.querySelector('.selectId')

getData('/cards?user_id=' + user.id)
    .then(data => {
        data.forEach(card => {
            let option = document.createElement("option");
            option.value = card.id;
            option.text = card.name;
            select.append(option);
        });

        select.addEventListener('change', (e) => {
            let selectedCardId = e.target.value;
            let selectedCard = data.find(card => card.id === selectedCardId);

            if (selectedCard) {
                transaction.card = {
                    id: selectedCard.id,
                    name: selectedCard.name,
                    balance: selectedCard.balance
                };
            }
        });
    });




function getCardName() {
    getData('/cards?user_id=' + user.id)
        .then(res => {
            res.forEach(re => {
                console.log(re.name);
            })
        })
}



