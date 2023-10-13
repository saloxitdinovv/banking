let form = document.forms.addTrans
let inps = form.querySelectorAll('input')

form.onsubmit = (e) => {
    e.preventDefault()

    let error = false

    inps.forEach(inp => {
        if (inp.value.length === 0) {
            inp.classList.add("error");
        } else {
            error = true
            inp.classList.remove("error");
        }
    });

    if(error){
        alert('Типа добавил')
        location.assign('/pages/transictions/')
    }
}