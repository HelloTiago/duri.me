import React, { Component, PropTypes } from 'react'
// import { Link } from 'react-router'
import styles from './app.scss'
import Header from '../header/index.js'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div className={styles.app}>
                <Header/>
                {this.props.children}
            </div>
        )
    }
}

App.propTypes = {
    children: PropTypes.node
}

export default App
