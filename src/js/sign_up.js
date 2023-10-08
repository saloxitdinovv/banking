let form = document.forms.form
let inp = document.querySelectorAll('.inp_sign_up')
let btn = document.querySelector('.continune_up')
let emeil = document.querySelector('.emeil')
let name_n = document.querySelector('.name')
let surname = document.querySelector('.surname')
let password = document.querySelector('.password')

    let patterns = {
        name: /^[a-z ,.'-]+$/i,
        surname: /^[a-z ,.'-]+$/i,
        password: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
        email: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
    }
    
    form.onsubmit = (event) => {
        event.preventDefault()
    
        function validation(regex, div) {
            if (regex.test(div.value)) {  
                div.classList.remove("error");  
              } else {  
                div.classList.add("error");  
              }  
        }
    
        let user = {}
    
        let fm = new FormData(form)
    
        fm.forEach((value, key) => {
            user[key] = value
        })
    
        inp.forEach(inp => {
            inp.onkeyup = () => {
                validation(patterns[inp.name], inp)
            }
        })
    }

btn.onclick = () => {
    let todo = {
        name: name_n.value,
        surname: surname.value,
        email: emeil.value,
        password: password.value
    }
    localStorage.setItem('user', JSON.stringify(todo))
}
console.log(
    localStorage.getItem('user')
);