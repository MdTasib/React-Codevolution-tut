import React, { Component, createRef } from 'react';
import Input from './Input';

class Focus extends Component {
    constructor() {
        super();
        this.componentRef = React.createRef();
    }
    clickHandler = () => {
        this.componentRef.current.focusInput()
    }


    render() {
        return (
            <div>
                <Input ref={this.componentRef} />
                <button onClick={this.clickHandler}>Focus Input</button>
            </div>
        );
    }
}

export default Focus;