import { ADD_TODO,DEL_TODO,REM_TODO } from "./actionType";


export const add_todo=(data)=>{
    return {
        type:ADD_TODO,
        payload: {
            id:new Date().getTime().toString(),
            data:data
        }
    }
}
export const del_todo=(id)=>{
    return {
        type: DEL_TODO,
        id
    }
}
export const rem_todo=()=>{
    return {
        type: REM_TODO,
        
    }
}