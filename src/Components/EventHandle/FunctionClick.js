import React from 'react';

function FunctionClick() {
    function handleClick() {
        console.log('Button Clicked');
    }
    return (
        <div>
            <h3>Output Console</h3>
            <h4>This Is Functional Component</h4>
            <button onClick={handleClick}>Click</button>
        </div>
    )
}

export default FunctionClick;