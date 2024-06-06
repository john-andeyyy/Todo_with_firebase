import React from 'react';
import SingleTodo from './SingleTodo';

export function TodoList({ todos, toggleMark, toggleUpdate }) {
    return (
        <div>
            {todos.map(todo => (
                <SingleTodo key={todo.id} todo={todo} toggleMark={toggleMark} toggleUpdate={toggleUpdate} />
            ))}
        </div>
    );
}

export default TodoList;
