import React, { FC } from 'react';
import './App.css';

const App: FC = () => {
  return <div className="App">
    <div className='header'>
      <div className='inputContainer'>
        <input className="input" type="text" placeholder='Task...' />
        <input className="input" type="number" placeholder='Deadline (in Days)...' />
      </div>
      <button className='button'>Add Task</button>
    </div>
    <div className='todoList'></div>
  </div>;
}

export default App;
