import React, { Component } from 'react'


class TestButton extends Component {


    onClick(e) {
        this.props.history.push("/test")
    }

    render() {
        return (

            <div>
                <h2>Thankyou for Registering with us!!! You can now start the test by clicking on Start Test</h2>
                <button onClick={this.onClick.bind(this)}>Start Test</button>            
            </div>
        )
    }
}

export default TestButton
