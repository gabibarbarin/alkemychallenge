const token = localStorage.getItem('token')
const userId = localStorage.getItem('idUser')
const operationId = localStorage.getItem('id_operation')
axios({
    method: "GET",
    url: `http://localhost:8000/show/${userId}&${operationId}`,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    }
})
.then((response) => {
    document.querySelector('#amount-show-operation').innerHTML = `$${response.data.data[0].amount}`

    const typeOperation = document.querySelector('#type-operation')
    if(response.data.data[0].type_operation == 'egreso'){
        typeOperation.classList.add('egress-color')
    }else{
        typeOperation.classList.add('entry-color')
    }
    typeOperation.innerHTML = `${response.data.data[0].type_operation}`

    document.querySelector('#concept-show-operation').innerHTML = `${response.data.data[0].concept}`

    date = response.data.data[0].date.split("T")[0]
    document.querySelector('#date').innerHTML = `${date}`

})
.catch(() => {
    alert('Error intentelo nuevamente mas tarde')
    window.location.href = "../../index.html"
})

const edit = document.querySelector('.edit-img')
edit.onclick = () => {
    window.location.href = "../../views/editOperation.html"
}

const returnButton = document.querySelector('.return-button')
returnButton.onclick = () => {
    window.location.href = "../../index.html"
}

const deleteImg = document.querySelector('.delete-img')
deleteImg.onclick = () => {
    axios({
        method: "DELETE",
        url: `http://localhost:8000/delete`,
        data: { id_operation: operationId, },
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        }
    })
    .then((response) => {
        alert(response.data.message)
        window.location.href = "../../index.html"    
    })
    .catch(() => {
        alert('Error intentelo nuevamente mas tarde')
        window.location.href = "../../index.html"
    })
}