    import React, { useState } from 'react';
    import { useNavigate } from 'react-router-dom';

    export default function LoginPage() {
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');
        const [error, setError] = useState('');
        const navigate = useNavigate();

        const handleLogin = async (e) => {
            e.preventDefault();
            setError(null);

            const url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=';
            const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
            const payload = {
                email: email,
                password: password,
                returnSecureToken: true
            };

            try {
                const response = await fetch(url + apiKey, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });

                const data = await response.json();

                if (response.ok) {
                    localStorage.setItem('expiresIn', data.expiresIn);
                    localStorage.setItem('idToken', data.idToken);
                    localStorage.setItem('localId', data.localId);

                    // Update login state
                    navigate('/TodoDashboard');
                } else {
                    setError(data.error.message);
                }
            } catch (error) {
                setError('An error occurred. Please try again.');
            }
        };

        return (
            <div className='text-center flex px-2'>
                <div className="m-auto">
                    <h1 className="flex text-3xl font-bold p-3 rounded-xl py-4 my-5 w-[31rem] mx-auto text-white">Login</h1>
                    {error && <p className="text-red-500 text-center">{error}</p>}
                    <form onSubmit={handleLogin} className='w-[31rem]'>
                        <div className="mb-5">
                            <input
                                className="flex w-[31rem] py-4 px-4 rounded-lg border border-gray focus:outline-none shadow text-xl mx-auto
                                bg-[#222630] outline-none text-white transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                                name="email"
                                placeholder="Enter email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                autoComplete='off'
                            />
                        </div>
                        <div className="mb-5">
                            <input
                                className="flex w-[31rem] py-4 px-4 rounded-lg border border-gray focus:outline-none shadow text-xl mx-auto
                                bg-[#222630] outline-none text-white transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"
                                name="password"
                                placeholder="Enter password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                autoComplete='off'
                            />
                        </div>
                        <div className="text-white rounded-3xl font-bold mt-8 text-center">
                            <button className='py-3 px-10 bg-blue-500 rounded-lg  text-xl' type="submit">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
