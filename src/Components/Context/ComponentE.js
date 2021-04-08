import React, { Component } from 'react';
import ComponentF from './ComponentF';
import UserContext from './userContext';

class ComponentE extends Component {
    static contextType = UserContext;


    render() {
        return (
            <div>
                <h3>Component E context --- Hey! {this.context}</h3>
                <ComponentF />
            </div>
        );
    }
}

// ComponentE.contextType = UserContext;

export default ComponentE;