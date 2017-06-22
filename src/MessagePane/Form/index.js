import React from 'react';

const Form = () => (
  <div className="MessagePane-Form">
    <div className="MessagePane-Form-container">
      <p>
        <input
          className="name"
          type="text"
          placeholder="some_login_here_places"
        />
      </p>
      <p>
        <textarea
        className="message"
        placeholder="Your Message"
      />
      </p>
      <p>
        <button className="send">Send</button>
      </p>
    </div>
  </div>
);

export default Form;
