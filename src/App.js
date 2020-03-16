import React from 'react';
import './App.css';
import useCount from './state';
import Home from './Home';

function App() {
  const count = useCount();
  return (
    <div className="App">
      <header className="App-header">
        <p>
          App <code>{count.count}</code>
        </p>
      </header>
      <p>component Home : </p>
      <Home></Home>
    </div>
  );
}

export default App;
