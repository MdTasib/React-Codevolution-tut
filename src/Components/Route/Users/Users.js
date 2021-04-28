import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Users = ({ user }) => {
    const { name, email, id } = user;
    const history = useHistory();

    const handleClick = (userId) => {
        history.push(`/user/${userId}`)
    }

    const userStyle = {
        border: '1px solid gray',
        margin: '20px',
        borderRadius: '20px',
        padding: '20px'
    }
    return (
        <div style={userStyle}>
            <h2>User Id: {id}</h2>
            <h2>Name : {name}</h2>
            <p>Email : {email}</p>
            <Link to={`/user/${id}`}>User Detail</Link><br />
            <button onClick={() => handleClick(id)}>Click Me</button>
        </div>
    );
};

export default Users;