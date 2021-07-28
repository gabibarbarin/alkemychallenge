cancelButton = document.querySelector('.cancel-button')
formNewOperation = document.querySelector('.form-operation')
const token = localStorage.getItem('token')
const userId = localStorage.getItem('idUser')
const operationId = localStorage.getItem('id_operation')

axios({
    method: "GET",
    url: `http://localhost:8000/show/${userId}&${operationId}`,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    }})
    .then((response) => {

    if(response.data.data[0].type_operation == 'egreso'){
        document.querySelector('#entry-input').removeAttribute('checked')
        document.querySelector('#egress-input').checked = true
    }

        document.querySelector('#concept').value = response.data.data[0].concept
        document.querySelector('#amount').value = response.data.data[0].amount
        date = response.data.data[0].date.split("T")[0]
        document.querySelector('#date').value = date
    })
        .catch(err => {
        alert('Error intentelo nuevamente mas tarde')
        window.location.href = "../../index.html"
    })

formNewOperation.addEventListener('submit', (e) => {
    e.preventDefault()
    
    axios({
        method: "PUT",
        url: `http://localhost:8000/edit`,
        data: {
            "id_operation": `${operationId}`,
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

document.querySelector('.logout-img').onclick = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('idUser')

    window.location.href = "../../views/login.html"
}

cancelButton.onclick = () => window.location.href = "../../index.html"