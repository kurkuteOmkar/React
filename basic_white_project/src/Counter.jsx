import {useState,useEffect} from "react"
export default function Counter(){
  let  [countx,setCountx]=useState(1);
  let  [county,setCounty]=useState(1);

let onClickx=()=>{
    setCountx(countx+1);
}
let onClicky=()=>{
    setCounty(county+1);
}
useEffect(()=>{
    console.log("printwala")
},[])
return <div>
    <div>Count :{countx}</div>
    <button onClick={onClickx}>Click me</button>
    <div>Count :{county}</div>
    <button onClick={onClicky}>Click me</button>
</div>

}