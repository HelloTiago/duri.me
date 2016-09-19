import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import copy from 'copy-to-clipboard'
import styles from './converter.scss'

class Converter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dataURI: null,
            width: null,
            height: null,
            files: [],
            isFinished: false
        }

        this.handleDrop = this.handleDrop.bind(this)
        this.handleDataURIClick = this.handleDataURIClick.bind(this)
        this.handleCSSClick = this.handleCSSClick.bind(this)
        this.handleHTMLClick = this.handleHTMLClick.bind(this)
    }

    handleDrop(files) {

        this.setState({
            files: files
        })

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

    startTimer() {
        this._timer != null ? clearTimeout(this._timer) : null

        this._timer = setTimeout(function() {
            this.setState({
                isFinished: false
            })
            this._timer = null
        }.bind(this), 2000)
    }

    handleDataURIClick() {
        copy(this.state.dataURI)
        this.setState({
            isFinished: true
        })
        this.startTimer()
    }

    handleCSSClick() {
        copy(removeLeadingWhitespace`.
            . width: ${this.state.width}px;
            . height: ${this.state.height}px;
            . background-repeat: no-repeat;
            . background-image: url(${this.state.dataURI});`)
        this.setState({
            isFinished: true
        })
        this.startTimer()
    }

    handleHTMLClick() {
        copy('<img width="' + this.state.width + '" height="' + this.state.height + '" title="" alt="" src="' + this.state.dataURI + '">')
        this.setState({
            isFinished: true
        })
        this.startTimer()
    }

    render() {
        return (
            <div className={styles.converter}>
                <div className={styles.finished + ' ' + (this.state.isFinished ? styles.finishedVisible : '')}>Copied to clipboard!</div>
                <Dropzone onDrop={this.handleDrop} className={styles.dropzone} multiple={false}>
                    <h1 className={styles.converterHeading}>Drop your file here</h1>
                    <p className={styles.converterText}>Or click to select one. No files are sent to the server. </p>
                    {this.state.files.length > 0 && this.state.files.map((file, i) =>
                        <img className={styles.droppedImg} key={i} src={file.preview} />
                    )}
                    {this.state.files.length <= 0 &&
                        <img className={styles.dropImg} src={require('./drop.svg')}/>
                    }
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
