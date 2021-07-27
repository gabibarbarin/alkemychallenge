const token = localStorage.getItem('token')
const userId = localStorage.getItem('idUser')
const operationId = localStorage.getItem('id_operation')

document.querySelector('.logout-img').onclick = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('idUser')

    window.location.href = "../../views/login.html"
}

axios({
    method: "GET",
    url: `http://localhost:8000/show/${userId}&${operationId}`,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    }
})
.then((response) => {
    const amount = document.querySelector('#amount-show-operation')
    amount.innerHTML = `$${response.data.data[0].amount}`
    if(response.data.data[0].type_operation == 'egreso'){
        amount.classList.add('egress-color')
    }else{
        amount.classList.add('egress-color')
    }
    document.querySelector('#type-operation').innerHTML = `${response.data.data[0].type_operation}`
    document.querySelector('#concept').innerHTML = `${response.data.data[0].concept}`
    document.querySelector('#date').innerHTML = `${response.data.data[0].date}`

})
.catch(err => {
    alert('Error intentelo nuevamente mas tarde')
    window.location.href = "../../index.html"
})

const edit = document.querySelector('.edit-img')
edit.onclick = () => {
    window.location.href = "../../views/editOperation.html"
}