let form = document.forms.signup
let inputs = form.querySelectorAll('input')

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
    if (error) {
        return error
    } else {
        submit()
    }

}


function submit() {
    let user = {};

    let fm = new FormData(form);

    fm.forEach((value, key) => {
        user[key] = value;
    });

    fetch('http://localhost:7000/users?email=' + user.email)
        .then(res => res.json())
        .then(res => {
            if(res.length > 0){
                alert('Уже занято!')
            } else {
                post(user)
            }
        })
        
    }
function post(user){
    fetch('http://localhost:7000/users', {
        method: 'post',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        if(res.status === 200 || res.status === 201){
            localStorage.setItem('user', JSON.stringify(user));
            window.location.href = "/pages/signin/"
        }
    })
}