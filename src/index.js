import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './components/app'
import Converter from './components/converter'
import Help from './components/help'

render((
    <Router history={browserHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Converter} />
            <Route path="/help" component={Help} />
        </Route>
    </Router>
), document.getElementById('app'))
