let container = document.querySelector(".container");
let header = document.createElement("header");
let headerRight = document.createElement("div");
let headerLeft = document.createElement("div");
let main = document.createElement("a");
let myWallets = document.createElement("a");
let myTransactions = document.createElement("a");
let myEmail = document.createElement("p");
let exit = document.createElement("img");
let email = document.querySelector('.email')
let userName = document.querySelector('.userName')

headerRight.classList.add("headerRight");
headerLeft.classList.add("headerLeft");
exit.classList.add("exit");

email.innerHTML = JSON.parse(localStorage.getItem('user')).email
main.innerHTML = "Главная";
myWallets.innerHTML = "Мои кошельки";
myTransactions.innerHTML = "Мои транзакции";
myEmail.innerHTML = JSON.parse(localStorage.getItem('user')).email;
exit.src = "/public/log-out.png";
userName.innerHTML = `${JSON.parse(localStorage.getItem('user')).name} ${JSON.parse(localStorage.getItem('user')).lastname}`

document.body.prepend(header);
header.prepend(headerRight, headerLeft);
headerRight.prepend(main, myWallets, myTransactions);
headerLeft.prepend(myEmail, exit);

let allWallets = document.createElement("div");
allWallets.classList.add("allWallets");
for (let i = 0; i <= 3; i++) {
  let wallet = document.createElement("div");
  let walletName = document.createElement("p");
  let currency = document.createElement("p");

  wallet.classList.add("wallet");
  walletName.classList.add("walletName");
  currency.classList.add("currency");

  walletName.innerHTML = "Visa";
  currency.innerHTML = "RUB";

  allWallets.prepend(wallet);
  wallet.prepend(walletName, currency);
}
container.append(allWallets);
let t = document.createElement("h1");
t.innerHTML = "Последние транзакции";
t.style.marginTop = "70px";
container.append(t);

let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");
let tr = document.createElement("tr");
for (let i = 0; i <= 4; i++) {
  let th = document.createElement("th");
  th.style.padding = "5px 50px";
  th.style.color = "rgb(164, 160, 160)";
  if (i === 0) {
    th.innerHTML = "Когда";
  } else if (i === 1) {
    th.innerHTML = "Сумма транзакции";
  } else if (i === 2) {
    th.innerHTML = "Категория";
  } else if (i === 3) {
    th.innerHTML = "Отправлено с кошелька";
  } else if (i === 4) {
    th.innerHTML = "ID";
  }
  tr.prepend(th);
}
thead.prepend(tr);
for (let i = 0; i <= 6; i++) {
  let tr = document.createElement("tr");
  tbody.prepend(tr);
  for (let k = 0; k <= 4; k++) {
    let td = document.createElement("td");
    td.style.padding = "7px 50px";
    if (k === 0) {
      td.innerHTML = "4 дня назад";
    } else if (k === 1) {
      td.innerHTML = "414,000,000";
    } else if (k === 2) {
      td.innerHTML = "Автомобиль";
    } else if (k === 3) {
      td.innerHTML = "Visa";
    } else if (k === 4) {
      td.innerHTML = "1231212";
    }
    tr.prepend(td);
  }
}
container.append(table);
table.prepend(thead, tbody);
table.style.marginTop = "50px";
exit.onclick = () => {
  if (confirm("Вы уверены?")) {
    window.location.href = "/pages/signup/";
  }
};
