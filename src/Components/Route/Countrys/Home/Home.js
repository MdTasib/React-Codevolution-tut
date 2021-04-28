import React, { useState, useEffect } from 'react';
import Country from '../Country/Country';

const Home = () => {
    const [countrys, setCountrys] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.eu/rest/v2/all')
            .then(response => response.json())
            .then(data => setCountrys(data))
    }, [])

    return (
        <div>
            <h1>Rest Countries Api</h1>
            <div>
                {
                    countrys.map((country, index) => <Country key={index} country={country} />)
                }
            </div>
        </div>
    );
};

export default Home;