import React from 'react';
import ReduxExamples from './ReduxExamples';
import HelloRedux from './ReduxExamples/HelloRedux';
import CounterRedux from './ReduxExamples/CounterRedux';
import AddRedux from './ReduxExamples/AddRedux';
import TodoList from './ReduxExamples/todos/TodoList';
import ClickEvent from './ClickEvent';
import PassingDataOnEvent from './PassingDataOnEvent';
import PassingFunctions from './PassingFunctions';
import EventObject from './EventObject';
import Counter from './Counter';
import BooleanStateVariables from './BooleanStateVariables';
import StringStateVariables from './StringStateVariables';
import DateStateVariable from './DateStateVariable';
import ObjectStateVariable from './ObjectStateVariable';
import ArrayStateVariable from './ArrayStateVariable';
import ParentStateComponent from './ParentStateComponent';
export default function Lab4() {
    function sayHello() {
        alert("Hello");
    }
    return(
        <div id="wd-lab4" className="container-fluid">
            <h1>Lab 4</h1>
            <TodoList />
            <ReduxExamples />
            <AddRedux />
            <CounterRedux />
            <HelloRedux />

            <ObjectStateVariable />
            <ArrayStateVariable />
            <ParentStateComponent />
            <ClickEvent />
            <PassingDataOnEvent />
            <PassingFunctions theFunction={sayHello} />
            <EventObject />
            <Counter />
            <BooleanStateVariables />
            <StringStateVariables />
            <DateStateVariable />

        </div>
    );
}