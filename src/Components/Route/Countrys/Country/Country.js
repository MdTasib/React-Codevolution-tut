import React from 'react';
import { useHistory } from 'react-router-dom';

const Country = ({ country }) => {
    const { name, flag } = country;

    const history = useHistory();
    const handleClick = (countryName) => {
        history.push(`/country/${countryName}`)
    }

    return (
        <div style={{ border: '2px solid gray', padding: '20px', margin: '20px' }}>
            <img style={{ width: '200px' }} src={flag} alt={name} />
            <h3>{name}</h3>
            <button onClick={() => handleClick(name)}>View Details</button>
        </div>
    );
};

export default Country;