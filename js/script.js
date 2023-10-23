import {
	cards,
	CreateCardsBox,
} from "./card.js"
//import {
//	populateTable,
//	transactions,
//	table
//} from "./transactions.js"

const sign = document.forms.sign
const log = document.forms.log
const cards_box = document.querySelector(".cards-box")

let user = JSON.parse(localStorage.getItem("user"))

if (cards_box) {
	CreateCardsBox(cards, cards_box, 4)
	document.querySelector("#user-name").textContent = `${user.name} ${user.surname}`
	document.querySelector("#user-email").textContent = user.email
}


if (sign) {
	sign.onsubmit = (event) => {
		event.preventDefault()

		let user = {
			id: Math.random(),
		}

		let fm = new FormData(event.target)
		fm.forEach((value, key) => {
			user[key] = value
		})

		window.location.href = "./pages/log.html"
		localStorage.setItem("user", JSON.stringify(user))
		sign.reset()
	}
}

if (log) {
	log.onsubmit = (event) => {
		event.preventDefault()
		let log = {}

		let fm = new FormData(event.target)
		fm.forEach((value, key) => {
			log[key] = value
		})
		console.log(user);
		if (user.email === log.email && user.password === log.password) {
			window.location.href = "./home.html"
		} else {
			alert("Эмейл или пароль неверный")
		}

	}
	document.querySelector(".name").value = user.email
}