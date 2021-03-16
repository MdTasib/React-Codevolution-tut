import React, { Component } from 'react';

class ClassComp extends Component {
    render() {
        // return <h3>I am Class Component</h3>
        return (
            <div>
                <h3>Class Componet, I'm {this.props.name}</h3>
            </div>
        )
    }
}

export default ClassComp;