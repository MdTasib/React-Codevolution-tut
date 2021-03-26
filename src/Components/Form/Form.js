import React, { Component } from 'react';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            username: '',
            message: '',
            topic: 'react',
        }
    }

    handleNameChange = event => {
        this.setState({
            username: event.target.value
        })
    }

    handleMessageChange = event => {
        this.setState({
            message: event.target.value
        })
    }

    handleTopicChange = event => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        alert(`${this.state.username}, ${this.state.message}, ${this.state.topic}`)
    }

    render() {
        const { username, message, topic } = this.state;
        return (
            <div>
                <h3>A simple basic form</h3>
                <form onSubmit={this.handleSubmit}>
                    <p>Name : {this.state.username}</p>
                    <label>User Name : </label>
                    <input type="text" value={username} onChange={this.handleNameChange} />
                    <p>Message : {this.state.message}</p>
                    <label>Your Message : </label>
                    <textarea cols="30" rows="0" value={message} onChange={this.handleMessageChange} ></textarea>
                    <div>
                        <label>Topic : </label>
                        <select value={topic} onChange={this.handleTopicChange}>
                            <option value="react">React</option>
                            <option value="vue">Vue</option>
                            <option value="angular">Angular</option>
                        </select>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default Form;