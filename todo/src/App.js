import React from 'react';
import './styles.css';
import AddItem from './listitem.js';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const initiallist = [];

function App() {
  const [name, setName] = React.useState('');
  const [list, setList] = React.useState(initiallist);

  function handleChange(event) {
    setName(event.target.value)
  };

  function handleAdd() {
    const newList = list.concat({name, id: uuidv4() });

    setList(newList);    

    setName('');
  };

  function handleDel() {
      
  };

  return (

    <div className='App'>
      <div className='header'>
        <header className='App-header'>
        <h1>Shopping list</h1>
        </header>
      </div>
      <div>
        <input type="text" onChange={handleChange} />
        <button type="button" onClick={handleAdd}>
          Add
        </button>
      </div>

     <ul>
         {list.map((item) => (
          <>
             <li>{item.name}</li>
             <button>delete</button>
             </>
         ))}
     </ul>
          </div>
  /*return (
    <div className="App">
      <header className="App-header">
        <h1>Shopping list</h1>
        <div className='input'>
          <button>-</button>
          <label>
            <input type='text' value={name} onChange={handleChange} />
          </label>
          <button type='button' onClick={handleAdd}>+</button>
        </div>
        <button>Clear All</button>
        <div className='listDiv'>

        </div>
      </header>
    </div>*/
  );
}

export default App;
