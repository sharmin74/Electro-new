import React from 'react';
import emailjs from 'emailjs-com';

function Form() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_m7cz7x6', e.target, 'user_hnoVKOBKOpwcVV4rYrQUB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <form className="contact-form" onSubmit={sendEmail}>
      <input type="text" name="phone" />
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
}