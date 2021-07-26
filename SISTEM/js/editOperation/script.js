cancelButton = document.querySelector('.cancel-button')
formNewOperation = document.querySelector('.form-operation')
const token = localStorage.getItem('token')
const userId = localStorage.getItem('idUser')

const showOperation = () =>{
    axios({
        method: "GET",
        url: `http://localhost:8000/show/${userId}&10`,
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
            console.log(err)
            window.location.href = "../../index.html"
        })
}

showOperation()

formNewOperation.addEventListener('submit', (e) => {
    e.preventDefault()
    
    axios({
        method: "PUT",
        url: `http://localhost:8000/edit`,
        data: {
            "id_operation": "10",
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