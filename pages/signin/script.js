let form = document.forms[0]
let emailInp = document.querySelector('.email')
let passwordInp = document.querySelector('.password')

form.onsubmit = (event) => {
  event.preventDefault()
  if (emailInp.value === JSON.parse(localStorage.getItem('user')).email && passwordInp.value === JSON.parse(localStorage.getItem('user')).password) {
    alert('right!')
    error = false
    window.location.href = "/pages/mainPage/"
  } else {
    alert('wrong!')
    error = true
  }
  if (error) {
  } else {
    submit();
  }
};

function submit() {
  let user = {};
  let fm = new FormData(form);
  fm.forEach((value, key) => {
    user[key] = value;
  });
  console.log(user);
}

