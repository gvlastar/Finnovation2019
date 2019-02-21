import React from 'react'

class Question extends React.Component {
    constructor(props) {
      super(props)
      this.state = { 
        answered: false,
        answer: null,
      }
        this.questions = this.props.questions || [
            '< $19,050',
            '$19,050 - $77,400',
            '$77,400 - $165,000',
            '$165,000 - $315,000',
            '$315,000 - $400,000',
            '$400,000 - $600,000',
            '> $600,000'
        ]
        this.answers = this.props.answers || [
            '10%',
            '12%',
            '22%',
            '24%',
            '32%',
            '35%',
            '37%',
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
                        backgroundColor: 'black',
                        color: 'white',
                        marginTop: 24,
                        fontSize: 12,
                        textAlign: 'center',
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
            Your family pays { this.answers[this.state.answer] } in taxes
        </div>
    }

    render() {
        return <div style={{ width: '100%', padding: 24 }}>
            <h2 style={{ margin: 0 }}>What is your family’s annual income?</h2>
            { this.state.answered ? this.renderAnswer() : this.renderQuestions() }
        </div>
    }
}

export default Question  
