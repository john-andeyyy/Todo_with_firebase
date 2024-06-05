export function ShowTodo({ todos, toggleMark }) {
    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id} className={`flex p-3 rounded-xl py-5 my-5 w-[31rem] mx-auto bg-white shadow-md shadow-gray-300 self-start`}>
                    <button id="icon" onClick={() => toggleMark(todo)} className='px-3'>
                        <input
                            type="checkbox"
                            checked={todo.completed}
                            onChange={() => toggleMark(todo)}
                            className='form-checkbox h-5 w-5'
                        />
                    </button>

                    <div id="text">
                        <h4 className="font-bold pb-1 px-1 capitalize break-words">{todo.title}</h4>
                        <p className="text-xs text-gray-400 break-words">{todo.time}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}

