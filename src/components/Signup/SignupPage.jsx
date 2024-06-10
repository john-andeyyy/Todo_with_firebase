// src/components/SignUp.js
import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';

import { useNavigate } from 'react-router-dom';


export default function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const navigate = useNavigate();


    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            alert('User created successfully');
            navigate('/LoginPage'); 

        } catch (error) {
            setError(error.message);
        }
    };

    return (


        <div className='text-center flex px-2'>
            <div className="m-auto">
                <h1 className='text-white font-bold text-center py-3'>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    
                    
                    <div className="mb-5">
                        <input
                            className="flex w-[31rem] py-4 px-4 rounded-lg border border-gray focus:outline-none shadow text-sm mx-auto
                        bg-[#222630] outline-none text-white transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                            name="email"
                            placeholder="Enter email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-5">
                        <input
                            className="flex w-[31rem] py-4 px-4 rounded-lg border border-gray focus:outline-none shadow text-sm mx-auto
                        bg-[#222630] outline-none text-white transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                            name="password"
                            placeholder="Enter password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>


                    {error && <p>{error}</p>}
                    <button type="submit"
                        className='font-semibold text-white bg-blue-500 px-10 py-2 rounded-lg hover:bg-blue-800'
                    >Sign Up</button>
                </form>
            </div>
        </div>
    );
}
