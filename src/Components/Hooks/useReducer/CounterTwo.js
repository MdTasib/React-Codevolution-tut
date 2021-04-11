import React, { useReducer } from 'react';

const initialState = {
    firstCount: 0,
    secondCount: 10,
};
const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, firstCount: state.firstCount + action.value }
        case 'decrement':
            return { ...state, firstCount: state.firstCount - action.value }
        case 'increment2':
            return { ...state, secondCount: state.secondCount + action.value }
        case 'decrement2':
            return { ...state, secondCount: state.secondCount - action.value }
        case 'reset':
            return initialState
        default:
            return state
    }
}

function CounterTwo() {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <div>First Count - {count.firstCount}</div>
            <div>Second Count - {count.secondCount}</div>
            <button onClick={() => dispatch({ type: 'increment', value: 1 })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 1 })}>Decrement</button>
            <button onClick={() => dispatch({ type: 'increment', value: 5 })}>Increment 5</button>
            <button onClick={() => dispatch({ type: 'decrement', value: 5 })}>Decrement 5</button>
            <div>
                <button onClick={() => dispatch({ type: 'increment2', value: 1 })}>Increment Counter 2</button>
                <button onClick={() => dispatch({ type: 'decrement2', value: 1 })}>Decrement Counter 2</button>
            </div>
            <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
        </div>
    );
}

export default CounterTwo;