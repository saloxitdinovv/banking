let id = location.search.split('=').at(-1)
let h1 = document.querySelector('h1')

fetch('http://localhost:7000/cards/' + id)
    .then(res => res.json())
    .then(res => {
        console.log(res);
        h1.innerHTML = res.name
    })