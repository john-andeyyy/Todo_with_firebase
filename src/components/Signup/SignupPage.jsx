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
            navigate('/LoginPage'); // Navigate to login page after successful sign-up

        } catch (error) {
            setError(error.message);
        }
    };

    return (
        <div className='text-center'>
            <h1 className='text-white font-bold text-center py-3'>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className='text-center'>
                    <input
                        className='className="flex w-[31rem] py-4 px-4 rounded-lg border border-gray focus:outline-none shadow text-sm mx-auto
                        bg-[#222630] outline-none text-white transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"'
                        type="Email"
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className='py-3'>
                    <input
                        className='className="flex w-[31rem] py-4 px-4 rounded-lg border border-gray focus:outline-none shadow text-sm mx-auto
                        bg-[#222630] outline-none text-white transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"'
                        type="password"
                        placeholder='Enter Password'
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
    );
}
