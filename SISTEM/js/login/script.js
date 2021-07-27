const formLogin = document.querySelector('.form-login')
const registerButton = document.querySelector('#register-button')

formLogin.addEventListener('submit', (e) => {
    e.preventDefault()

    axios({
        method: "POST",
        url: 'http://localhost:8000/login',
        data: {
            email: document.querySelector('#email').value,
            password: document.querySelector('#password').value
        },
        headers: {
            "Content-Type": "application/json",
        }})
        .then(response => {
            localStorage.setItem("token", response.data.token)
            localStorage.setItem("idUser", response.data.payload.user_id)
            window.location.href = "/index.html"
        })
        .catch(err => console.log(err))
})

registerButton.onclick = () => window.location.href = "../../views/register.html"