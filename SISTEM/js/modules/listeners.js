import { getAllOperations } from "./callsApi.js";

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
    
    while(showOperation[i]){

        showOperation[i].onclick = (event) => {
            event.path.forEach(element => {
                if(element.id != '' && element.id != 'main' && element.id != undefined && element.id != null){
                    localStorage.setItem('id_operation', element.id)
                }
            })
            window.location.href = '../../views/showOperation.html'
        }

        i++
    }

}