import TicketNum from "./TicketNum.jsx"
import "./Ticket.css"
export default function Ticket({num}){
    return (
     <div className="Ticket">
        <h4>Ticket</h4>
     {num.map((n,idx)=>(<TicketNum num={n} key={idx}/>))}
    </div>
    )
}