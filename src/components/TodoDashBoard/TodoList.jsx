import React from 'react';
import SingleTodo from './SingleTodo';

export function TodoList({ todos, toggleMark, toggleUpdate }) {
    return (
        <div>
            {todos.length > 0 ? (
                todos.map(todo => (
                    <SingleTodo key={todo.id} todo={todo} toggleMark={toggleMark} toggleUpdate={toggleUpdate} />
                ))
            ) : (
                <div className="text-white font-medium flex ">
                    <h1 className='m-auto'>Nothing to show</h1>
                </div>
            )}
        </div>
    );
}

export default TodoList;