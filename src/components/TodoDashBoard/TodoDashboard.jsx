import { useState, useEffect } from 'react';

import { TodoList } from './TodoList';
import { CreateTodo } from './CreateTodo';
import { Mark_as_done } from './TodoMarkAsDone';
import { TodoUpdateForm } from './TodoUpdateForm';
import Header from './Header';

function TodoDashboard() {
    const [showCreateTodo, setShowCreateTodo] = useState(false);

    const [showMark, setShowMark] = useState(false);


    const [showUpdate, setShowUpdate] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [showCompletedOnly, setShowCompletedOnly] = useState(false);

    //! for updates
    const [currentTodo, setCurrentTodo] = useState(null);
    const [updatedTitle, setUpdatedTitle] = useState('');
    const [updatedDescription, setUpdatedDescription] = useState('');



    const [todos, setTodos] = useState([

    ]);






    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const localId = localStorage.getItem('localId');
    const dburl = import.meta.env.VITE_FIREBASE_DB_URL;
    const databaseURL = `${dburl}/tasks/${localId}/TaskList.json`;

    // Function to fetch tasks from the database (GET request)
    const fetchTasks = async () => {
        try {
            const response = await fetch(databaseURL); // GET request to fetch tasks
            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }
            const data = await response.json();
            const tasksArray = data ? Object.entries(data).map(([key, value]) => ({ id: key, ...value })) : [];
            setTodos(tasksArray);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, [todos]);




    const toggleCreateTodo = () => {
        setShowCreateTodo(!showCreateTodo);
    };

    const toggleMark = (todo) => {
        setCurrentTodo(todo);
        setShowMark(!showMark);
    };

    const toggleUpdate = (todo) => {
        setCurrentTodo(todo);
        setUpdatedTitle(todo.title);
        setUpdatedDescription(todo.description);
        setShowUpdate(!showUpdate);
    };



    const markCompleted = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            } else {
                return todo;
            }
        }));
        setShowMark(false);
    };

    const RemoveComplete = (id) => {
        setTodos(todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
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
        }
        // console.log(todos);
    };

    const filteredTodos = todos.filter(todo => {
        const matchesSearchQuery = todo.title.includes(searchQuery.toLowerCase());
        const matchesCompletedFilter = showCompletedOnly ? todo.completed : true;
        return matchesSearchQuery && matchesCompletedFilter;
    });
    // console.log(todos);

    return (
        <>
            {/* <Header/> */}
            <div className=" px-2">



                <h1 className="flex text-3xl font-bold p-3 rounded-xl py-4 my-5 w-[31rem] mx-auto text-white">TODAY</h1>

                <input
                    type="search"
                    placeholder="Search Todos"
                    value={searchQuery}
                    onChange={value => setSearchQuery(value.target.value)}
                    className="flex w-[31rem] py-2 px-4 rounded-lg border border-gray focus:outline-none shadow my-4 text-sm mx-auto"
                />

                <div className="flex mx-auto w-[31rem] justify-end">
                    <label className="flex items-center text-sm">
                        <span className="text-white font-bold px-3">Show Completed Only</span>
                        <input
                            type="checkbox"
                            checked={showCompletedOnly}
                            onChange={() => setShowCompletedOnly(!showCompletedOnly)}
                            className="form-checkbox h-5 w-5"
                        />
                    </label>
                </div>

                <div className="fixed bottom-0 right-0">
                    <button className="bg-blue-500 px-3 py-1 pt--5 text-5xl text-white font-bold rounded-xl"
                        onClick={toggleCreateTodo}>
                        +
                    </button>
                </div>





                <TodoList
                    todos={filteredTodos}
                    toggleMark={toggleMark}
                    toggleUpdate={toggleUpdate}
                />


                <CreateTodo
                    setTodos={setTodos}
                    showCreateTodo={showCreateTodo}
                    toggleCreateTodo={toggleCreateTodo}
                />

                <Mark_as_done
                    currentTodo={currentTodo}
                    showMark={showMark}
                    markCompleted={markCompleted}
                    RemoveComplete={RemoveComplete}
                    setShowMark={setShowMark}
                // toggleUpdate={toggleUpdate}
                />

                <TodoUpdateForm
                    showUpdate={showUpdate}
                    currentTodo={currentTodo}
                    updatedTitle={updatedTitle}
                    setUpdatedTitle={setUpdatedTitle}
                    updatedDescription={updatedDescription}
                    setUpdatedDescription={setUpdatedDescription}
                    setShowUpdate={setShowUpdate}
                    updateTodo={updateTodo}
                    setTodos={setTodos}
                    todos={todos}
                />
            </div>
        </>
    );
}

export default TodoDashboard;
