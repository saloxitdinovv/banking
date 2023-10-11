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

    fetch('http://localhost:7000/users?email=' + inputEmail.value)
        .then(res => res.json())
        .then(res => {
            
            let [user] = res

            if(user) {
                if(user.password === inputPassword.value) {
                    localStorage.setItem('user', JSON.stringify(user))
                    location.assign('/')
                } else {
                    alert('wrong password')
                }
            }
        })


}

