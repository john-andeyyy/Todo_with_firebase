import { useState } from 'react';
import Header from './Header';

function Body() {
    const [showCreateTodo, setShowCreateTodo] = useState(false);
    const [showMark, setShowMark] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [showCompletedOnly, setShowCompletedOnly] = useState(false);



    const [todos, setTodos] = useState([
        {
            id: 1,
            title: 'eat',
            description: 'eat well.',
            time: '10:01 pm',
            completed: false
        }, 
        
        {
            id: 2,
            title: 'crispy pata',
            description: '',
            time: '01:01 am',
            completed: true
        },
        {
            id: 3,
            title: 'carboheticarboheticoheticarboheticarboheti',
            description: 'carbonara with spaghetti',
            time: '01:01 am',
            completed: false
        }
    ]);

    const toggleCreateTodo = () => {
        setShowCreateTodo(!showCreateTodo);

        setNewTitle('');
        setNewDescription('');
        setNewCount('40');
    };

    const toggleMark = (todo) => {
        setCurrentTodo(todo);
        setShowMark(!showMark);
    };

    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [currentTodo, setCurrentTodo] = useState(null);
    const [updatedTitle, setUpdatedTitle] = useState('');
    const [updatedDescription, setUpdatedDescription] = useState('');

    // ! passing the param to the update form
    const toggleUpdate = (todo) => {
        setCurrentTodo(todo);
        setUpdatedTitle(todo.title);
        setUpdatedDescription(todo.description);
        setShowUpdate(!showUpdate);
    };

    const [Count, setNewCount] = useState('40');


    const addTodo = () => {
        if (newTitle.trim() !== '') {

            setNewCount(Count - newTitle.length);


            if (newTitle.length <= 40) {
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
                setNewCount('40');
                toggleCreateTodo();
            } else {
                alert("the title must be only 40 character")
            }


        }
    };

    const markCompleted = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: true };
            } else {
                return todo;
            }
        }));
        setShowMark(false);
    };

    const updateTodo = () => {
        if (updatedTitle.trim() !== '') {
            setTodos(todos.map(todo => {
                if (todo.id === currentTodo.id) {
                    return {
                        ...todo,
                        title: updatedTitle,
                        description: updatedDescription
                    };
                } else {
                    return todo;
                }
            }));
            setShowUpdate(false);
            setShowMark(false);
        }
    };



    const filteredTodos = todos.filter(todo => {
        const matchesSearchQuery = todo.title.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesCompletedFilter = showCompletedOnly ? todo.completed : true;
        return matchesSearchQuery && matchesCompletedFilter;
    });



    return (
        <>
            <div className="mx-auto px-4 ">
                <Header />
                <h1 className="flex text-3xl font-bold p-3 rounded-xl py-4 my-5 w-[31rem] mx-auto">TODAY</h1>

                {/* //! Search */}
                <input
                    type="search"
                    placeholder="Search Todos"
                    value={searchQuery}
                    onChange={value => setSearchQuery(value.target.value)}
                    className="flex w-[31rem] py-2 px-4 rounded-lg border border-gray focus:outline-none shadow my-4 text-sm mx-auto"
                />

                {/* //! Show Completed Only */}
                <div className="flex mx-auto w-[31rem] justify-end">
                    <label className="flex items-center text-sm">
                        <span className="text-black font-bold px-3">Show Completed Only</span>
                        <input
                            type="checkbox"
                            checked={showCompletedOnly}
                            onChange={() => setShowCompletedOnly(!showCompletedOnly)}
                            className="form-checkbox h-5 w-5"
                        />
                    </label>
                </div>

                {/* //! Show the list of TODO */}
                <div>
                    {filteredTodos.map((todo) => (
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

                <div className="fixed bottom-0 right-0">
                    <button className="bg-blue-500 px-3 py-1 pt--5 text-5xl text-white font-bold rounded-xl"
                        onClick={toggleCreateTodo}>
                        +
                    </button>
                </div>

                {/* //! Show mark as done */}
                {showMark && currentTodo && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                        <div className="bg-white rounded-3xl py-5 px-4 m-5 w-[31rem] mx-auto">
                            <div className="flex justify-between py-2">
                                <h2 className="font-bold text-xl break-words ">Title: <span className='pl-4' >{currentTodo.title}</span></h2>
                                <p className='text-gray-400'>{currentTodo.time}</p>
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

                {/* //! Show create to do */}
                {showCreateTodo && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                        <div className="bg-white px-6 py-5 rounded-2xl shadow w-[31rem]">
                            <h4 className='font-semibold text-xl'>Create Todo</h4>
                            <input
                                type="text"
                                placeholder='Task Name'
                                value={newTitle}
                                maxLength='40'
                                onChange={(e) => {
                                    setNewTitle(e.target.value)
                                    setNewCount(40 - e.target.value.length)
                                }}
                                className="w-full py-3 px-3 rounded-lg border border-gray focus:outline-none shadow my-4 text-sm"
                            />
                            <p>{Count} / 40</p>
                            <textarea
                                placeholder='Add Description'
                                value={newDescription}
                                onChange={(e) => setNewDescription(e.target.value)}
                                className="w-full py-3 px-3 rounded-lg border border-gray focus:outline-none shadow text-sm resize-none"
                            />
                            <div className="bg-blue-500 text-white text-center font-semibold text-xl rounded-xl">
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

                {/* //! Show update form */}
                {showUpdate && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                        <div className="bg-white px-6 py-5 rounded-2xl shadow w-[31rem]">
                            <h4 className='font-semibold text-xl'>Update Todo</h4>
                            <input
                                type="text"
                                placeholder='Task Name'
                                value={updatedTitle}
                                onChange={(e) => setUpdatedTitle(e.target.value)}
                                className="w-full py-3 px-3 rounded-lg border border-gray focus:outline-none shadow my-4 text-sm"
                            />
                            <textarea
                                placeholder='Add Description'
                                value={updatedDescription}
                                onChange={(e) => setUpdatedDescription(e.target.value)}
                                className="w-full py-3 px-3 rounded-lg border border-gray focus:outline-none shadow text-sm resize-none"
                            />
                            <div className="bg-blue-500 text-white text-center font-semibold text-xl rounded-xl">
                                <button className="bg-green-500 text-white text-center font-semibold text-xl py-2 rounded-xl w-full"
                                    onClick={updateTodo}>
                                    Update
                                </button>
                            </div>
                            <button className='text-red-500 py-4 text-xl font-semibold' onClick={toggleUpdate}>
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
