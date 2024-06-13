import { useState } from 'react';
import Modal from './Modal';

export function CreateTodo({ setTodos, toggleCreateTodo, showCreateTodo }) {
    const [newTitle, setNewTitle] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [count, setCount] = useState(40);
    const [error, seterror] = useState('')

    // const addTodo = () => {
    //     if (newTitle.trim() !== '') {
    //         setCount(40 - newTitle.length);
    //         if (newTitle.length <= 40) {
    //             const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });


    //             setTodos(todos => {
    //                 const maxId = todos.length > 0 ? Math.max(...todos.map(todo => todo.id)) : 0;
    //                 const newId = maxId + 1;

    //                 return [
    //                     ...todos,
    //                     {
    //                         id: newId,
    //                         title: newTitle,
    //                         description: newDescription,
    //                         time: currentTime,
    //                         completed: false
    //                     }
    //                 ];
    //             });


    //             // setTodos(todos => [
    //             //     ...todos,
    //             //     {
    //             //         id: todos.length + 1,
    //             //         title: newTitle,
    //             //         description: newDescription,
    //             //         time: currentTime,
    //             //         completed: false
    //             //     }]);



    //             setNewTitle('');
    //             setNewDescription('');
    //             setCount(40);
    //             toggleCreateTodo();
    //         } else {
    //             alert("The title must be only 40 characters.");
    //         }
    //     }


    // };

    const addTodo = async (event) => {
        event.preventDefault();
        if (newTitle !== '') {



            setCount(40 - newTitle.length);

            if (newTitle.length <= 40) {

                const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

                // ! input users data

                const email = localStorage.getItem('email');
                const pass = localStorage.getItem('password');

                const userData = {
                    // id:0,
                    title: newTitle,
                    description: newDescription,
                    time: currentTime,
                    completed: false,
                    // email: email,
                    // pass: pass
                };

                const localid = localStorage.getItem('localId')

                // Define the Firebase Realtime Database URL
                const dburl = import.meta.env.VITE_FIREBASE_DB_URL
                const databaseURL = `${dburl}/tasks/${localid}/TaskList.json`


                try {
                    // Perform the post request
                    const response = await fetch(databaseURL, {
                        method: 'POST',
                        // POST the Firebase client generates a unique
                        //PUT Write or replace data to a defined path,
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(userData)
                    });

                    if (!response.ok) {
                        throw new Error('Network response was not ok.');
                    }

                    const data = await response.json();
                    console.log("Data successfully added:", data);

                    // ! reset the state
                    setNewTitle('');
                    setNewDescription('');
                    setCount(40);
                    toggleCreateTodo();
                } catch (error) {
                    console.error("Error adding data:", error);
                }


            } else {
                seterror("The title must be only 40 characters.");
            }

        } else {

            seterror("Set The title.");
        }


    };


    const close = () => {
        toggleCreateTodo()
        setNewTitle('')
        setNewDescription('')
    }

    return (

        <Modal isVisible={showCreateTodo} handleClose={() => close()}>

            {showCreateTodo && (
                <div className="">

                    <h4 className='font-semibold text-xl pb-3'>Create Todo</h4>
                    <h4 className='font-semibold text-xl pb-2 text-red-600'>
                        {error}
                    </h4>
                    <div className="">

                        <input
                            type="text"
                            placeholder='Task Name'
                            value={newTitle}
                            maxLength='40'
                            onChange={(e) => {
                                setNewTitle(e.target.value);
                                setCount(40 - e.target.value.length);
                            }}
                            className="w-full py-3 px-3 rounded-lg border border-gray focus:outline-none shadow  text-lg"
                        />
                        <p className='text-gray-400 text-right'>{count} / 40</p>

                    </div>
                    <div className="py-5">

                        <textarea
                            placeholder='Add Description'
                            value={newDescription}
                            onChange={(e) => setNewDescription(e.target.value)}
                            className="w-full py-3 px-3 rounded-lg border border-gray focus:outline-none shadow text-lg resize-none"
                        />
                    </div>

                    <div className="bg-blue-500 text-white text-center font-semibold text-xl rounded-xl ">
                        <button className="bg-blue-500 text-white text-center font-semibold text-xl py-3 rounded-xl w-full"
                            onClick={addTodo}>
                            Create
                        </button>
                    </div>



                </div>
            )}
        </Modal>



    );
}
