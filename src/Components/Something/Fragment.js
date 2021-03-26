import React from 'react';

function Fragment() {
    return (
        <div>
            <div>
                <h2>Created a div element</h2>
            </div>

            <React.Fragment>
                <h2>React Fragment</h2>
            </React.Fragment>

            <>
                <p>I am pragrap</p>
            </>
        </div>
    );
}

export default Fragment;