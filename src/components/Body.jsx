import { useState, useEffect } from 'react';
import Header from './Header';

function Body() {
    const [showCreateTodo, setShowCreateTodo] = useState(false);
    const [showMark, setShowMark] = useState(false);

    // const [todos, setTodos] = useState([]);

    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'Default Todo',
            description: 'This is a default todo.',
            time: '10:01',
            completed: false
        }
    ]);


    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [currentTodo, setCurrentTodo] = useState(null);

    // useEffect(() => {
    //     setTodos([
    //         {
    //             id: 1,
    //             title: 'Default Todo',
    //             description: 'This is a default todo.',
    //             time: '10:01',
    //             completed: false
    //         }
    //     ]);
    // }, []);

    const toggleCreateTodo = () => {
        setShowCreateTodo(!showCreateTodo);
    };

    const toggleMark = (todo) => {
        setCurrentTodo(todo);
        setShowMark(!showMark);
    };

    const addTodo = () => {
        if (newTitle.trim() !== '') {
            const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            setTodos([...todos, {
                id: todos.length + 1,
                title: newTitle,
                description: newDescription,
                time: currentTime,

                completed: false
            }]);
            setNewTitle('');
            setNewDescription('');
            toggleCreateTodo();
        }
    };

    const markCompleted = (id) => {
        setTodos(todos.map(todo => {

            if (todo.id === id) {
                return { ...todo, completed: true };
            } else {
                return todo;
            }
            // todo.id === id ? { ...todo, completed: true } : todo

        }));
        setShowMark(false);
    };




    return (
        <>
            <div className="mx-auto px-4">
                <Header />
                <h1 className="flex text-3xl font-bold p-3 rounded-xl py-4 my-5 w-[31rem] mx-auto">TODAY</h1>

                {todos.map((todo) => (
                    <div key={todo.id} className={`flex p-3 rounded-xl py-5 my-5 w-[31rem] mx-auto bg-white`}>
                        <button id="icon" onClick={() => toggleMark(todo)} >
                            <span className="material-symbols-outlined">

                                <span className={todo.completed ? "text-blue-500" : ""}>
                                    {todo.completed ? " verified" : "check_circle"}
                                </span>
                            </span>
                        </button>


                        <div id="text">
                            <h4 className="font-bold pb-1 px-1">{todo.title}</h4>
                            {/* <h4 className="font-bold pb-1 px-1"><span className='font-normal'>Description <br /> </span>{todo.description}</h4> */}
                            <p className="text-xs text-gray-400">{todo.time}</p>
                        </div>
                    </div>
                ))}

                <div className="fixed bottom-0 right-0">
                    <button className="bg-blue-500 px-3 py-1 pt--5 text-5xl text-white font-bold rounded-xl" onClick={toggleCreateTodo}>
                        +
                    </button>
                </div>

                {showMark && currentTodo && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                        <div className="bg-white rounded-3xl py-5 px-4 m-5 w-[31rem] mx-auto">
                            <div className="flex justify-between py-2">
                                <h2 className="font-bold text-xl">{currentTodo.title}</h2>
                                <p className='text-gray-400'>{currentTodo.time}</p>
                            </div>
                            <p className='text-gray-400'>{currentTodo.description}</p>
                            {(() => {
                                if (!currentTodo.completed) {
                                    return (
                                        <>
                                            <div className="text-center bg-blue-500 text-white rounded-2xl font-bold mt-8">
                                                <button
                                                    className='w-full py-3'
                                                    onClick={() => markCompleted(currentTodo.id)}>
                                                    Mark completed
                                                </button>


                                            </div>

                                            <button className='text-red-500 py-4 text-xl font-semibold' onClick={toggleMark}>
                                                Close
                                            </button>
                                        </>

                                    );
                                } else {
                                    return (
                                        <button className='text-red-500 py-4 text-xl font-semibold' onClick={toggleMark}>
                                            Done
                                        </button>)
                                }

                            })()}


                        </div>
                    </div>
                )}


                {showCreateTodo && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                        <div className="bg-white px-6 py-5 rounded-2xl shadow w-[31rem]">
                            <h4 className='font-semibold text-xl'>Create Todo</h4>
                            <input
                                type="text"
                                placeholder='Task Name'
                                value={newTitle}
                                onChange={(e) => setNewTitle(e.target.value)}
                                className="w-full py-3 px-3 rounded-lg border border-gray focus:outline-none shadow my-4 text-sm"
                            />
                            <textarea
                                placeholder='Add Description'
                                value={newDescription}
                                onChange={(e) => setNewDescription(e.target.value)}
                                className="w-full py-3 px-3 rounded-lg border border-gray focus:outline-none shadow text-sm resize-none"
                            />
                            <div className="bg-blue-500 text-white text-center font-semibold text-xl  rounded-xl">
                                <button className="bg-blue-500 text-white text-center font-semibold text-xl py-2 rounded-xl w-full"
                                    onClick={addTodo}>
                                    Create
                                </button>
                            </div>
                            <button className='text-red-500 py-4 text-xl font-semibold' onClick={toggleCreateTodo}>
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
}

export default Body;
