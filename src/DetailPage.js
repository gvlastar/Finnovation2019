import React from 'react'

class DetailPage extends React.Component {
    render() {
      return <div>
        <span>{ this.props.match.params.id }</span>
      </div>
    }
}

export default DetailPage  
