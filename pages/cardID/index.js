import { user } from "../../modules/user_data"
let userName = document.querySelector('h3')
userName.innerHTML = user?.name
