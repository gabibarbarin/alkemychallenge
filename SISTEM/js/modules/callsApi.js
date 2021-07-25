import { renderBalance, renderOperation } from "./functions.js"

export const getOperations = () =>{
return axios({
    method: "GET",
    url: 'http://localhost:8000/operations/2',
    headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjcyMzE0MjYsImV4cCI6MTYyNzIzNTAyNn0.q_Ny6BSldYl8rO3NHTRugTZV0TTu2U_hBNwRcpKIlbQ",
    }})
    .then(response => {
        renderBalance(response.data.data)
        let i = 0 

        while(response.data.data[i] && i<10){
            renderOperation(response.data.data[i])
            i++
        }
    })
    .catch(err => console.log(err))
}

export const getAllOperations = () =>{
    return axios({
        method: "GET",
        url: 'http://localhost:8000/operations/2',
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjcyMzE0MjYsImV4cCI6MTYyNzIzNTAyNn0.q_Ny6BSldYl8rO3NHTRugTZV0TTu2U_hBNwRcpKIlbQ",
        }})
        .then(response => {
            let i = 10 
            
            while(response.data.data[i]){
                renderOperation(response.data.data[i])
                i++
            }
        })
        .catch(err => console.log(err))
    }