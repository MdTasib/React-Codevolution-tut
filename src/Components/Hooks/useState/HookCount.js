import React, { useState } from 'react';

function HookCount(props) {
    const initialCount = 0;
    const [count, setCount] = useState(initialCount);

    const incrementFive = () => {
        for (let i = 0; i < 5; i++) {
            // setCount(count + 1) // don't increment 5. this is increment one
            setCount(prevCount => prevCount + 1) // increment 5
        }
    }

    return (
        <div style={{ border: '3px solid black', marginTop: '30px' }}>
            <p>Count : {count}</p><br />
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
            <button onClick={incrementFive}>increment Five</button>
        </div>
    );
}

export default HookCount;