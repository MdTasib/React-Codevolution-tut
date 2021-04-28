import React, { useState, useEffect } from 'react';
import Users from '../Users/Users';

const Home = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <div>
            <h2>Users : {users.length}</h2>
            {
                users.map((user, index) => <Users key={index} user={user} />)
            }
        </div>
    );
};

export default Home;