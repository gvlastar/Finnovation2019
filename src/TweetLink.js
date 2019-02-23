import React from 'react'
import TweetEmbed from 'react-tweet-embed'
import { Link } from 'react-router-dom'

class TweetLink extends React.Component {
    render() {
      return <div className="tweetLink" style={{ position: 'relative' }}>
        <TweetEmbed id={ this.props.id } options={{ width: '100%' }} />
        <Link to={ '/tweet/' + this.props.id }>
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
            className="tweetOverlay"
          />
        </Link>
      </div>
    }
}

export default TweetLink 
