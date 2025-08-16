import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';
function ToDoList(){
let [newTask,addNewTask]=useState("")
let [task,addTask]=useState([{tasks:"Wake Up",id:uuidv4(),complete:false}])
function newtask(event){
    addNewTask(event.target.value)
}
function addtask(){
addTask([...task,{tasks:newTask,id:uuidv4()}])
addNewTask("")
}
function deleteTask(tas){
    addTask( updateTask=task.filter((ta)=>ta.id!==tas.id))
}
function upper(){
  
       const upperCase=task.map(la=>({...la,tasks:la.tasks.toUpperCase() }))
  addTask(upperCase);
}
function singleUpper(t){
    const single=task.map((ta)=>{
    if(ta.id==t){
     return  { ...ta,tasks:ta.tasks.toUpperCase()
     }
    }
    return ta;
    }

    )
    addTask(single);
}
function complete(com){
    const upadeComplete=task.map(ta=>{
        if(ta.id==com){
            return {...ta,complete:true}
        }
        return ta
    })
    addTask(upadeComplete);
}
function completeAll(){
    const complete=task.map((a)=>{
      return {...a,complete:true}
})
addTask(complete)
}
    return <div>
        <h1>Enter Your tasks .....</h1>
        <input type="text" value={newTask} onChange={newtask} placeholder="task"/>
        <br /><br />
        <button onClick={addtask}>Submit</button>
        <br /><hr />
        <ul>{task.map((t)=>{
        if(t.complete==true)
            return (
            <li key={t.id}><span style={{textDecoration:"line-through"}}>{t.tasks}</span> <button onClick={()=>deleteTask(t)}>Delete</button><button onClick={()=>{
                singleUpper(t.id)
            }}>Single UpperCase</button><button onClick={()=>complete(t.id)}>Complete</button></li>
        )
        else{
            return (
            <li key={t.id}><span>{t.tasks}</span>  <button onClick={()=>deleteTask(t)}>Delete</button><button onClick={()=>{
                singleUpper(t.id)
            }}>Single UpperCase</button><button onClick={()=>complete(t.id)}>Complete</button></li>
        )}})}</ul>
        <br />
        <button onClick={upper}>UpperCase</button>
        <button onClick={completeAll}>completeAll</button>
    </div>
}
export default ToDoList;