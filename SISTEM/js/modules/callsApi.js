import { renderBalance, renderOperation } from "./functions.js"

export const getOperations = () =>{
return axios({
    method: "GET",
    url: 'http://localhost:8000/operations/2',
    headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2MjcxNjcwMjUsImV4cCI6MTYyNzE3MDYyNX0.2EVv2z8dmuhYrI7YaxEaJo2BE2z676D-yJfh1H6M6Tk",
    }})
    .then(response => {
        renderBalance(response.data.data)
        renderOperation(response.data.data)
    })
    .catch(err => console.log(err))
}