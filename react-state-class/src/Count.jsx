import {useState} from "react"
function Count(){
 function math(){
  console.log("init is exicuted")
 return Math.random()
 }
    let [count,setCount]=useState(math());
 
  function onclick(){
    setCount((currCount)=>{
        return currCount+1;
    })
    setCount((currCount)=>{
        return currCount+1;
    })
   
    
  }
    return <div>
        <h3>Count ={count}</h3>
        <button onClick={onclick}>increment count</button>
    </div>
}
export default Count;