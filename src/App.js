import React, { Component } from 'react';
import MessagePane from './MessagePane';
import './App.css';

const messages = [
  {
    id: 1,
    text: 'Hi',
    author: 'Ben',
    channel_id: 1
  },
  {
    id: 2,
    text: 'Hiii',
    author: 'Jen',
    channel_id: 1
  },
  {
    id: 3,
    text: 'Heyi',
    author: 'Ken',
    channel_id: 1
  },
  {
    id: 4,
    text: 'Helli',
    author: 'Ren',
    channel_id: 1
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
        <MessagePane messages={messages}/>
      </div>
    );
  }
}

export default App;
