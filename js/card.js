export let cards = [
	{
		name: "Visa",
		currency: "RUB",
		id: "1"
		
	},
	{
		name: "Visa",
		currency: "EUR",
		id: "2"
	},
	{
		name: "Visa",
		currency: "USD",
		id: "3"
	}
]

export function CreateCardsBox(arr, place, limit) {
	let title = document.createElement("h2")
	let items_box = document.createElement("div")
	let all_cards = document.createElement("a")

	all_cards.classList.add("link")
	items_box.classList.add("items-box")

	title.textContent = "Мои кошельки"
	all_cards.textContent = "Смотреть все кошельки"
	all_cards.href = "./all-cards.html"

	place.append(title, items_box, all_cards)

	reloadCards(arr.slice(0, limit), items_box, arr.length)
}


export function reloadCards(arr, place, length) {
	place.innerHTML = ""
	for (let item of arr) {
		let card = document.createElement("div")
		let card_front = document.createElement("div")
		let card_back = document.createElement("div")
		let card_name = document.createElement("span")
		let currency = document.createElement("span")
		let balance = document.createElement("span")


		card.classList.add("card")
		card_front.classList.add("front")
		card_back.classList.add("back")

		card.style.background = `blue`
		card_name.textContent = item.name
		currency.textContent = item.currency
		balance.innerHTML = cards.id

		card.onclick = () => {
			handleClick(card)
		}

		card.append(card_front, card_back)
		card_front.append(card_name, currency)
		card_back.append(balance)
		place.append(card)
	}

	if (length < 4) {
		let add_card = document.createElement("div")
		let img = document.createElement("img")
		let add_card_title = document.createElement("p")

		add_card.classList.add("card", "add-card-btn")
		img.classList.add("add-card__img")

		add_card_title.textContent = "Добавить карту"
		img.src = "../icons/add-icon.svg"
		add_card.onclick = () => window.location.href = "./create-cart.html"

		add_card.append(add_card_title, img)
		place.append(add_card)
	}
}


function handleClick(arg) {
	if (arg.classList.contains("active")) {
		arg.classList.remove("active")
		arg.classList.add("close")
	} else {
		arg.classList.remove("close")
		arg.classList.add("active")
	}
}