let form = document.querySelector('form')
let inps = document.querySelectorAll('input')
let a = document.querySelector(".button")
a.onclick = (event) => {
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

        submit()
    }
}

function submit() {
    let user = {}
    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })
    fetch("http://localhost:7000/users?email=" + user.email)
        .then(res => res.json())
        .then(res => {
            if (res.length > 0) {
                alert("This email was registered before")
            } else {
                post()
            }
        })
    function post() {
        fetch("http://localhost:7000/users", {
            method: "post",
            body: JSON.stringify(user),
            headers: {
                "Content-type": "application/json"
            }
        })
            .then(res => {
                if (res.status === 200 || res.status === 201) {
                    localStorage.setItem("user", JSON.stringify(user))
                    a.href = "/pages/login/"
                }
            })
    }


    console.log(user);

}