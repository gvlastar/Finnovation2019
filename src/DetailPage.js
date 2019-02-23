import React from 'react'
import TweetEmbed from 'react-tweet-embed'
import Question from './Question.js'

class DetailPage extends React.Component {
    renderTariffs() {
        return <div>
            <h1>Tariffs</h1>
            <div>
                The tariffs — essentially a tax — are generally paid by importers, such as U.S. companies, who in turn pass on most or all of the costs to consumers or producers who may use Chinese materials in their products. (Technically, we should note that as a matter of demand and supply elasticities, Chinese producers will pay part of the tax if there are fewer goods sold to the United States.)
            </div>
            <h2>Subtitle</h2>
            <Question 
            />
        </div>
    }

    renderTaxes() {
        return <div>
            <h1>Info</h1>
            <h2>Subtitle</h2>
            <Question 
            />
        </div>
    }
    render() {
        const id = this.props.match.params.id
        return <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
        <TweetEmbed id={ this.props.match.params.id } />
        <div style={{ margin: 24, maxWidth: 700 }}>
            { id === "944308491887316992" ? 
                this.renderTaxes() :
                this.renderTariffs()
            }
        </div>
    </div>
    }
}

export default DetailPage  
