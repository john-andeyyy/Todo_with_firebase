import { useState } from 'react';
import { ShowTodo } from './TodoList';
import { CreateTodo } from './CreateTodo';
import { Mark_as_done } from './MarkAsDone';
import { Updateform } from './UpdateForm';

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
        if (!showCreateTodo) {
            setNewTitle('');
            setNewDescription('');
            setNewCount(40);
        }
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
    const [Count, setNewCount] = useState(40);

    const toggleUpdate = (todo) => {
        setCurrentTodo(todo);
        setUpdatedTitle(todo.title);
        setUpdatedDescription(todo.description);
        setShowUpdate(!showUpdate);
    };



    const addTodo = () => {
        if (newTitle.trim() !== '') {
            setNewCount(40 - newTitle.length);
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
                setNewCount(40);
                toggleCreateTodo();
            } else {
                alert("The title must be only 40 characters.");
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
                <h1 className="flex text-3xl font-bold p-3 rounded-xl py-4 my-5 w-[31rem] mx-auto">TODAY</h1>

                <input
                    type="search"
                    placeholder="Search Todos"
                    value={searchQuery}
                    onChange={value => setSearchQuery(value.target.value)}
                    className="flex w-[31rem] py-2 px-4 rounded-lg border border-gray focus:outline-none shadow my-4 text-sm mx-auto"
                />

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

                <ShowTodo
                    todos={filteredTodos}
                    toggleMark={toggleMark}
                />

                <div className="fixed bottom-0 right-0">
                    <button className="bg-blue-500 px-3 py-1 pt--5 text-5xl text-white font-bold rounded-xl"
                        onClick={toggleCreateTodo}>
                        +
                    </button>
                </div>

                {/* //! component of create TODO */}

                <CreateTodo
                    newTitle={newTitle}
                    setNewTitle={setNewTitle}
                    newDescription={newDescription}
                    setNewDescription={setNewDescription}
                    addTodo={addTodo}
                    toggleCreateTodo={toggleCreateTodo}
                    Count={Count}
                    setNewCount={setNewCount}
                    showCreateTodo={showCreateTodo}
                />

                <Mark_as_done
                    currentTodo={currentTodo}
                    showMark={showMark}
                    toggleMark={toggleMark}
                    markCompleted={markCompleted}
                    setTodos={setTodos}
                    todos={todos}
                    setShowMark={setShowMark}
                    toggleUpdate={toggleUpdate}
                />


                <Updateform
                    showUpdate={showUpdate}
                    currentTodo={currentTodo}
                    updatedTitle={updatedTitle}
                    setUpdatedTitle={setUpdatedTitle}
                    updatedDescription={updatedDescription}
                    setUpdatedDescription={setUpdatedDescription}
                    setShowUpdate={setShowUpdate}
                    updateTodo={updateTodo}
                />


            </div>
        </>
    );
}

export default Body;
