import Modal from './Modal';

export function Mark_as_done({ currentTodo, markCompleted, RemoveComplete, setShowMark, showMark }) {
    return (
        <Modal isVisible={showMark} handleClose={() => setShowMark(false)}>
            {currentTodo && (
                <div>
                    <div className="flex justify-between py-2">
                        <div className="flex-1">
                            <h2 className="font-bold text-xl ">
                                Title: <span className='pl-4 break-all font-semibold capitalize'>{currentTodo.title}</span>
                            </h2>
                        </div>
                        <div className="flex-shrink-0">
                            <p className='text-gray-400'>{currentTodo.time}</p>
                        </div>
                    </div>
                    <p className='text-gray-400'>Description: <br /><span className='text-black pl-4 break-words capitalize'>{currentTodo.description}</span></p>
                    {!currentTodo.completed ? (
                        <div className="text-center bg-blue-500 text-white rounded-2xl font-bold mt-8">
                            <button
                                className='w-full py-3'
                                onClick={() => markCompleted(currentTodo.id)}>
                                Mark completed
                            </button>
                        </div>
                    ) : (
                        <div className="text-center mx-auto bg-gray-300 p-3 w-52 py-2 mt-3 rounded-lg">
                            <button
                                className="font-semibold  text-red-500 "
                                onClick={() => RemoveComplete(currentTodo.id)}>
                                Mark Uncompleted
                            </button>
                        </div>
                    )}
                    {/* <div className="flex justify-between pt-4">
                        <button className='p-3 px-5 text-white bg-red-500 rounded-xl font-medium' onClick={() => {
                            setTodos(todos.filter(todo => todo.id !== currentTodo.id));
                            setShowMark(false);
                        }}>
                            Delete
                        </button>
                    </div> */}
                </div>
            )}
        </Modal>
    );
}
