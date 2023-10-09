let form = document.forms.form
let inp = document.querySelectorAll('.inp_sign_up')
let btn = document.querySelector('.continune_in')
let email = document.querySelector('.emeil_in')
let password = document.querySelector('.password_in')

    let patterns = {
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
    let email_local = localStorage.getItem('user')
}