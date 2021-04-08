import React, { Component } from 'react';

class ClassCounter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    handleCount = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <button onClick={this.handleCount}>count {count}, class compo</button>
            </div>
        );
    }
}

export default ClassCounter;