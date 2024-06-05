import { SingleTodo } from './SingleTodo';

export function TodoList({ todos, toggleMark }) {

    if (todos.length === 0) {
        return <h2 className='font-bold text-xl p-5 mx-auto w-[31rem] text-center'>Nothing to show</h2>;
        
    } else {

        return (
            <div>


                {todos.map((todo) => (

                    <SingleTodo key={todo.id} todo={todo} toggleMark={toggleMark} />

                ))}
            </div>)
    }
}




