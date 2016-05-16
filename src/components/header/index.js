import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import styles from './header.scss'

class Header extends Component {

    render() {
        return (
            <div className={styles.header}>
                <Link className={styles.logo} to="/">Duri.me</Link>
                <nav className={styles.nav}>
                    <Link to="/help">Help</Link>
                </nav>
            </div>
        )
    }
}

Header.propTypes = {
    children: PropTypes.node
}

export default Header
