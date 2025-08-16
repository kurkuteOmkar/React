import {useState} from "react"
import Ticket from "./Ticket.jsx"
import { genTicket,sum } from "./helpet"
import Button from "./Button.jsx"
function Lottery({n=3,winCondition}){
    let [ticket,setTicket]=useState(genTicket(n))
    let isWinning=winCondition(ticket)
    function buyTicket(){
        setTicket(genTicket(n));
    }
    
    return <div>
        <h1>Lottery Game!</h1>
        <Ticket num={ticket}/>
        <br />
        <Button onPress={buyTicket}/>
        <h3>{isWinning && "Congratulation you won"}</h3>
        </div>
}
export default Lottery;