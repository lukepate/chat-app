import React, {Component} from 'react';

class Form extends Component {
  constructor(){
    super();
    this.onClick = this.onClick.bind(this);
  }

  onClick() {

  }

  render() {
    return (
      <div className="MessagePane-Form">
        <div className="MessagePane-Form-container">
          <p>
            <input
              ref={(node) => {this.name_input = node}}
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
            <button className="send" onClick={this.OnClick}>Send</button>
          </p>
        </div>
      </div>
    );
  }
};

export default Form;
