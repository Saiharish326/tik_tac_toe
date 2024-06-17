import { useState } from "react"
import Cell from "./components/cell"
const App =() => {
  const [cells, setCells]=useState(["","","","","","","","",""])
  const [go, setGo]=useState("circle")
  const [winningMessage, setWinningMessage]=useState(null)
  const message="it is now "+go+"'s turn"
  const checkScore = () => {
    const winningCombos = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
    ]
  }
  return (
    <div className="app">
      <div className="gameboard">
        {cells.map((cell,index) =>
          <Cell 
            key={index}
            id={index}
            cell={cell}
            go={go}
            setGo={setGo}
            cells={cells}
            setCells={setCells}
          />
        )}
      </div>
        <p>{winningMessage || message}</p>
      
    </div>
  )
}

export default App;
