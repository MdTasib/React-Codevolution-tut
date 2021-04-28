import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UserDetail = () => {
    const { userId } = useParams();
    const [user, setUser] = useState({});

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json())
            .then(data => setUser(data))
    }, [])

    const { username, email, website, phone } = user;
    return (
        <div>
            <h2>User {userId}</h2>
            <h2>User Name : {username}</h2>
            <p>Email : {email}</p>
            <p>Website : {website}</p>
            <p>Phone : {phone}</p>
        </div>
    );
};

export default UserDetail;