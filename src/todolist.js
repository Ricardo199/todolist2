// @flow strict

import * as React from 'react';
import Todo from './Todo';

function todolist({todos, toggleTodo}) {
    return (
        todos.map(todo => {
            return <Todo key={todo.id} toggleTodo={toggleTodo} todo={todo} />
        })
    );
};

export default todolist;