import {
	cards,
	reloadCards
} from "./card.js"

let cards_box = document.querySelector(".cards-box")
let user = JSON.parse(localStorage.getItem("user"))
document.querySelector("#user-email").textContent = user.email


cardsBox(cards, cards_box)


function cardsBox(arr, place) {
	let items_box = document.createElement("div")
	let add_btn = document.createElement("button")

	items_box.classList.add("items-box")

	add_btn.textContent = "Добавить"

	add_btn.onclick = () => window.location.href = "./create-cart.html"

	place.append(items_box, add_btn)

	reloadCards(arr, items_box)
}