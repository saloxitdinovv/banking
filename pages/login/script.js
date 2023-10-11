let form = document.querySelector('form')
let inps = document.querySelectorAll('input')
let a = document.querySelector(".button")
console.log(a.href);

a.onclick = () => {
    fetch(' http://localhost:7000/users', {
            method: 'GET',
        })
        .then(res => res.json())
        .then(res => reload(res))


    // if (JSON.parse(localStorage.getItem("user")).email === inps[0].value && JSON.parse(localStorage.getItem("user")).password === inps[1].value) {
    //     a.href = "/index.html"
    // }
}
function reload(data) {
    for (let i = 0; i < data.length; i++) {
        const element = data[i];
        console.log(element.email);
        
        if (inps[0].value ==element.email||inps[1].value ==element.password) {
            a.href = "/index.html"
            
        }
    }
}