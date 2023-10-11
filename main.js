
import { user } from "/modules/user_data.js";

let nameWelcome = document.querySelector('.name')
let mail = document.querySelector(".mail")
mail.innerHTML = user.email
nameWelcome.innerHTML = `Добро пожаловать,${user.name} ${user.surname}!`



console.log(location);