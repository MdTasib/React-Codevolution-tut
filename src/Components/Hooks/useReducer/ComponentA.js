import React, { useContext } from 'react';
import { CountContext } from './useReducerWithuseContext.js';


function ComponentA(props) {
    const countContext = useContext(CountContext);
    const { countDispatch, countState } = countContext;
    return (
        <div>
            This is component A - {countState} --->

            <button onClick={() => countDispatch('increment')}>Increment</button>
            <button onClick={() => countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countDispatch('reset')}>Reset</button>
        </div>
    );
}

export default ComponentA;