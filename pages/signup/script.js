<<<<<<< HEAD
let form = document.forms[0];
let inps = document.querySelectorAll("input");

form.onsubmit = (event) => {
  event.preventDefault();
  let error = false;
  inps.forEach((inp) => {
    if (inp.value.length > 0) {
      error = false;
    } else {
      error = true;
    }
  });
  if (error) {
  } else {
    submit();
    window.location.href = "/pages/signin/";
  }
};
function submit() {
  let user = {};
  let fm = new FormData(form);
  fm.forEach((value, key) => {
    user[key] = value;
  });
  localStorage.setItem("user", JSON.stringify(user));
  console.log(JSON.parse(localStorage.getItem("user")));
}
=======
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
>>>>>>> ca048fe3de7f86c16fbea7cc72db7d84c9f2a9d2
