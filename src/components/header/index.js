import React, { Component, PropTypes } from 'react'
// import { Link } from 'react-router'
import styles from './header.scss'

class Header extends Component {

    render() {
        return (
            <div className={styles.header}>
                <a className={styles.logo} href="#">Duri.me</a>
                <nav className={styles.nav}>
                    <a href="#">Item 1</a>
                    <a href="#">Item 2</a>
                </nav>
            </div>
        )
    }
}

Header.propTypes = {
    children: PropTypes.node
}

export default Header
