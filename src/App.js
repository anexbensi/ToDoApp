import React, { useState } from "react";

import './App.css';




function App() {
  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')


  return (
    
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input type="text" value={toDo} onChange={(e) => setToDo(e.target.value)} placeholder="🖊️ Add item..." />
        <i onClick={() => setToDos([...toDos, {id:Date.now(),text:toDo, status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">
        {
          toDos.map((value) => {
            console.log(toDos)
            return (
              
              <div className="todo">
                <div className="left">
                <input type="checkbox" onChange={(e)=>{
                  console.log(e.target.checked)
                  console.log(value)
                  setToDos(toDos.filter(obj2=>{
                    if(obj2.id===value.id){
                      obj2.status=e.target.checked
                    }
                    return obj2
                  }))
                }} value={value.status}/>
                  <p>{value.text}</p>
                </div>
                <div className="right">
                  <i className="fas fa-times" onClick={(e)=>{
                    setToDos(toDos.filter(obj=>{
                      if(obj.id===value.id){
                        toDos.splice(value)
                      }return null
                    }))
                  }} ></i>
                </div>
              </div>

              
              
            )

          })
        }
      </div>
      <div><h1>
        {
          toDos.map((obj)=>{
            if(obj.status){
              return(obj.text)
            }else{
              return null
            }
          })
        }
        </h1></div>
      
    </div>
    

    

  );
}

export default App;
