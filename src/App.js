import React, { Component } from 'react';
import TweetEmbed from 'react-tweet-embed';

class App extends Component {
  render() {
    return (
      <div className="App" style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh',
      }}>
        <TweetEmbed id="1099082125523992576"/>
      </div>
    );
  }
}

export default App;
