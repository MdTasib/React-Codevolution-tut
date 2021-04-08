import React, { useState } from 'react';

function FunctionalCount(props) {

    const [count, setCount] = useState(0);

    return (
        <div>
            <button onClick={() => setCount(count + 1)}>Count {count}, Functional compo</button>
        </div>
    );
}

export default FunctionalCount;