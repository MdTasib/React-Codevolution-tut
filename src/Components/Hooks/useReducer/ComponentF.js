import React, { useContext } from 'react';
import { CountContext } from './useReducerWithuseContext';

function ComponentF(props) {
    const countContext = useContext(CountContext);
    const { countDispatch, countState } = countContext;
    return (
        <div>
            This is component F - {countState} --->

            <button onClick={() => countDispatch('increment')}>Increment</button>
            <button onClick={() => countDispatch('decrement')}>Decrement</button>
            <button onClick={() => countDispatch('reset')}>Reset</button>
        </div>
    );
}

export default ComponentF;