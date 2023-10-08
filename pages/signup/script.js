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
        return error;
    } else {
        submit();
    }
}


function submit() {
    let user = {};

    let fm = new FormData(form);

    fm.forEach((value, key) => {
        user[key] = value;
    });

    console.log(user);

    localStorage.setItem('user', JSON.stringify(user));
    window.location.href = "/pages/signin/";
}