import React, { useState, useEffect } from 'react';

function Mouse() {
    const [X, setX] = useState(0);
    const [Y, setY] = useState(0);

    const logMousePositon = (e) => {
        console.log('Mouse Event');
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log('useEffect called');
        window.addEventListener('mousemove', logMousePositon)
    }, [])

    return (
        <div>
            Hooks - X - {X} , Y - {Y}
        </div>
    );
}

export default Mouse;