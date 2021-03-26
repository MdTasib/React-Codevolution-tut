import React from 'react';

function Person({ person }) {
    return (
        <div>
            <h4>I'm {person.name}. I'm {person.age}. I know {person.skill}</h4>
        </div>
    );
}

export default Person;