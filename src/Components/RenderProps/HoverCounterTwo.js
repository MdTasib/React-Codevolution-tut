import React, { Component } from 'react';

export default class HoverCounterTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleCount = () => {
        this.setState(prevCount => {
            return { count: prevCount.count + 1 }
        })
    }

    render() {
        const { count } = this.state;
        return (
            <div>
                <h2 onMouseOver={this.handleCount}>Hovered {count} times</h2>
            </div>
        );
    }
}