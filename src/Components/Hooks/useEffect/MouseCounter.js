import React, { useState } from 'react';
import Mouse from './Mouse';

function MouseCounter() {
    const [display, setDisplay] = useState(true);

    return (
        <div>
            <button onClick={() => setDisplay(!true)}>Toggle Display</button>
            {display && <Mouse />}
        </div>
    );
}

export default MouseCounter;