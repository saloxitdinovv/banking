import { user } from "./modules/user_data"
import { wallets } from "./modules/functions"
import { transactions } from "./modules/transictions"

let userName = document.querySelector('.user_name')
userName.innerHTML = user?.name

let userEmail = document.querySelector('.user_email')
userEmail.innerHTML = user?.email

wallets()
transactions()