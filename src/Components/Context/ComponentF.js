import React, { Component } from 'react';
import { UserConsumer } from './userContext';

class ComponentF extends Component {
    render() {
        return (
            <div>
                <UserConsumer>
                    {
                        (userName) => {
                            return <h2>Hello {userName}</h2>
                        }
                    }
                </UserConsumer>
            </div>
        );
    }
}

export default ComponentF;