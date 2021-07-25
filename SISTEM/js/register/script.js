const formRegister = document.querySelector('.form-register')

formRegister.addEventListener('submit', (e) => {
    e.preventDefault()

    axios({
        method: "POST",
        url: 'http://localhost:8000/register',
        data: {
            username: document.querySelector('#username').value,
            email: document.querySelector('#email').value,
            password: document.querySelector('#password').value
        },
        headers: {
            "Content-Type": "application/json",
        }})
        .then(response => {
            console.log(response)
            window.location.href = "../../views/login.html"
        })
        .catch(err => console.log(err))
})