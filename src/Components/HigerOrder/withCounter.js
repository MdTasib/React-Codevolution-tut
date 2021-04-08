import React from 'react';

const withCounter = (WrappedComponent, incrementNumber) => {
    class WithCounter extends React.Component {
        constructor() {
            super();
            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState(prevCount => {
                return { count: prevCount.count + incrementNumber }
            })
        }

        render() {
            return (<WrappedComponent
                count={this.state.count}
                incrementCount={this.incrementCount}
                {...this.props} />
            )
        }
    }
    return WithCounter;
}

export default withCounter;