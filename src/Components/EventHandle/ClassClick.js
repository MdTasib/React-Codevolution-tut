import React, { Component } from 'react';

class ClassClick extends Component {
    handleClick() {
        console.log('Clicked')
    }

    render() {
        return (
            <div>
                <h4>This Is Class Component</h4>
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}

export default ClassClick;