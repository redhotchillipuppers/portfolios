import React from "react";
import '../App.css';
import  cv from '../assets/jccv.pdf';

function Resume () {
    return (
        <div className="container" id='cv'>
            <h1>CV</h1>
            <a href={cv} download="cv">
            <button>&#11015; My CV &#11015;</button>
            </a>
        </div>
    )
};

export default Resume;