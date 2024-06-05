export function Mark_as_done({ currentTodo, showMark, toggleMark, markCompleted, setTodos, todos, setShowMark, toggleUpdate }) {
    return (
        <>
            {showMark && currentTodo && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white rounded-3xl py-5 px-4 m-5 w-[31rem] mx-auto">
                       


                        <div className="flex justify-between py-2">
                            <div className="flex-1">
                                <h2 className="font-bold text-xl ">
                                    Title: <span className='pl-4 break-all'>{currentTodo.title}</span>
                                </h2>
                            </div>
                            <div className="flex-shrink-0">
                                <p className='text-gray-400'>{currentTodo.time}</p>
                            </div>
                        </div>





                        <p className='text-gray-400'>Description: <br /><span className='text-black pl-4 break-words'>{currentTodo.description}</span></p>
                        {!currentTodo.completed && (
                            <div className="text-center bg-blue-500 text-white rounded-2xl font-bold mt-8">
                                <button
                                    className='w-full py-3'
                                    onClick={() => markCompleted(currentTodo.id)}>
                                    Mark completed
                                </button>
                            </div>
                        )}
                        <div className="flex justify-between pt-4">
                            <button className='text-red-500 py-2 text-xl font-semibold' onClick={toggleMark}>
                                Close
                            </button>
                            <button className='text-green-500 py-2 text-xl font-semibold' onClick={() => toggleUpdate(currentTodo)}>
                                Update
                            </button>
                            <button className='p-3 px-5 text-white bg-red-500 rounded-xl font-medium'
                                onClick={() => {
                                    setTodos(todos.filter(todo => todo.id !== currentTodo.id));
                                    setShowMark(false);
                                }}
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
