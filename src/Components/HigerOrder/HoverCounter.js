import React, { Component } from 'react';
import withCounter from './withCounter';


class HoverCounter extends Component {
    render() {
        const { count, incrementCount } = this.props;
        return (
            <div>
                <h3 style={{ border: '2px solid green' }} onMouseOver={incrementCount}> Hover {count} Counter</h3>
            </div>
        );
    }
}

export default withCounter(HoverCounter, 10);