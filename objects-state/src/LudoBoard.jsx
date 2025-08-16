import {useState} from "react"
export default function LudoBoard(){
   let [moves,setMoves]=useState({blue:0,red:0,yellow:0,green:0});
    function updateBlue(){
    setMoves((currmoves)=>{
        return {...currmoves,blue:currmoves.blue+1}
    })
    }
    function updateYellow(){
    setMoves((currmoves)=>{
        return {...currmoves,yellow:currmoves.yellow+1}
    })
    }
    function updateRed(){
    setMoves((currmoves)=>{
        return {...currmoves,red:currmoves.red+1}
    })
    }
    function updateGreen(){
    setMoves((currmoves)=>{
        return {...currmoves,greenzz:currmoves.green+1}
    })
    }
    return (
        <div>
            <p>Game Begins!</p>
            <div className="board">
                <p>Blue moves ={moves.blue}</p>
                <button onClick={updateBlue} style={{backgroundColor:"blue"}}>+1</button>
                <p>Yellow moves ={moves.yellow}</p>
                <button onClick={updateYellow} style={{backgroundColor:"yellow"}}>+1</button>
                <p>Green moves={moves.green}</p>
                <button onClick={updateGreen} style={{backgroundColor:"green"}}>+1</button>
                <p>Red moves ={moves.red}</p>
                <button onClick={updateRed} style={{backgroundColor:"red"}}>+1</button>
            </div>
        </div>
    )
}