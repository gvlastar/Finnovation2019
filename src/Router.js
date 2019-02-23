import React from 'react'
import {
  BrowserRouter,
  Route,
} from 'react-router-dom'

import FrontPage from './FrontPage'
import App from './App.js'
import DetailPage from './DetailPage.js'

class Router extends React.Component {
    render() {
      return <BrowserRouter>
        <div>
          <Route exact path="/" component={ FrontPage } />
          <Route path="/tweets" component={ App } />
          <Route path="/tweet/:id" component={ DetailPage } />
        </div>
      </BrowserRouter>
    }
}

export default Router  
