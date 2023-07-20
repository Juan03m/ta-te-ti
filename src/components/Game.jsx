import { useState } from "react"
import Board  from "./Board"




export  default function Game(){
    const[history,setHistory]=useState([Array(9).fill(null)]);  // esto es una matriz que guarda cada tablero es decir, cada movimiento del juego
    const [currentMove, setCurrentMove] = useState(0);   //  Numero de movimiento actual y su setter
    const xIsNext=currentMove % 2 === 0;   // si el numero de mov es par, entoces le toca a la x 
    const currentSquares=history[currentMove];  // Movimiento actual, vector ;

    function handlePlay(nextSquares){
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length-1)
    }

    function jumpTo (nextMove){
    setCurrentMove(nextMove)
    }


    const moves=history.map((squares,move)=> {
        let description;
        if(move>0) {
            return(
                <li>
                <a  onClick={()=>jumpTo(move)}>Ir al Movimiento #{move} </a>
                </li>
            )
        }
        else{
            description='Reiniciar Juego '
        }


        return( 
            <li key={move}>
                <button onClick={()=>jumpTo(move)}>{description}</button>
            </li>
        )
    })






    return(
        <>
        <div className="game">
            <Board  xIsNext={xIsNext}  squares={currentSquares} onPlay={handlePlay}/>
        </div>
        <div className="history">
            <ol>{moves}</ol>
        </div>
        </>
    )
}



