let form = document.querySelector('form')
let inps = document.querySelectorAll('input')
let a = document.querySelector(".button")
a.onclick = (event) =>{
    let error = false
    inps.forEach(inp => {
        if (inp.value.length === 0) {
            error = true
            inp.style.borderColor = "red"
        } else {
            inp.style.borderColor = "black"
        }

    })
    if (error) {
        alert('go home')
    } else {
        a.href = "/pages/login/index.html"
        submit()
    }
}

function submit() {
    let user = {}
    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
        user["isreg"] = false
    })
    // fetch()
    console.log(user);
    localStorage.setItem("user", JSON.stringify(user))
}