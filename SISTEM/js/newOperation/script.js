cancelButton = document.querySelector('.cancel-button')
formNewOperation = document.querySelector('.form-operation')
const token = localStorage.getItem('token')
const userId = localStorage.getItem('idUser')

formNewOperation.addEventListener('submit', (e) => {
    e.preventDefault()
    let typeOperation = ''
    if(document.querySelector('#entry-input').checked)
        typeOperation = document.querySelector('#entry-input').value
    else
        typeOperation = document.querySelector('#egress-input').value
    
    axios({
        method: "POST",
        url: `http://localhost:8000/store`,
        data: {
            id_user: userId,
            "type_operation": typeOperation,
            "concept": document.querySelector('#concept').value,
            "amount": document.querySelector('#amount').value,
            "date": document.querySelector('#date').value
        },
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        }})
        .then(() => {
            window.location.href = "../../index.html"
        })
        .catch(err => {
            alert('Error intentelo nuevamente mas tarde')
            window.location.href = "../../index.html"
        })
})

cancelButton.addEventListener('click', (e) => {
    e.preventDefault()
    window.location.href = "../../index.html"
})