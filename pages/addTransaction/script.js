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
    window.location.href = "/pages/mainPage/";
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
  fetch("http://localhost:7000/transactions", {
    method: "post",
    body: JSON.stringify({from:user.from,sum:user.sum,category:user.category}),
    headers: {
      "Content-Type": "application/json",
    },
  });
}