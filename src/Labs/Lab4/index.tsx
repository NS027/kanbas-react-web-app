import React from 'react';
import ReduxExamples from './ReduxExamples';
import HelloRedux from './ReduxExamples/HelloRedux';
import CounterRedux from './ReduxExamples/CounterRedux';
import AddRedux from './ReduxExamples/AddRedux';
import TodoList from './ReduxExamples/todos/TodoList';
export default function Lab4() {
    return(
        <div id="wd-lab4" className="container-fluid">
            <h1>Lab 4</h1>
            <TodoList />
            <ReduxExamples />
            <AddRedux />
            <CounterRedux />
            <HelloRedux />
        </div>
    );
}