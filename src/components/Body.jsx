import { useState, useEffect } from 'react';
import Header from './Header';

function Body() {
    const [showCreateTodo, setShowCreateTodo] = useState(false);
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState('');
    const [newDescription, setNewDescription] = useState('');

    // Function to add a default todo when component mounts
    useEffect(() => {
        setTodos([
            {
                id: 1,
                text: 'Default Todo',
                description: 'This is a default todo.',
            },
            {
                id: 2,
                text: 'Default Todo',
                description: 'This is a default todo.',
            }
        ]);
    }, []); // Empty dependency array ensures this effect runs only once when the component mounts

    const toggleCreateTodo = () => {
        setShowCreateTodo(!showCreateTodo);
    };

    const handleNewTodoChange = (event) => {
        setNewTodo(event.target.value);
    };

    const handleNewDescriptionChange = (event) => {
        setNewDescription(event.target.value);
    };

    const addTodo = () => {
        if (newTodo.trim() !== '') {
            setTodos([...todos,
            {
                id: todos.length + 1,
                text: newTodo,
                description: newDescription
            }]);
            setNewTodo('');
            setNewDescription(''); // Reset description input after adding todo
            toggleCreateTodo(); // Close the create todo modal after adding todo
        }
    };

    return (
        <>
            <div className="mx-auto px-4">
                <Header />
                <h1 className="flex text-3xl font-bold p-3 rounded-xl py-4 my-5 w-[31rem] mx-auto">TODAY</h1>

                {todos.map((todo, index) => (
                    <div key={index} className="flex bg-white p-3 rounded-xl py-5 my-5 w-[31rem] mx-auto">
                        <div id="icon">
                            <span className="material-symbols-outlined">check_circle</span>
                        </div>
                        <div id="text">
                            <h4 className="font-bold pb-1 px-1">{todo.text}</h4>
                            <h4 className="font-bold pb-1 px-1"><span className='font-normal'>description <br /> </span>{todo.description}</h4>
                            <p className="text-xs text-gray-400">Just Now</p>
                        </div>
                    </div>
                ))}

                <div className="fixed bottom-0 right-0">
                    <button className="bg-blue-500 px-3 py-1 pt--5 text-5xl text-white font-bold rounded-xl " onClick={toggleCreateTodo}>
                        +
                    </button>
                </div>

                {showCreateTodo && (
                    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                        <div className="bg-white px-6 py-5 rounded-2xl shadow w-[31rem]">
                            <h4 className='font-semibold text-xl '>Create Todo</h4>
                            <input
                                type="text"
                                placeholder='Task Name'
                                value={newTodo}
                                onChange={handleNewTodoChange}
                                className="w-full py-3 px-3 rounded-lg border border-gray  focus: outline-none shadow my-4 text-sm"
                            />
                            <textarea
                                placeholder='Add Description'
                                value={newDescription}
                                onChange={handleNewDescriptionChange}
                                className="w-full  py-3 px-3 rounded-lg border border-gray  focus: outline-none shadow text-sm resize-none"
                            />

                            <div className="bg-blue-500 text-white text-center font-semibold text-xl py-2 rounded-xl mt-3 ">
                                <button onClick={addTodo}>
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
