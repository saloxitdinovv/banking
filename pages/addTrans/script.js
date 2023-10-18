import { postData } from "../../modules/http"
import { getData } from "../../modules/http"
import { user } from "/modules/user_data"

let form = document.forms.addTrans
let inps = form.querySelectorAll('input')

const today = new Date();
const year = today.getFullYear();
const month = String(today.getMonth() + 1).padStart(2, '0'); // Месяц начинается с 0
const day = String(today.getDate()).padStart(2, '0');

const formattedDate = `${year}-${month}-${day}`;

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
        postData('/transactions', transaction)
            .then(res => {
                if (res.status === 200 || res.status === 201) {
                    location.assign('/pages/transictions/')
                }
            })
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



