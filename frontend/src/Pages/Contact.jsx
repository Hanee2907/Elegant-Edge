import React from 'react';

function Contact() {
  return (
    <div className="contact">
      <h1>Contact Us</h1>
      <p>If you have any questions or concerns, please feel free to reach out to us using the form below or contact us at support@elegantedge.com.</p>
      <form>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default Contact;
