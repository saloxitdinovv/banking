
import { user } from "/modules/user_data.js";
let table = document.querySelector("table")
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

let header = document.querySelector(".header")
let nameWelcome = document.querySelector('.name')
let mail = document.querySelector(".mail")
mail.innerHTML = user.email
nameWelcome.innerHTML = `Добро пожаловать,${user.name} ${user.surname}!`



console.log(location);