import React, { Component, PropTypes } from 'react'
// import { Link } from 'react-router'
import styles from './help.scss'

class Help extends Component {

    render() {
        return (
            <div className={styles.help}>
                <h2>What is a DataURI and when should I use one?</h2>
                <p>Treehouse has an excelent article explaining both <a href="http://blog.teamtreehouse.com/using-data-uris-speed-website">what exactly is a Data URI and when you should use one</a>. Definitely worth a read!</p>

                <h2>My browser keeps crashing</h2>
                <p>This is likely caused by uploading a large image - keep in mind that the advantages of Data URI's are pretty limited to relatively small images. I personally avoid using them for images over 150~200px in size.</p>

                <h2>I have an idea, how can I help?</h2>
                <p>That's awesome! You can contribute to Duri.me <a href="https://github.com/HelloTiago/duri.me">directly via Github</a>. Feel free to submit an issue with any idea you might have, or even open a pull request. I'll get back to you for sure.</p>

                <h2>What's this built with and who built it?</h2>
                <p>Someone's really curious! This is a pure static website, built with React.js and a bunch of neat tools to help. You can check out the <a href="https://github.com/HelloTiago/duri.me">Github repo</a> for a proper look under the hood.</p>
                <p>And finally, this was built by me, <a href="http://tiagoduarte.com">Tiago Duarte</a>. I work fulltime as a freelance front-end developer. Feel free to hit me up, let's grab a coffee!</p>
            </div>
        )
    }
}

Help.propTypes = {
    children: PropTypes.node
}

export default Help
