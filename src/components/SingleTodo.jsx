export function SingleTodo({ todo, toggleMark }) {
    return (
        <div


            
            key={todo.id}
            className={`flex px-4 rounded-xl py-5  my-5 w-[31rem] mx-auto
            bg-white shadow-md shadow-gray-300 self-start hover:bg-gray-100 text-center  `}
        >
            <button
                id="icon"
                onClick={() => toggleMark(todo)}
                className='px-3'
            >
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => toggleMark(todo)}
                    className='form-checkbox h-5 w-5 '
                />
            </button>
            <button
                id="text"
                onClick={() => toggleMark(todo)}
                className="flex flex-col flex-1 cursor-pointer"
            >
                <h4 className="font-bold pb-1 px-1 capitalize break-all text-justify">
                    {todo.title}
                </h4>
                <p className="text-xs text-gray-400 break-words">
                    {todo.time}
                </p>
            </button>
        </div>
    );
}
