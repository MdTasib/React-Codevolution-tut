import React, { Component } from 'react';


class State extends Component {

    constructor() {
        super();
        this.state = {
            message: 'SUBSCRIB',
        }
    }

    handleChange = () => {
        this.setState({
            message: 'SUBSCRIBED'
        })
    }

    render() {
        return (
            <div>
                <h3>{this.state.message}</h3>
                <button onClick={() => this.handleChange()}>Click Me</button>
            </div>
        )
    }
}

export default State;