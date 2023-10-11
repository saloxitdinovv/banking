import { user } from "/modules/user_data.js"
let header = document.querySelector(".header")
if (user!== null) {
    
    header.innerHTML = `      <div class="leftside">
    <a href="/index.html">Главная</a>
    <a href="/pages/wallets/">Мои кошельки</a>
    <a href="/pages/transactions/">Мои транзакции</a>
    </div>
    <div class="rightside">
    <p>${user.email}</p>

    <img class="exit" width="24px" src="https://cdn1.iconfinder.com/data/icons/arrows-vol-1-5/24/logout2-256.png" alt=""></img>
    </div>`
    
}else{
    header.innerHTML = `      <div class="leftside">
    <p>Главная</p>
    <p>Мои кошельки</p>
    <p>Мои транзакции</p>
    </div>
    <div class="rightside">
    <a href="/pages/register/index.html" class="reg">Register</a>

    </div>`
    
}