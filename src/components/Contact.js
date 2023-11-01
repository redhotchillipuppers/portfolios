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
<<<<<<< HEAD
          alert('Thank you, I will be in touch');

=======
          alert('Thank you, I will be in touch')

          
>>>>>>> main
          let clearcontact = () => {
            document.getElementById('contactform').reset();
          }

          clearcontact();

      }, (error) => {
          console.log(error.text);
          alert('Something went wrong, please try again later');
      });

  };

  return (
<<<<<<< HEAD
    <div className='test'>
    <form ref={form} onSubmit={sendEmail} id='contactform'>
=======
    <form ref={form} onSubmit={sendEmail} className='contact' id='contact'>
      <h1>Contact Me</h1>
>>>>>>> main
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Phone Number</label>
<<<<<<< HEAD
      <input name="user_num"/>
=======
      <input name="user_num" />
>>>>>>> main
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    </div>
  );
};


export default Contact;