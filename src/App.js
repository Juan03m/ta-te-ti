import './App.css';
import { useState } from 'react';
import Board from './components/Board';
import Game from './components/Game';
function App() {
  const[count, setCount]=useState(0);

  function handleClick(){
    setCount(count+1)
  }




  return (
    <div className="App">
      <Game/>
    </div>
  );
}

export default App;
