import {
    getData,
    postData
} from "../../modules/http";

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

    getData('/users?email=' + user.email)
        .then(res => {
            if (res.length > 0) {
                alert('Уже занято!')
                return
            }
            postData('/users', user)
                .then(res => {
                    if (res.status === 200 || res.status === 201) {
                        location.assign('/pages/signin')
                    }
                })
        })
}