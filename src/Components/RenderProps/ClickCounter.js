import React from 'react';

export default class ClickCounterTow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    handleClick = () => {
        this.setState(prevCount => {
            return { count: prevCount.count + 1 }
        })
    }

    render() {
        const { count } = this.state;
        return (
            <button onClick={this.handleClick}>Clicked {count} times</button>
        )
    }
}