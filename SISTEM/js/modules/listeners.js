import { getAllOperations } from "./callsApi.js";
const token = localStorage.getItem('token')

export const onClickViewMore = () =>{
const viewMore = document.querySelector('#view-more')

    viewMore.onclick = () =>{
        getAllOperations()
        viewMore.style.display = 'none';
    }

}

export const onClickLogout = () =>{
    const logout = document.querySelector('.logout-img')

    logout.onclick = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('idUser')

        window.location.href = "../../views/login.html"
    }
}

export const onClickNewOperation = () =>{
    const newOperation = document.querySelector('.new-operation')

    newOperation.onclick = () =>addEventListener('click', () => window.location.href = "../../views/newOperation.html")
}

export const onClickShowOperation = () =>{
    let showOperation = document.querySelectorAll('.operation')
    let i = 0
    let auxBool = false

    while(showOperation[i]){

        showOperation[i].onclick = (event) => {
            event.path.forEach( element => {
                if(element.className == 'delete-img-show'){
                    console.log(element.className)
                    auxBool = true
                    return axios({
                        method: "DELETE",
                        url: `http://localhost:8000/delete`,
                        data: { id_operation: event.path[1].id, },
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        }
                    })
                    .then((response) => {
                        alert(response.data.message)
                        window.location.href = "/index.html"    
                    })
                    .catch(() => {
                        alert('Error intentelo nuevamente mas tarde')
                        window.location.href = "/index.html"
                    })
                }
                else if(element.id != '' && element.id != 'main-home' && element.id != undefined && element.id != null
                    && !auxBool){
                    auxBool = true
                    localStorage.setItem('id_operation', element.id)
                    window.location.href = '../../views/showOperation.html' 
                }
            })
        }

        i++
    }

}

export const onClickDeleteOperation = () =>{
    let deleteOperation = document.querySelectorAll('.delete-img-show')
    let i = 0
    
    while(deleteOperation[i]){

        deleteOperation[i].onclick = () => {
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
                window.location.href = "/index.html"    
            })
            .catch(() => {
                alert('Error intentelo nuevamente mas tarde')
                window.location.href = "/index.html"
            })
        }

        i++
    }

}

export const listenerMain = () =>{
    const main = document.querySelector('#main-home')
    const footer = document.querySelector('.footer-home')
    if(main.clientHeight <= 400){
        footer.classList.add('position-absolute')
        console.log(main.clientHeight)
    }
}