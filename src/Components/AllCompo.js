import React from 'react';
import FunctionalComp from './ClassAndFunc/FunctionalComp';
import ClassComp from './ClassAndFunc/ClassComp';
import State from '../Components/State/State';
import SetState from './State/SetState';
import FunctionClick from './EventHandle/FunctionClick';
import ClassClick from './EventHandle/ClassClick';
import EventBind from './EventHandle/EventBind';

const AllCompo = () => {
    return (
        <div>
            {/* <FunctionalComp />
            <FunctionalComp name='Ohidul Alam' />
            <FunctionalComp name='Ohidul alam Tasib' />
            <FunctionalComp name='Ohidul alam Tasib' >
                <p>I love javascript</p>
            </FunctionalComp>

            <ClassComp />
            <ClassComp name='Ohidul Alam' />
            <ClassComp name='Ohidul alam Tasib' /> */}

            {/* <State />
            <SetState /> */}

            {/* <FunctionClick />
            <ClassClick /> */}

            {/* <EventBind /> */}

        </div>
    );
};

export default AllCompo;