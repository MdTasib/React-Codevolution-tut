import React, { useContext } from 'react';
import { CategoriContext } from '../Context';

const Header = () => {
    const [count, setCount] = useContext(CategoriContext);

    return (
        <div style={{ border: '2px solid gray', margin: '20px', padding: '20px' }}>
            <h2>Header Page</h2>
            <h4>Count : {count}</h4>
            <button onClick={() => setCount(count + 2)}>Click Me</button>
        </div>
    );
};

export default Header;