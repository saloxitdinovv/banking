import '../scss/style.scss'
let container = document.querySelector('.container_glav')

let header = document.createElement('header')
let left = document.createElement('div')
let left_t1 = document.createElement('h1')
let left_t2 = document.createElement('h1')
let left_t3 = document.createElement('h1')
let right = document.createElement('div')
let email_txt = document.createElement('h1')
let exit_acc = document.createElement('img')

left_t1.innerHTML = 'Главная'
left_t2.innerHTML = 'Мои кошельки'
left_t3.innerHTML = 'Мои транзакции'
email_txt.innerHTML = 'alexadams@google.com'
exit_acc.src = '/public/icon/log-out (1) 1.png'

header.classList.add('header_glav')
left.classList.add('left')
left_t1.classList.add('left_t1')
left_t2.classList.add('left_t2')
left_t3.classList.add('left_t3')
left_t1.classList.add('left_h1')
left_t2.classList.add('left_h1')
left_t3.classList.add('left_h1')
right.classList.add('right')
email_txt.classList.add('email_txt')
exit_acc.classList.add('exit_acc')

container.prepend(header)
header.append(left, right)
left.append(left_t1, left_t2, left_t3)
right.append(email_txt, exit_acc)

let card_div = document.querySelector('.card_div')

let img_card = [
    {
        img: 'Rectangle 3.png'
    },
    {
        img: 'Rectangle 3 (2).png'
    },
    {
        img: 'Rectangle 3 (3).png'
    },
    {
        img: 'Rectangle 3 (1).png'
    }    
]

for (let item of img_card) {
    let card = document.createElement('div')
    let card_name = document.createElement('h1')
    let currency = document.createElement('h1')

    card.style.backgroundImage = `url("/public/images/${item.img}")`;
    card_name.innerHTML = 'Visa'
    currency.innerHTML = 'RUB'

    card.classList.add('card_card')
    card_name.classList.add('card_name')
    currency.classList.add('currency')

    card_div.append(card)
    card.append(card_name, currency)
}

let table = document.querySelector('table')

for (let index = 0; index < 7; index++) {
    let tr = document.createElement('tr')
    let td1 = document.createElement('td')
    let td2 = document.createElement('td')
    let td3 = document.createElement('td')
    let td4 = document.createElement('td')
    let td5 = document.createElement('td')

    td1.innerHTML = '1232312'
    td2.innerHTML = 'VISA'
    td3.innerHTML = 'Автомобиль'
    td4.innerHTML = '414,000,000'
    td5.innerHTML = '4 дня назад'

   table.append(tr)
   tr.append(td1, td2, td3, td4, td5)    
}
