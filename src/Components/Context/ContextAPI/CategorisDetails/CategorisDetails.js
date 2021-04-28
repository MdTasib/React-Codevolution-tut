import React, { useContext } from 'react';
import { CategoriContext } from '../Context';

const CategorisDetails = () => {
    const count = useContext(CategoriContext);
    return (
        <div>
            <h6>This is categoris Details</h6>
            <p>Counter : {count}</p>
        </div>
    );
};

export default CategorisDetails;