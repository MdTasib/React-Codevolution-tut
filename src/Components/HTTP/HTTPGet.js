import React, { Component } from 'react';
import axios from 'axios';

class HTTPGet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            errorMsg: ''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                // console.log(response);
                this.setState({ posts: response.data });
            })
            .catch(error => {
                // console.log(error);
                this.setState({ errorMsg: 'Error retreiving data' })
            })
    }

    render() {
        const { posts, errorMsg } = this.state;
        return (
            <div>
                <h2>Get</h2>
                {
                    posts.length
                        ?
                        posts.map(post => <h5 key={post.id}>{post.title}</h5>)
                        :
                        null
                }
                {
                    errorMsg
                        ?
                        <div>{errorMsg}</div>
                        :
                        null
                }
            </div>
        );
    }
}

export default HTTPGet;