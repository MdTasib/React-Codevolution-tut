import React, { Component } from 'react';

class SetState extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    handleCount = () => {
        this.setState({
            count: this.state.count + 1
        }, () => {
            console.log('second perametor : ', this.state.count)
        })
        console.log(this.state.count)
    }



    render() {
        return (
            <div>
                <h3>Counter : {this.state.count}</h3>
                <button onClick={() => this.handleCount()}>Update Count</button>
            </div>
        );
    }
}

export default SetState;