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
            if(response.data.message != undefined && response.data.message.errors){
                let i = 0
                console.log(response.data.message.errors[i])
                while(response.data.message.errors[i]){
                    alert(response.data.message.errors[i].msg)
                    i++
                }
            }else if(response.data.message)
                alert(response.data.message)
            else{
                localStorage.setItem("token", response.data.token)
                localStorage.setItem("idUser", response.data.payload.user_id)
                window.location.href = "/index.html"
            }
        })
        .catch(err => console.log(err))
})

registerButton.onclick = () => window.location.href = "../../views/register.html"