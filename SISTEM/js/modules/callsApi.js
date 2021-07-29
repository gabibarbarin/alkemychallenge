import { renderBalance, renderEmptyOperations, renderOperation } from "./functions.js"
const token = localStorage.getItem('token')
const userId = localStorage.getItem('idUser')

export const getOperations = () =>{
return axios({
    method: "GET",
    url: `http://localhost:8000/operations/${userId}`,
    headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
    }})
    .then(response => {
        
        if(!response.data.message){
            renderBalance(response.data.data)
            let i = 0 

            while(response.data.data[i] && i<10){
                renderOperation(response.data.data[i])
                i++
            }
        }else{
            renderBalance(0)
            renderEmptyOperations(response.data.message)
        }
    })
    .catch(err => {
        if(err.response.status === 401){
            window.location.href = "../../views/login.html"
        }
    })
}

export const getAllOperations = () =>{
    return axios({
        method: "GET",
        url: `http://localhost:8000/operations/${userId}`,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        }})
        .then(response => {
            let i = 10 

            while(response.data.data[i]){
                renderOperation(response.data.data[i])
                i++
            }

            let showOperation = document.querySelectorAll('.operation')

            i = 0
            while(showOperation[i]){

                showOperation[i].onclick = (event) => {
                    event.path.forEach(element => {
                        if(element.id != '' && element.id != 'main-home' && element.id != undefined && element.id != null){
                            localStorage.setItem('id_operation', element.id)
                        }
                    })
                    window.location.href = '../../views/showOperation.html'
                }
        
                i++
            }
        })
        .catch(err => {
            if(err.response.status === 401){
                window.location.href = "../../views/login.html"
            }
        })
}

export const logout = () =>{
    return axios({
        method: "GET",
        url: `http://localhost:8000/operations/${userId}`,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        }})
        .then(response => {
            let i = 10 
            
            while(response.data.data[i]){
                renderOperation(response.data.data[i])
                i++
            }
        })
        .catch(err => {
            if(err.response.status === 401){
                window.location.href = "../../views/login.html"
            }
    })
}