import React from 'react';

function Child({ greet }) {
    return (
        <div>
            <button onClick={() => greet('child')}>Click</button>
        </div>
    );
};

export default Child;