import Modal from './Modal';

export function Mark_as_done({ currentTodo, markCompleted, RemoveComplete, setShowMark, showMark }) {
    const markCompleted2 = (id) => {
        const localId = localStorage.getItem('localId');
        const dburl = import.meta.env.VITE_FIREBASE_DB_URL;
        const todoRef = `${dburl}/tasks/${localId}/TaskList/${id}.json`;

        const updatedTodo = {
            // ...currentTodo,
            completed: true // Set completed to true
        };

        fetch(todoRef, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedTodo)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to update todo');
                }
                // !the function of mark complete is the function for the static todo web app
                // markCompleted(id);
                setShowMark(false)
                
                })
            .catch(error => {
                console.error('Error updating todo:', error);
            });
    };

    const markUncompleted = (id) => {
        const localId = localStorage.getItem('localId');
        const dburl = import.meta.env.VITE_FIREBASE_DB_URL;
        const todoRef = `${dburl}/tasks/${localId}/TaskList/${id}.json`;

        const updatedTodo = {
            // ...currentTodo,
            completed: false // Set completed to false
        };

        fetch(todoRef, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedTodo)
        })
        .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to update todo');
                }
                // !the function of RemoveComplete is the function for the static todo web app
                // RemoveComplete(id);
                setShowMark(false)
            })
            .catch(error => {
                console.error('Error updating todo:', error);
            });
    };

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
                                onClick={() => markCompleted2(currentTodo.id)}>
                                Mark completed
                            </button>
                        </div>
                    ) : (
                        <div className="text-center mx-auto bg-gray-300 p-3 w-52 py-2 mt-3 rounded-lg">
                            <button
                                className="font-semibold  text-red-500 "
                                onClick={() => markUncompleted(currentTodo.id)}>
                                Mark Uncompleted
                            </button>
                        </div>
                    )}
                </div>
            )}
        </Modal>
    );
}
