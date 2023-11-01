import React, {useState} from "react";
import '../App.css';


function Counter() {
    let [num, setNum] = useState(0)

    return (
            <div className="projectcontainer">
                <h2>Counter</h2>
                
                <p>{num}</p>
                <button className='counterbutton' onClick={() => setNum(num++)}>&#x2206;</button>
                <button className='counterbutton' onClick={() => setNum(0)}>&#8634;</button>
                <button className='counterbutton' onClick={() => setNum(num--)}>&#x2207;</button>
            </div>
    )
}

export default Counter; 