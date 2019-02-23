import React from 'react'

class Question extends React.Component {
    constructor(props) {
      super(props)
      this.state = { 
        answered: false,
        answer: null,
      }
      this.questions = this.props.questions || [
        'A',
        'B',
        'C',
      ]
      this.answers = this.props.answers || [
        'Answer to A',
        'Answer to B',
        'Answer to C',
      ]
    }

  renderQuestions() {
    return <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', }}>
      { this.questions.map((q, i) => (
        <div 
          style={{ 
            width: 64, 
            height: 64, 
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'red',
            marginTop: 24
          }}
          onClick={ () => this.setState({ answered: true, answer: i })}
        >
          { q }
        </div>
      )) }
    </div>
  }

  renderAnswer() {
    return <div style={{ marginTop: 24 }}>
        { this.answers[this.state.answer] }
      </div>
  }

  render() {
    return <div style={{ backgroundColor: 'yellow', width: '100%', padding: 24 }}>
      <h2 style={{ margin: 0 }}>Question</h2>
      { this.state.answered ? this.renderAnswer() : this.renderQuestions() }
    </div>
  }
}

export default Question  
