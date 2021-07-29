import { getOperations } from "./modules/callsApi.js";
import { onClickViewMore, onClickLogout, onClickNewOperation, onClickShowOperation, listenerMain } from "./modules/events.js";

const start = async () =>{
    try{
       await getOperations()
       await onClickShowOperation()
       await onClickViewMore()
       await onClickLogout()
       await onClickNewOperation()
       await listenerMain()
    }catch(err){
        alert('Error de sicronizacion')
        window.location.href = "../views/login.html"
    }
}

start()