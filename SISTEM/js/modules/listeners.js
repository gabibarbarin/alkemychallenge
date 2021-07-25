import { getAllOperations } from "./callsApi.js";

export const listeners = () =>{
const viewMore = document.querySelector('#view-more')

    viewMore.addEventListener('click', () => {
        getAllOperations()
        viewMore.style.display = 'none';
    })

}