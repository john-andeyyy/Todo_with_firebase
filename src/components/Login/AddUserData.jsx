import React, { useState } from 'react';

const AddUserData = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        // ! input users data
        const userData = {
            name: name,
            age: age
        };

        // Define the Firebase Realtime Database URL
        const dburl = import.meta.env.VITE_FIREBASE_DB_URL
        const names = userData.name;
        const userjson = '/UserData.json'
        // const databaseURL = 'https://react-todo-9a3b9-default-rtdb.firebaseio.com/fireblog/james/users.json';
        const databaseURL = dburl + names + userjson;

        try {
            // Perform the PUT request
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
            setName('');
            setAge('');
        } catch (error) {
            console.error("Error adding data:", error);
        }
    };

    return (
        <div className='text-center flex px-3'>
            <div className="m-auto">

                <h1 className="flex text-3xl font-bold p-3 rounded-xl py-4 my-5 w-[31rem] mx-auto text-white">Add User Data</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name" className='text-white px-3'>Name:</label>
                    <input
                        type="text"
                        id="name"
                        value={name} onChange={(e) => setName(e.target.value)}
                        className=' text-xl w-[28rem] p-2 '
                        required />
                    <br /><br />
                    <label htmlFor="age" className='text-white px-3'>Age:</label>
                    <input
                        type="number"
                        id="age"
                        value={age}
                        onChange={(e) => setAge(e.target.value)}
                        className='text-xl  w-[28rem] p-2'
                        required /><br /><br />
                    <button type="submit" className='text-white text-xl bg-blue-500 rounded-lg p-3 font-semibold'>Add Data</button>
                </form>
            </div>
        </div>
    );
};

export default AddUserData;
