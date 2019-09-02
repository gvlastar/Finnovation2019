import React from 'react'
import TweetEmbed from 'react-tweet-embed'
import MicrolinkCard from '@microlink/react'
import Question from './Question.js'

class DetailPage extends React.Component {
    renderTariffs() {
        return <div>
            <h1>Tariffs</h1>
            <div>
The tariffs — essentially a tax — are generally paid by importers, such as U.S. companies, who in turn pass on most or all of the costs to consumers or producers who may use Chinese materials in their products. (Technically, we should note that as a matter of demand and supply elasticities, Chinese producers will pay part of the tax if there are fewer goods sold to the United States.)
            </div>
            <MicrolinkCard style={{
                margin: 16,
                width: '100%',
            }}
            url="https://appleinsider.com/articles/18/11/30/iphones-could-cost-up-to-160-more-if-china-tariff-threat-is-followed-through" />
            <h2>How much extra would buying a new iPhone cost you if these tariffs were imposed?</h2>
            <div>
If Trump is unable to reach a trade deal with China, tariffs could cause iPhone prices to go up by as much as $160. Trump has repeatedly urged Apple to move production to the US, but it is more likely that Apple will remain in China and pass costs on to consumers.
            </div>
            <img src="https://media1.giphy.com/media/l1J9BAp3rfL33jm0M/source.gif" style={{ margin: 16 }} alt="" />
            <h2> More Information on Tariffs </h2>
            <div>
Tariffs increase the price of imported goods, so consumers are more incentivised to purchase domestic goods. Protectionists believe that they can protect domestic production.

At the same times, tariffs hurt international trade. For example, if the US imposes tariffs on Chinese goods, China is likely to respond with tariffs of its own. Ultimately this reduces e
            </div>
        </div>
    }

    renderTaxes() {
        return <div>
            <h1>Taxes</h1>
            <Question
            />
            <div style={{ marginTop: 16 }}>
Income levels rise with inflation, so more people will be subject to the highest income bracket than they were under the pre-Trump tax law.
            </div>
            <div>
The deduction for married and joint filers increases from $12,700 to $24,000, but eliminates personal exemptions.
            </div>
        </div>
    }
    render() {
        const id = this.props.match.params.id
        return <div id="details" style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
        <TweetEmbed id={ this.props.match.params.id } />
        <div id="content" style={{ margin: 24, maxWidth: 700, width: '100%', display: 'flex', flexDirection: 'column'}}>
            { id === "944308491887316992" ?
                this.renderTaxes() :
                this.renderTariffs()
            }
        </div>
    </div>
    }
}

export default DetailPage
