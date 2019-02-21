import React, { Component } from 'react';
import TweetLink from './TweetLink.js';

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
        <TweetLink id="1099082125523992576"/>
        <TweetLink id="1098976205238398976"/>
        <TweetLink id="1098976205238398976"/>
        <TweetLink id="1098976205238398976"/>
        <TweetLink id="1098976205238398976"/>
        <TweetLink id="1098976205238398976"/>
      </div>
    );
  }
}

export default App;
