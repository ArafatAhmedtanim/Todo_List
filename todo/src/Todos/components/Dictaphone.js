import ReactVoiceInput from 'react-voice-input'
import React from 'react'

export default class Dictaphone extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputText: ''
        }

        this.onResult = this.onResult.bind(this)
        this.onInputChange = this.onInputChange.bind(this)
    }

    onInputChange(event) {
        this.setState({
            inputText: event.target.value
        })
    }

    onResult(result) {
        this.props.handleDes(result)
    }

    render() {
        const onEnd = () => {
            console.log('on end')
        }
        return (
            <main>
                <ReactVoiceInput
                    onResult={this.onResult}
                    onEnd={onEnd}
                >
                    {/* <span onChange={this.onInputChange} /> */}
                </ReactVoiceInput>
            </main>
        )

    }
}

