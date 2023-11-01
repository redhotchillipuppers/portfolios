import { useState, useEffect } from 'react';
import React from 'react';
import '../App.css';


const ToDo = () => {
//Statehook - useState

const [newItem, setNewItem] = useState('');
const [items, setItems] = useState([]);

// Helper functions

function addItem() {
  if(!newItem) {
    alert('enter an item.');
    return;
  }



  const item = {
    id: Math.floor(Math.random() * 1000),
    value: newItem,
    }; 
    setItems(oldlist => [...oldlist, item]);
    setNewItem('');
  };



  function deleteItem(id) {
    const newArray = items.filter(item => item.id !== id);
    setItems(newArray);
  };



return (
<div className='projectcontainer'>
<h2>To Do list</h2>
<input 
type='text'
placeholder='Add an item...'
value={newItem}
onChange={e => setNewItem(e.target.value)}
/>
<button onClick={() => addItem()}>Add</button>
<ul>
  {items.map(item => {
    return(
      <li key={item.id}>{item.value} <button className='deleteButton' onClick={() => deleteItem(item.id)}>X</button></li>
    )
  })}
</ul>

</div>
);}
export default ToDo;