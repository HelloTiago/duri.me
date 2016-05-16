import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import clipboard from 'clipboard-js'
import styles from './converter.scss'

class Converter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dataURI: null,
            width: null,
            height: null
        }

        this.handleDrop = this.handleDrop.bind(this)
        this.handleDataURIClick = this.handleDataURIClick.bind(this)
        this.handleCSSClick = this.handleCSSClick.bind(this)
        this.handleHTMLClick = this.handleHTMLClick.bind(this)
    }

    handleDrop(files) {
        files.forEach((file)=> {
            var reader = new window.FileReader()
            reader.readAsDataURL(file)
            reader.addEventListener('load', () => {
                var img = new Image
                img.onload = () => {
                    this.setState({
                        dataURI: reader.result,
                        width: img.width,
                        height: img.height
                    })
                }
                img.src = reader.result
            }, false)
        })
    }

    handleDataURIClick() {
        clipboard.copy({
            'text/plain': this.state.dataURI
        })
    }

    handleCSSClick() {
        clipboard.copy({
            'text/plain': removeLeadingWhitespace`.
                . width: ${this.state.width}px;
                . height: ${this.state.height}px;
                . background-repeat: no-repeat;
                . background-image: url(${this.state.dataURI});`
        })
    }

    handleHTMLClick() {
        clipboard.copy({
            'text/plain': '<img width="' + this.state.width + '" height="' + this.state.height + '" title="" alt="" src="' + this.state.dataURI + '">'
        })
    }

    render() {
        return (
            <div className={styles.converter}>
                <Dropzone onDrop={this.handleDrop} className={styles.dropzone} multiple={false}>
                    <h1 className={styles.converterHeading}>Drop your file here</h1>
                    <p className={styles.converterText}>Or click to select one. No files are uploaded. </p>
                    <img className={styles.dropImg} src={require('./drop.svg')}/>
                </Dropzone>
                {this.state.dataURI &&
                    <div className={styles.buttonGroup}>
                        <button className={styles.button} onClick={this.handleCSSClick}>Copy as CSS</button>
                        <button className={styles.button} onClick={this.handleDataURIClick}>Copy as DataURI</button>
                        <button className={styles.button} onClick={this.handleHTMLClick}>Copy as HTML</button>
                    </div>
                }
            </div>
        )
    }
}

export default Converter

function removeLeadingWhitespace(strings) {
    var values = Array.prototype.slice.call(arguments, 1)
    var output = []
    for (var i = 0; i < values.length; i++) {
        output.push(strings[i] + values[i])
    }

    output.push(strings[values.length])

    var lines = output.join('').split('\n')
    if (lines[0] === '.') {
        lines.shift()
    }

    return lines.map(function(line) {
        return line.replace(/^\s*\. |/gm, '')
    }).join('\n')
}
