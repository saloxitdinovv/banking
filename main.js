let inp = document.querySelector('input')
let btn = document.querySelector('button')
let h1 = document.querySelector('h1')


console.log(
	JSON.parse(localStorage.getItem('title'))
);

inp.onkeyup = () => {
	h1.innerHTML = inp.value
}

btn.onclick = () => {
	let todo = {
		id: 1,
		task: inp.value,
		isDone: false,
		time: new Date().getHours() + ":" + new Date().getMinutes()
	}


	localStorage.setItem('title', JSON.stringify(todo))
}