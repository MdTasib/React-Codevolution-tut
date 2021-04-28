import React from 'react';
import Categoris from '../Categoris/Categoris';

const Home = () => {
    return (
        <div style={{ border: '2px solid gray', margin: '20px', padding: '20px' }}>
            <h3>Home page</h3>
            <Categoris />
        </div>
    );
};

export default Home;