import {useState} from "react";
function Like(){
   let  [isLike,setIsLike]=useState(false);
   let [count,setCount]=useState(0);
   const styles={
    color:"red",
   }
  function toggle(){
    setIsLike(!isLike);
    setCount(count+1);
  }
  return <div>
    <h3>Count : {count}</h3>
    <h1>{isLike?<i onClick={toggle} style={styles} className="fa-solid fa-heart"></i>:<i onClick={toggle}  className="fa-regular fa-heart"></i>}</h1>
  </div>
}
export default Like;
