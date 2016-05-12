import React, { Component } from 'react'
import Dropzone from 'react-dropzone'
import clipboard from 'clipboard-js'
import styles from './converter.scss'

class Converter extends Component {

    constructor(props) {
        super(props)

        this.state = {
            dataURI: null
        }

        this.handleDrop = this.handleDrop.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleDrop(files) {
        files.forEach((file)=> {
            var reader = new window.FileReader()
            reader.readAsDataURL(file)
            reader.addEventListener('load', () => {
                this.setState({
                    dataURI: reader.result
                })
            }, false)
        })
    }

    handleClick() {
        clipboard.copy({
            'text/plain': this.state.dataURI
        })

    }

    render() {
        return (
            <div className={styles.converter}>
                <Dropzone onDrop={this.handleDrop} className={styles.dropzone} multiple={false}>
                    <h1 className={styles.h1}>Drop your file here</h1>
                    <p>Or click to select one. No files are uploaded. </p>
                    <img className={styles.img} src={require('./drop.svg')}/>
                </Dropzone>
                {this.state.dataURI &&
                    <button className={styles.button} onClick={this.handleClick}>Copy to clipboard</button>
                }
            </div>
        )
    }
}

export default Converter
