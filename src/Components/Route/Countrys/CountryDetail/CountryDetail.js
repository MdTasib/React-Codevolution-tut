import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const CountryDetail = () => {
    const { countryName } = useParams();
    const [country, setCountry] = useState([]);

    useEffect(() => {
        fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
            .then(response => response.json())
            .then(data => setCountry(data[0]))
    }, [])

    const { name, flag, population, cioc, region } = country;
    return (
        <div>
            <img style={{ width: '400px' }} src={flag} alt={name} />
            <h3>Name : {name}</h3>
            <h4>Population : {population}</h4>
            <p>Short cioc : {cioc}</p>
            <p>Region : {region}</p>
        </div>
    );
};

export default CountryDetail;