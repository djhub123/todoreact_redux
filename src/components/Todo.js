import { useEffect, useRef, useState} from 'react';
import {add_todo,del_todo,rem_todo} from '../actions/action'
import {useDispatch} from 'react-redux';
import { useSelector } from 'react-redux';
import axios from 'axios'

export const  Todo=()=>{

    const [text,settext]=useState([]);
    const list=useSelector((state)=>state.todoReducers.list)
    const dispatch = useDispatch();

    const inputData=useRef("")
useEffect(()=>{
  getdata();
  
},[])

// console.log('list',list)

const getdata=()=>{
  axios.get("http://localhost:3001/todos")
  // .then(data=>data.json())
  //     dispatch(getTodoSussess(data));
  .then((res)=>{
    // settext(data.data)
    console.log("get:",res.data)
      // res.data.map((a)=>{
      // console.log(a.title)
      settext(res.data)
      // list(...res.data)
      // dispatch(add_todo(res))
    // })

  })
  
}


// delete fun  

const deleteRow = (id) => {
    axios.delete(`http://localhost:3001/todos/${id}`).then((res) => {
      getdata();
    });
  };

  // updata item   
const updataRow = (id) => {
  console.log("hi")
  return (

    <input type="text" name="" id="" />
  ),
    axios.put(`http://localhost:3001/todos/${id}`,{
      title:"dilip"
    }).then((res) => {
      getdata();
    });
  };

return (
        <>
        <div className="App">

        <div className="main-div">
        <div className="child-div">
          <figure>
            <figcaption>Add your List here</figcaption>
          </figure>
   
          <div className='addItems'>
            <input type="text" placeholder='add items...'
            //  value={text}
            ref={inputData}
            // onChange={(e)=>{
            //        settext(e.target.value);
            //     //    console.log(e.target.value);
            // }}
            

            />

              
            
              
           
              <button className='btn' onClick={()=>{
               
            //      dispatch(add_todo(text))
                 axios.post('http://localhost:3001/todos',{title:inputData.current.value})
                   .then((res)=>{

                  // })
                  // dispatch(add_todo(res))
                  getdata()
                   })
                  // .then((data)=>{

                  // console.log(data)
                  // })
                  settext([])
              }
           
              }
             
            >

            <i class="uil uil-plus"  ></i>
              </button>
            
            
          </div>
           {/* shhow data  */}
           <div className='App'>

           
           <div className='tododatam'>
             {/* list */}
             {
              
             text
             .map((e)=>{
               return(
                 <>


                 <div  key={e.id} className='Span'>
                    <div className='tododata'>
                
                 <h3 >{e.title}</h3>
                
                    </div>
                  
                  <div className='I'>

                   

                  <i class="uil uil-trash-alt" onClick={()=>{
                    // dispatch(del_todo(e.id))
                    deleteRow(e.id)
                  }}>{e.id}</i>  
                    </div>
              
                 </div>
               <i class="uil uil-trash-alt" onClick={()=>{
                    // dispatch(del_todo(e.id))
                    updataRow(e.id)
                  }}>{e.id}</i> 
                 </>
               ) 
             })}
             
           </div>
           </div>
          
<div className="dilip">
  <button onClick={()=>{
    dispatch(rem_todo())
  }}>
  <span>checklist</span>
  </button>
</div>


        </div>
      </div>
        </div>
      </>
    )
} 