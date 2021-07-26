import { getAllOperations } from "./callsApi.js";

export const listenerViewMore = () =>{
const viewMore = document.querySelector('#view-more')

    viewMore.addEventListener('click', () => {
        getAllOperations()
        viewMore.style.display = 'none';
    })

}

export const listenerLogout = () =>{
    const logout = document.querySelector('.logout-img')

    logout.addEventListener('click', () => {
        localStorage.removeItem('token')
        localStorage.removeItem('idUser')

        window.location.href = "../../views/login.html"
    })
}

export const listenerNewOperation = () =>{
    const newOperation = document.querySelector('.new-operation')

    newOperation.addEventListener('click', () => window.location.href = "../../views/newOperation.html")
}