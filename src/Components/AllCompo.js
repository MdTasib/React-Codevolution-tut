import React from 'react';
import FunctionalComp from './ClassAndFunc/FunctionalComp';
import ClassComp from './ClassAndFunc/ClassComp';

const AllCompo = () => {
    return (
        <div>
            <FunctionalComp />
            {/* props */}
            <FunctionalComp name='Ohidul Alam' />
            <FunctionalComp name='Ohidul alam Tasib' />
            <FunctionalComp name='Ohidul alam Tasib' >
                <p>I love javascript</p>
            </FunctionalComp>

            <ClassComp />

            {/* props */}
            <ClassComp name='Ohidul Alam' />
            <ClassComp name='Ohidul alam Tasib' />

        </div>
    );
};

export default AllCompo;