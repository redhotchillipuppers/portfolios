import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../App.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zagzslo', 'template_4a4y2h7', form.current, 'my975geqjzB4cGzNC')
      .then((result) => {
          console.log(result.text);
          alert('Thank you, I will be in touch')

          
          let clearcontact = () => {
            document.getElementById('contactform').reset();
          }

          clearcontact();

      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail} className='contact' id='contact'>
      <h1>Contact Me</h1>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Phone Number</label>
      <input name="user_num" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};


export default Contact;