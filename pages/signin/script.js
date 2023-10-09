let form = document.forms.signin
let inputs = form.querySelectorAll('input')
let inputEmail = document.querySelector('.email')
let inputPassword = document.querySelector('.password')

let user = JSON.parse(localStorage.getItem('user'))

inputEmail.value = user.email

let correctPassword = user.password

form.onsubmit = (e) => {
    e.preventDefault();

    let error = false;

    inputs.forEach((inp) => {
        if (inp.value.length === 0) {
            error = true;
            inp.classList.add("error");
        } else {
            inp.classList.remove("error");
        }
    })

    if (inputPassword.value === correctPassword) {
        inputPassword.classList.remove("error");
    } else {
        error = true;
        inputPassword.classList.add("error");
    }

    if (error) {
        return error;
        alert('Сначала зарегестрируйтесь')
    } else {
        window.location.href = "/pages/main_page/";
    }
}