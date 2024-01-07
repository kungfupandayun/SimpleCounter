import { useState } from 'react';
import './App.css';

function App() {
  const [nb,setNb]=useState(0);
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <body className="App-body">
        <div className="title">Counter</div>
        <div className="value">{nb}</div>
        <div className="buttons">
          <button className="button" onClick={() => setNb(nb-1)}>DECREASE</button>
          <button className="button" onClick={() => setNb(0)}>RESET</button>
          <button className="button" onClick={() => setNb(nb+1)}>INCREASE</button>
        </div>
      </body>
    </div>
  );
}

export default App;
