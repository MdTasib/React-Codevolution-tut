import React, { Component } from 'react';

class EventBind extends Component {
    constructor() {
        super()
        this.state = {
            message: 'Welcome'
        }

        this.handleClick = this.handleClick.bind(this)
    }

    // handleClick() { // 1
    //     this.setState({
    //         message: 'Good Bye!'
    //     })
    // }

    // handleClick() { // 2
    //     this.setState({
    //         message: 'Good Bye!'
    //     })
    // }


    // handleClick() { // 3
    //     this.setState({
    //         message: 'Good Bye!'
    //     })
    // }

    handleClick = () => { //4
        this.setState({
            message: 'Good Bye!'
        })
    }

    render() {
        return (
            <div>
                <h4>{this.state.message}</h4>
                {/* <button onClick={this.handleClick.bind(this)}>Click</button> */}
                {/* <button onClick={this.handleClick}>Click</button> */}
                {/* <button onClick={() => this.handleClick()}>Click</button> */}
                <button onClick={this.handleClick}>Click</button>
            </div>
        )
    }
}


export default EventBind;