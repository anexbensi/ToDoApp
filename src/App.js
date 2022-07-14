import React, { useState , useEffect,useReducer} from "react";
import store from "store";

import './App.css';




function App() {

  


  const [toDos, setToDos] = useState([])
  const [toDo, setToDo] = useState('')

  // const[data,dispatch]=useReducer(()=>{
  //   const localdata = localStorage.getItem('toDos')
  //   return localdata ? JSON.parse(localdata):[]
  // })

  // // setToDo()
  // // useEffect(()=>{
  // //   setToDos(JSON.parse(localStorage.getItem('todo')))
  // // },[])


  // useEffect(()=>{
  //   localStorage.setItem('toDos',JSON.stringify(toDos))
  // },[toDos]) 




  var date = new Date()
  const weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  let day = weekday[date.getDay()];
  console.log(date)



  const deleteTask = (index) => {

    var ask = window.confirm("Do you want to delete the task?");
    if (ask) {
      const test = [...toDos];
      test.splice(index, 1);

      setToDos(test)
    } else {
      console.log("Don't delete");
    }


  }


  const deleteall = () => {
    var ask = window.confirm("Do you want to delete all tasks?")
    if (ask) {
      setToDos([])
    }
    else {
      console.log("delete operation aborted");
    }
  }




  return (

    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br /><center>
          <h2>Hoo, it's {day}</h2></center>
      </div>
      <div className="input">
        <input type="text" value={toDo} onChange={(e) => setToDo(e.target.value)} placeholder="ADD TASK" />
        <i onClick={() => {
          if (toDo === "" || toDo===" ") {
            alert("Field empty!")
          } else {
            setToDos([...toDos, { id: Date.now(), text: toDo, status: false }]); setToDo("")
          }
        }} className="fas fa-plus"></i>
      </div>
      <div className="common">

        <p className="common1">ACTIVE TASKS</p>


        {
          toDos.map((value, index) => {
            console.log(toDos)
            return (
              <div className="items">
                <div className="main">
                  <div className="left-part" >

                    <p>{index + 1} . {value.text}</p>
                  </div>
                  <div className="right-part" >
                    <input type="checkbox" onChange={(e) => {
                      console.log(e.target.checked)
                      console.log(value)
                      value.index = index + 1
                      setToDos(toDos.filter(obj2 => {
                        if (obj2.id === value.id) {
                          obj2.status = e.target.checked
                        }
                        return obj2
                      }))
                    }} value={value.status} />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <i className="fa-solid fa-trash" onClick={() => deleteTask(value.index)}
                    ></i>
                  </div>
                  <br />
                  <hr />
                </div>





              </div>)
          })
        }
      </div>
      <div className="common2">
        <p className="common1">COMPLETED TASKS</p>
        <p>
          {
            toDos.map((obj) => {

              if (obj.status) {
                return (<div className="completed">{obj.index} . {obj.text}</div>)
              } else {
                return null
              }
            })
          }
        </p>
      </div>
      <div className="footer mt-3">
        <button className="btn btn-danger" onClick={() => deleteall()}>Delete all Tasks</button>
      </div>


    </div>




  );
}

export default App;
