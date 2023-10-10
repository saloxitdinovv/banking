
let rightside = document.querySelector(".rightside")
let header = document.querySelector(".header")
let nameWelcome = document.querySelector('.name')
let user = JSON.parse(localStorage.getItem("user"))
let mail = document.querySelector(".mail")
let cards = document.querySelector(".cards")
let table = document.querySelector("table")
for (let i = 0; i < 4; i++) {
    cards.innerHTML += `        <div class="card">
    <h3>Visa</h3>
    <p>Rub</p>
  </div>`
}
for (let i = 0; i < 6; i++) {
    table.innerHTML += `      <tr>
    <td>
      1232312
    </td>
    <td>VISA</td>
    <td>Автомобиль</td>
    <td>414,000,000</td>
    <td>4 дня назад</td>
  </tr>`
    
}
if (user!== null) {
    mail.innerHTML = user.email
    header.innerHTML = `      <div class="leftside">
    <p>Главная</p>
    <p>Мои кошельки</p>
    <p>Мои транзакции</p>
    </div>
    <div class="rightside">
    <p>${user.email}</p>

    <img class="exit" width="24px" src="https://cdn1.iconfinder.com/data/icons/arrows-vol-1-5/24/logout2-256.png" alt=""></img>
    </div>`
    nameWelcome.innerHTML = `Добро пожаловать,${user.name} ${user.surname}!`
}else{
    header.innerHTML = `      <div class="leftside">
    <p>Главная</p>
    <p>Мои кошельки</p>
    <p>Мои транзакции</p>
    </div>
    <div class="rightside">
    <a href="/pages/register/index.html" class="reg">Register</a>

    </div>`
    nameWelcome.innerHTML = `Добро пожаловать,Alex Adams!`
}





