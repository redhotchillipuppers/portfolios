import { useState } from 'react';
import React from 'react';
import '../App.css';

function Guess() {

const [num, setNum] = useState(Math.floor(Math.random() *10 + 1));
const [answ, setAns] = useState('');
const [feedback, setfeedback] = useState('')

  function checkans() {
      if(answ === num) {
        setfeedback(`Correct, The number was ` + num + '!')
        setNum(Math.floor(Math.random() * 100))
        setAns(''); 
      } else if(answ < num) {
        setfeedback('Incorrect ' + answ + ' is too low!')
        setAns('')
      } else {
        setfeedback( 'Incorrect ' + answ + ' is too high!')
        setAns('')
      };
  };

  return (
    <div className="projectcontainer">
      <h2>Pick a number between 1 and 100</h2>
      <input 
      type='number' 
      className='userinput' 
      value={answ} 
      onChange={e => setAns(parseInt(e.target.value))}
      min='1'
      max='100'
      />
      <button className='submitbtn' onClick={checkans}>Submit</button>
      <p>{feedback}</p>
    </div>
  );
}

export default Guess;
