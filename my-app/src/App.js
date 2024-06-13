import { useState } from "react"
import Cell from "./components/cell"
const App =() => {
  const [cells, setCells]=useState(["onnu","","","","","","","",""])
  return (
    <div className="app">
      <div className="gameboard">
        {cells.map(cell => <Cell cell={cell}/>)}
      </div>
      
    </div>
  )
}

export default App;
