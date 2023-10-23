import {
    getData
} from "../../modules/http"

let form = document.forms.signin
let inputs = form.querySelectorAll('input')
let inputEmail = document.querySelector('.email')
let inputPassword = document.querySelector('.password')

form.onsubmit = (e) => {
    e.preventDefault();

    let error = true

    inputs.forEach((inp) => {
        if (inp.value.length === 0) {
            error = false
            inp.classList.add("error");
        } else {
            inp.classList.remove("error");
        }
    })


    if(!error) return

    getData('/users?email=' + inputEmail.value)
        .then(res => {
            if (res.length === 0) return

            let [user] = res

            if (+user.password !== +inputPassword.value) {
                alert('Wrong password')
                return
            }

            delete user.password
            localStorage.setItem('user', JSON.stringify(user))
            location.assign('/')
        })
}
