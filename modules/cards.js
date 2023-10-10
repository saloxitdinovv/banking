let cards = document.querySelector(".cards")
let num = 0
if(location.href =="http://localhost:5173/pages/wallets/"){
  num = 7
  for (let i = 0; i < num; i++) {
    cards.innerHTML += `        <div class="card">
    <h3>Visa</h3>
    <p>Rub</p>
  </div>`
  }
}else{
  num = 4
  for (let i = 0; i < num; i++) {
    cards.innerHTML += `        <div class="card">
    <h3>Visa</h3>
    <p>Rub</p>
  </div>`
  }
}