import React from 'react'
import TweetEmbed from 'react-tweet-embed'

class TweetLink extends React.Component {
    render() {
      return <div style={{ position: 'relative', margin: 30}}>
        <TweetEmbed id={ this.props.id } options={{ width: '100%' }} />
        <div
          style={{
            position: 'absolute',
            top: 10,
            width: '100%',
            height: 'calc(100% - 20px)',
            backgroundColor: 'black',
            opacity: 0.1,
            borderRadius: 5,
          }}
          onClick={ () => console.log("hello, world") }
        />
      </div>
    }
}

export default TweetLink
