import React, { Component } from 'react';

class UserGreeting extends Component {
    constructor() {
        super()
        this.state = {
            isLogged: true
        }
    }


    render() {
        // if (this.state.isLogged) { // first of all
        //     return <div><h4>Welcome Tasib</h4></div>
        // } else {
        //     return <div><h4>Welcome Guest</h4></div>
        // }

        // let message; // second way
        // if (this.state.isLogged) {
        //     message = <div><h4>Welcome Tasib</h4></div>
        // } else {
        //     message = <div><h4>Welcome Guest</h4></div>
        // }
        // return message;

        // third way
        // return this.state.isLogged ? <div><h4>Welcome Tasib</h4></div> : <div><h4>Welcome Guest</h4></div>

        // fourth way
        return this.state.isLogged && <div><h4>Welcome Tasib</h4></div>
    }
}

export default UserGreeting;