import React from 'react';
import Person from './Person';

function NameMap(props) {
    const persons = [{
        "id": 1,
        "age": 19,
        "name": "Bank Prantl",
        "skill": "JavaScript"
    }, {
        "id": 2,
        "age": 18,
        "name": "Hernando Cafe",
        "skill": "React"
    }, {
        "id": 3,
        "age": 21,
        "name": "Rabbi Benardeau",
        "skill": "Vue"
    }]

    const personList = persons.map(person => <Person key={person.id} person={person} />)

    return (
        <div>
            {
                personList
            }
        </div>
    );
}

export default NameMap;