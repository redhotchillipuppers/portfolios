import React from "react";
import '../App.css';
import Counter from "./counter";
import ToDo from "./ToDo";
import Guess from "./Guess";

function Portfolio () {
    return (
        <div>
            <h1 className="header">Portfolio</h1>
            <h3 className="header">Javascript, HTML, CSS</h3>
            <h3 className="header">React js</h3>
            <div className='react-projects'>
            <Counter />
            <Guess />
            <ToDo />
            </div>
            <h3 className="header">Other</h3>
        </div>
    )
};

export default Portfolio;