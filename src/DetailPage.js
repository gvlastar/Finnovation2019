import React from 'react'
import TweetEmbed from 'react-tweet-embed'
import Question from './Question.js'

class DetailPage extends React.Component {
  render() {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
    <TweetEmbed id={ this.props.match.params.id } />
    <div style={{ margin: 24, width: '100%', maxWidth: 700 }}>
      <h1>Info</h1>
      <h2>Subtitle</h2>
      <Question />
    </div>
  </div>
  }
}

export default DetailPage  
