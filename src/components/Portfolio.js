import React from "react";
import '../App.css';
import Counter from "./counter";
import ToDo from "./ToDo";
import Guess from "./Guess";

function Portfolio () {
    return (
            <div className="container" id='portfolio'>
                <h1 className="header">Portfolio</h1>
                <h3 className="header">Javascript, HTML, CSS</h3>
                <div className='react-projects'>
                    <Counter />
                    <Guess />
                    <ToDo />
                </div>
            </div>
    )
};

export default Portfolio;