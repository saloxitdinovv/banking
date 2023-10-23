import { user } from "../../modules/user_data";
import { getData } from "../../modules/http";
import { transactions } from "../../modules/transactions";

let userName = document.querySelector("h3");
let tbody = document.querySelector("tbody");
let card = null;
let cardBalance = document.querySelector(".info_box .balance");
let convBalance = document.querySelector(".card_info .balance");
let cardBox = document.querySelector(".card_box");
let backCard = document.querySelector(".backCard");
let cardId = document.querySelector(".card");

console.log(cardBox);

let id = location.search.split("=").at(-1);

getData("/cards/" + id).then((res) => {
  userName.innerHTML = res?.name;
  cardBalance.innerHTML = `Balance:${res?.balance}$`;
  convBalance.innerHTML = `${res?.balance}$`;
  card = res;
  getData("/transactions?card_id=" + id).then((res) =>
    transactions(res, tbody)
  );
});

userName.innerHTML = user?.name;

cardBox.ondblclick = () => {
  if (cardBox.classList.contains("activated")) {
    cardBox.classList.remove("activated");
    cardBox.classList.add("disactivated");
  } else if (cardBox.classList.contains("disactivated")) {
    cardBox.classList.add("activated");
    cardBox.classList.remove("disactivated");
  }
};
document.documentElement.style.setProperty(`--id`, `'${id}'`);
console.log(id);
