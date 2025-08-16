import {useState} from "react";

export default function Form(){
   let [formElement,setFormElement]=useState({fullName:"Eg.Kurkute Omkar Gokul",userName:"omkar@2005",password:2422,rating:5})
   function formChange(event){
       let {name,value}=event.target
    setFormElement((curr)=>{
       return{ ...curr,[name]:value}
    })
   }
 let handleSubmit=(event)=>{
event.preventDefault();
setFormElement((curr)=>{
return {...curr,fullName:"",userName:""}
})
   }
return <div>
    <div>Form</div><br />
    <form action="">
        <input type="text" value={formElement.fullName} name="fullName" onChange={formChange} placeholder="Enter your full name" />
        <br /><br />
        <input type="text" value={formElement.userName} name="userName" onChange={formChange}placeholder="Enter you userName" />
        <br /><br />
        <input type="number" value={formElement.password} name="password" onChange={formChange}placeholder="Enter password" />
        <br /><br />
        <input type="number" value={formElement.rating} name="rating" onChange={formChange} placeholder="Rating" min={2} max={4} />
        <br /><br />
        <button onClick={handleSubmit}>Submit</button>
    </form>
</div>

}