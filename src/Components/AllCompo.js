import React from 'react';
import FunctionalComp from './ClassAndFunc/FunctionalComp';
import ClassComp from './ClassAndFunc/ClassComp';
import State from '../Components/State/State';
import SetState from './State/SetState';
import FunctionClick from './EventHandle/FunctionClick';
import ClassClick from './EventHandle/ClassClick';
import EventBind from './EventHandle/EventBind';
import Parent from './MethodAndProps/Parent';
import UserGreeting from './Something/UserGreeting';
import NameMap from './Something/NameMap';
import Stylesheet from './Stylesheet/Stylesheet';
import InlineStyle from './Stylesheet/InlineStyle';
import ModuleStyle from './Stylesheet/ModuleStyle';
import Form from './Form/Form';
import Fragment from './Something/Fragment';
import RefsDemo from './Refs/RefsDemo';
import RefsInput from './Refs/Input';
import Focus from './Refs/Focus';

const AllCompo = () => {
    return (
        <div>
            <Focus />
            {/* <RefsDemo /> */}
            {/* <Fragment /> */}
            {/* <Form /> */}
            {/* <ModuleStyle /> */}
            {/* <InlineStyle /> */}
            {/* <Stylesheet /> */}
            {/* <NameMap /> */}
            {/* <UserGreeting /> */}
            {/* <Parent /> */}
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