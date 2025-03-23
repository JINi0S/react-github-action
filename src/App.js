import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [disabled, setDisabled] = useState(false);

  return (
    <div className="App">
      <header className="App-header">
        <h3 data-testid="counter">{count}</h3>
        <div>
        <button onClick={()=>setCount(prev => prev-1)} data-testid='minus-button' disabled={disabled}>-</button>
        <button onClick={()=>setCount(prev => prev+1)} data-testid='plus-button' disabled={disabled}>+</button>
        </div>
        <div>
        <button onClick={()=> setDisabled(prev => !prev)} style={{backgroundColor:"blue"}} data-testid='on/off-button'>on/off</button>
        </div>
      </header>
    </div>
  );
}

export default App;
