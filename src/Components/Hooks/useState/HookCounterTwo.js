import React, { useState } from 'react';

function HookCounterTwo(props) {
    const [name, setName] = useState({ firstName: '', lastName: '' })

    const { firstName, lastName } = name;
    return (
        <div>
            <form>
                <input type="text" value={firstName} onChange={e => setName({ ...name, firstName: e.target.value })} />
                <input type="text" value={lastName} onChange={e => setName({ ...name, lastName: e.target.value })} />

                <h3>First name - {firstName}</h3>
                <h3>Last name - {lastName}</h3>
                {
                    JSON.stringify(name)
                }
            </form>
        </div>
    );
}

export default HookCounterTwo;