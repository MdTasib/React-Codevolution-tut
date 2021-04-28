import React, { createContext, useState } from 'react';
import Home from './Home/Home';
import Header from './Header/Header';
import Shipment from './Shipment/Shipment';

export const CategoriContext = createContext();

const Context = () => {
    const [count, setCount] = useState(0);
    return (
        <CategoriContext.Provider value={[count, setCount]}>
            <h2>Context Api</h2>
            <p>Count : {count}</p>
            <button onClick={() => setCount(count + 1)}>Counter</button>
            <Header />
            <Home />
            <Shipment />
        </CategoriContext.Provider>
    );
};

export default Context;