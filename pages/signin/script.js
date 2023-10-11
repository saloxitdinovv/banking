let form = document.forms[0];
let emailInp = document.querySelector(".email");
let passwordInp = document.querySelector(".password");

form.onsubmit = (event) => {
  event.preventDefault();
  let error = false;
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
  fetch("http://localhost:7000/users")
    .then((res) => res.json())
    .then((res) => checking(res));
}
function checking(arr) {
  arr.forEach((item) => {
    if (item.email === emailInp.value) {
      if (item.password === passwordInp.value) {
        window.location.href = "/pages/mainPage/";
      } else {
        console.log("wrong password");
      }
    } else {
      console.log("wrong email");
    }
  });
}
