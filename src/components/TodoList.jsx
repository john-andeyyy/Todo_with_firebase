import { SingleTodo } from './SingleTodo';

export function ShowTodo({ todos, toggleMark }) {
    return (
        <div>
            {todos.map((todo) => (
                <SingleTodo key={todo.id} todo={todo} toggleMark={toggleMark} />
            ))}
        </div>
    );
}