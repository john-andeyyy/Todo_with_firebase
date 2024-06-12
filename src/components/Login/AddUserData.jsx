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
        <div>
            <h1>Add User Data</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required /><br /><br />
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} required /><br /><br />
                <button type="submit">Add Data</button>
            </form>
        </div>
    );
};

export default AddUserData;
