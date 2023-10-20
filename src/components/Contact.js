import React from "react";
import '../App.css';
import { useState } from "react";

function Contact () {
    
    const [name, setName] = useState('');
    const [company, setCompany] = useState('');
    const [tel, setTel] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className='contact'>
    <h1>Contact Me:</h1>
    <h3>I am open to Employment, Contract, and Freelance work.</h3>
    <div className='contactBox'>
        <h3>Please submit the form below and I will contact you</h3>
        <form onSubmit={handleSubmit}>
        <p>Name
            <input 
                type='text' 
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
        </p>
        <p>Company
            <input 
            maxLength='19' 
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            />
        </p>
        <p>Tel
            <input 
            type='text' 
            name='number' 
            maxLength='11' 
            value={tel}
            onChange={(e) => setTel(e.target.value)}
            />
        </p>
        <p>Email
            <input 
            type='email' 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
        </p>
        <p>Message
            <input 
            maxLength='200' 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            />
        </p>
        <p>Preferred contact method</p>
        <span>
        <label>
            Phone
            <input type='radio' 
            value='Phone'
            />
        </label>
        <label>
            E-mail
            <input type='radio' 
            />
        </label>
        <label>
            Other
            <input 
            type='radio' 
            />
            </label><br/>
            <button 
            type='submit' 
            className='sub'
            >Submit</button>
        </span>
        </form>
    </div>
    </div>
    )
};

export default Contact;