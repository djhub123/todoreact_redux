
const init={
    list:[
      

    ]
}


export const todoReducers=(state=init,action)=>{
  switch(action.type){
      case "ADD_TODO" :
          const {id,data}=action.payload;
          
          return{
              ...state,
              list:[
                  ...state.list,
                  {
                      id:id,
                      data
                  }
              ]
          }
      case "DEL_TODO" :
       const newlist= state.list.filter((e)=>e.id!==action.id)
          
          return{
              ...state,
              list:newlist
          }
          case"REM_TODO":
          return{
              ...state,
              list:[]
          }

          default :return state
  }
}