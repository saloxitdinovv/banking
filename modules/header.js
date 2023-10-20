import { user } from "./user_data"

let header = document.querySelector('.box')
let nav = document.createElement('nav')
let accountBox = document.createElement('div')
let links = []
for (let i = 0; i < 3; i++) {
    let link = document.createElement('a')
    link.classList.add(`nav-link_${i + 1}`)
    links.push(link)
}
let email = document.createElement('p')
let logOut = document.createElement('a')
let image = document.createElement('img')


links[0].innerHTML = 'Главная'
links[1].innerHTML = 'Мои кошельки'
links[2].innerHTML = 'Мои транзакции'
email.innerHTML = user?.email
// logOut.href = '/pages/signin/'
image.src = 'https://cdn-icons-png.flaticon.com/128/4043/4043198.png'
links[0].href = '/index.html'
links[1].href = '/pages/cards/index.html'
links[2].href = '/pages/transactions/index.html'


image.classList.add('logOutIcon')
accountBox.classList.add('accountBox')
logOut.classList.add('logOut')


header.append(nav, accountBox)
nav.append(links[0], links[1], links[2])
accountBox.append(email, logOut)
logOut.append(image)

logOut.onclick = () => {
    localStorage.removeItem('user')
    location.assign('/pages/signup/')
}