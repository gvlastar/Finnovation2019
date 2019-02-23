import React, { Component } from 'react';
import TweetLink from './TweetLink.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App" style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
      }}>
        <TweetLink id="1070110615627333632"/>
        <TweetLink id="944308491887316992"/>
      </div>
    );
  }
}

export default App;
