// src/components/LoginPage.js
import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase';
import { useNavigate } from 'react-router-dom';



export default function LoginPage() {
    // const auth = getAuth();


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();



    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed up 
                const user = userCredential.user;
                console.log(user)
                navigate('/'); 

                // ...S 
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log('errorCode' + errorCode)
                console.log('errorMessage' + errorMessage)
                // ..
            });
    };

    return (

        <div className='text-center flex px-2'>
            <div className="m-auto">


                <h1 className="flex text-3xl font-bold p-3 rounded-xl py-4 my-5 w-[31rem] mx-auto text-white">Login</h1>
                {error && <p className="text-red-500 text-center">{error}</p>}
                <form onSubmit={handleLogin}
                    className='w-[31rem]'
                >
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

                    <div className="text-white rounded-2xl font-bold mt-8 text-center">
                        <button className='py-3 bg-blue-500 rounded-lg w-28' type="submit">
                            Log in
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
}
