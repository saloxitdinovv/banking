import { transactions } from "/modules/transictions.js/";
import { getData } from "/modules/http.js/";
import { user } from "/modules/user_data"
import { parallaxMouse } from 'parallax-mouse/dist/parallax-mouse.min.js'

parallaxMouse({ elements: '.info', moveFactor: 11, wrap: '.info', perspective: '110px' })
// transactions()
let tbody = document.querySelector("tbody")
getData("/transactions/")
    .then(res =>{
        let filtered = res.filter(item =>item.card.id==JSON.parse(localStorage.getItem("card")).id)
        console.log(res);
        console.log(filtered);
        transactions(filtered,tbody)
    } )
// transactions(,tbody)
let cardiv = document.querySelectorAll(".card p")
let infoNAme = document.querySelector(".info h2")
let curr = document.querySelector(".info p")
infoNAme.innerHTML = JSON.parse(localStorage.getItem("card")).name
curr.innerHTML = JSON.parse(localStorage.getItem("card")).currency

cardiv[0].innerHTML  = JSON.parse(localStorage.getItem("card")).name
cardiv[1].innerHTML  = JSON.parse(localStorage.getItem("card")).currency
cardiv[2].innerHTML  = JSON.parse(localStorage.getItem("card")).date
cardiv[3].innerHTML  = JSON.parse(localStorage.getItem("card")).balance
//  ==JSON.parse(localStorage.getItem("card")).id