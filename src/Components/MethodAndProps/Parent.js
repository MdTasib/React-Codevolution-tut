import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
    constructor() {
        super()
        this.state = {
            parent: 'parent'
        }
        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName) {
        alert(`Hello ${this.state.parent} from ${childName}`)
    }

    render() {
        return (
            <div>
                <Child greet={this.greetParent} />
            </div>
        );
    }
}


export default Parent;