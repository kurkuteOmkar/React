import './App.css'
import Lottery from "./lottery.jsx"
import { sum } from "./helpet"
import Ticket from "./Ticket.jsx";

function App() {
  
let winConditions=(tickets)=>{
 return tickets.every((num)=>num===tickets[0])
}
  return (
    <>
    {/* <Omkar/> */}
 <Lottery n={3} winCondition={winConditions}/>
    </>
  ) 
}

export default App
