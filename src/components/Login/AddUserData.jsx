import React, { useState, useEffect } from 'react';

const AddUserData = () => {
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
            setTasks(tasksArray);
        } catch (error) {
            setError(error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTasks();
    }, []);

    // Function to handle form submission and add new task to the database (POST request)
    const handleSubmit = async (event) => {
        event.preventDefault();

        const newTask = {
            title: title,
            description: description,
            time: "time", // Update this with the actual time if needed
            completed: false
        };

        try {
            const response = await fetch(databaseURL, {
                method: 'POST', // POST request to add a new task
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(newTask)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok.');
            }

            const data = await response.json();
            const newTaskKey = data.name; // Firebase returns the unique key in the 'name' field

            // Create the new task object with the unique key
            const taskWithKey = { id: newTaskKey, ...newTask };

            // Update the tasks state with the new task
            setTasks((prevTasks) => [...prevTasks, taskWithKey]);

            // Reset the form fields
            setTitle('');
            setDescription('');
        } catch (error) {
            console.error("Error adding data:", error);
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div className='text-center flex px-3'>
            <div className="m-auto">
                <h1 className="flex text-3xl font-bold p-3 rounded-xl py-4 my-5 w-[31rem] mx-auto text-white">Add User Data</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title" className='text-white px-3'>Title:</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className='text-xl w-[28rem] p-2'
                        required
                    />
                    <br /><br />
                    <label htmlFor="description" className='text-white px-3'>Description:</label>
                    <input
                        type="text"
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className='text-xl w-[28rem] p-2'
                        required
                    />
                    <br /><br />
                    <button type="submit" className='text-white text-xl bg-blue-500 rounded-lg p-3 font-semibold'>Add Data</button>
                </form>

                <h2 className="text-2xl font-bold mt-6 text-white">Tasks List</h2>

                <ul className="text-white">
                    {tasks.map((task) => (
                        <li key={task.id} className='my-2 p-2 border-b border-gray-300'>
                            <strong>{task.Title}</strong>: {task.Description} (ID: {task.id})
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default AddUserData;
