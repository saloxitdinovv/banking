let form = document.forms.signin
let inputs = form.querySelectorAll('input')
let inputEmail = document.querySelector('.email')
let inputPassword = document.querySelector('.password')

let user = JSON.parse(localStorage.getItem('user'))

let correctPassword = user.password

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

    fetch('http://localhost:7000/users')
        .then(res => res.json())
        .then(res => {
            res.forEach(el => {
                if(el.email === inputEmail.value && inputPassword.value === correctPassword){
                    inputPassword.classList.remove("error")
                    inputEmail.classList.remove("error")
                } else if(el.email === inputEmail.value && inputPassword.value !== correctPassword){
                    error = false
                    inputPassword.classList.add("error")
                    inputEmail.classList.remove("error")
                    alert('Аккаунт есть но пароль неправильный')
                } else if(el.email !== inputEmail.value){
                    error = false
                    inputPassword.classList.add("error")
                    inputEmail.classList.add("error")
                    alert('Аккаунт не существует')
                }
                if (error) {
                    window.location.href = "/"
                } else {
                    return error
                }
            })
        })


}

