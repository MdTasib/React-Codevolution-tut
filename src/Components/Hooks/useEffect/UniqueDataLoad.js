import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UniqueDataLoad() {
    const [post, setPost] = useState({});
    const [id, setId] = useState(1);
    const [idFormButtonClick, setIdFormButtonClick] = useState(1);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${idFormButtonClick}`)
            .then(response => {
                console.log(response.data);
                setPost(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, [idFormButtonClick]);

    const handleClick = () => {
        setIdFormButtonClick(id);
    }

    return (
        <div>
            <input type="text" value={id} onChange={e => setId(e.target.value)} />
            <button type="submit" onClick={handleClick}>Fetch Data</button>
            <ul>
                {post.title}
            </ul>
        </div>
    );
}

export default UniqueDataLoad;