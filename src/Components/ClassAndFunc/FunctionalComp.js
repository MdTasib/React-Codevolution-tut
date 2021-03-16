import React from 'react';

// function FunctionalComp() {
//     return (
//         <h2>My Name Is Mohammad Tasib</h2>
//     )
// }


// simple use functional component
// const FunctionalComp = () => <h2>My name is Mohammad Tasib</h2>


// how use functional component props
const FunctionalComp = (props) => {
    return (
        <div>
            <h3>I'm {props.name}</h3>
            {props.children}
        </div>
    )
}

export default FunctionalComp;