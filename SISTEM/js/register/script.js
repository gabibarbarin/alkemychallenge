const formRegister = document.querySelector('.form-register')
const loginButton = document.querySelector('#login-button')

formRegister.addEventListener('submit', (e) => {
    e.preventDefault()

    axios({
        method: "POST",
        url: 'http://localhost:8000/register',
        data: {
            username: document.querySelector('#username').value,
            email: document.querySelector('#email').value,
            emailConfirmation: document.querySelector('#email2').value,
            password: document.querySelector('#password').value
        },
        headers: {
            "Content-Type": "application/json",
        }})
        .then(response => {
            if(response.data.message != undefined && response.data.message.errors){
                let i = 0
                while(response.data.message.errors[i]){
                    alert(response.data.message.errors[i].msg)
                    i++
                }
            }else if(response.data.message)
                alert(response.data.message)
            else
                window.location.href = "../../views/login.html"
        })
        .catch(err => {
            console.log(err)
        })
})

loginButton.onclick = () => window.location.href = "../../views/login.html"