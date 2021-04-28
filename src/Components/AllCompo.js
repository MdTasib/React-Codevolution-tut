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
import Hero from './ErrorBoundary/Hero';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';
import HoverCounter from './HigerOrder/HoverCounter';
import ClickCounterTow from './RenderProps/ClickCounter';
import HoverCounterTwo from './RenderProps/HoverCounterTwo';
import User from './RenderProps/User';
import ComponentC from './Context/ComponentC';
import { UserProvider } from './Context/userContext';
import HTTPGet from './HTTP/HTTPGet';
import PostForm from './HTTP/PostForm';
import ClassCounter from './Hooks/useState/ClassCounter';
import FunctionalCount from './Hooks/useState/FunctionalCount';
import HookCount from './Hooks/useState/HookCount';
import HookCounterTwo from './Hooks/useState/HookCounterTwo';
import HookCountThree from './Hooks/useState/HookCountThree';
import HookCounterOne from './Hooks/useEffect/HookCounterOne';
import Mouse from './Hooks/useEffect/Mouse';
import MouseCounter from './Hooks/useEffect/MouseCounter';
import IntervalHookCounter from './Hooks/useEffect/IntervalHookCounter';
import DataFetching from './Hooks/useEffect/DataFetching';
import UniqueDataLoad from './Hooks/useEffect/UniqueDataLoad';
import CounterOne from './Hooks/useReducer/CounterOne';
import CounterTwo from './Hooks/useReducer/CounterTwo';
import CounterThree from './Hooks/useReducer/CounterThree';
import UseReducerWithuseContext from './Hooks/useReducer/useReducerWithuseContext';
import DataFetchingOne from './Hooks/useReducer/DataFetchingOne';
import DataFetchingTwo from './Hooks/useReducer/DataFetchingTwo';
import ParentComponent from './Hooks/useCallback/ParentComponent';
import Counter from './Hooks/useMemo/Counter';
import FocusInput from './Hooks/useRef/FocusInput';
import LineChart from './Chart/LineChart';
import BarChart from './Chart/BarChart';
import DoughnutChart from './Chart/DoughnutChart';
import Main from './Route/Main';

const AllCompo = () => {
    return (
        <div>
            {/* <LineChart />
            <BarChart />
            <DoughnutChart /> */}
            {/* <FocusInput /> */}
            {/* <Counter /> */}
            {/* <ParentComponent /> */}
            {/* <DataFetchingTwo /> */}
            {/* <DataFetchingOne /> */}
            {/* <UseReducerWithuseContext /> */}
            {/* <CounterOne />
            <CounterTwo />
            <CounterThree /> */}
            {/* <UniqueDataLoad /> */}
            {/* <DataFetching /> */}
            {/* <IntervalHookCounter /> */}
            {/* <MouseCounter /> */}
            {/* <Mouse /> */}
            {/* <HookCounterOne /> */}
            {/* <ClassCounter />
            <FunctionalCount />
            <HookCount />
            <HookCounterTwo />
            <HookCountThree /> */}
            {/* <PostForm /> */}
            {/* <HTTPGet /> */}
            {/* <UserProvider value='Mohammad Tasib'>
                <ComponentC />
            </UserProvider> */}
            {/* <ClickCounterTow />
            <HoverCounterTwo />
            <User render={(isLoggedIn) => isLoggedIn ? 'Tasib' : 'Guest'} /> */}
            {/* <ClickCounter name='Tasib' />
            <HoverCounter /> */}
            {/* <ErrorBoundary>
                <Hero heroName='Superman' />
            </ErrorBoundary>
            <ErrorBoundary>
                <Hero heroName='Batman' />
            </ErrorBoundary>
            <ErrorBoundary>
                <Hero heroName='joker' />
            </ErrorBoundary> */}
            {/* <Focus /> */}
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

            <Main />
        </div>
    );
};

export default AllCompo;