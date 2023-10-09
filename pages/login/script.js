let form = document.querySelector('form')
let inps = document.querySelectorAll('input')
let a = document.querySelector(".button")
console.log(a.href);
a.onclick = () => {
    if (JSON.parse(localStorage.getItem("user")).email === inps[0].value && JSON.parse(localStorage.getItem("user")).password === inps[1].value ) {
        console.log("a");
        a.href = "/index.html"
    }
}