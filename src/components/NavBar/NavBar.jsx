import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function NavBar({ toggleSidebar }) {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    useEffect(() => {
        const storedExpiresIn = localStorage.getItem('localId');
        setIsUserLoggedIn(storedExpiresIn !== ''); // check if have a value id yes return true
    }, []);

    const handleLinkClick = () => {
        toggleSidebar();
    };

    const handleLogout = () => {
        localStorage.setItem('expiresIn', '');
        localStorage.setItem('idToken', '');
        localStorage.setItem('localId', '');
        handleLinkClick()
        setIsUserLoggedIn(false);
    };

    return (
        <div>
            <nav className='flex'>
                <ul className='space-y-4 m-auto text-white'>

                    {isUserLoggedIn ? (
                        <>
                            <li>
                                <Link to="/UserChangepass" onClick={handleLinkClick}>ChangePassword</Link>
                            </li>
                            <li>
                                <Link to="/" onClick={handleLogout}>Logout</Link>
                            </li>
                        </>
                    ) : (
                        <>
                            <li>
                                <Link to="/" onClick={handleLinkClick}>Landing page</Link>
                            </li>
                            <li>
                                <Link to="/LoginPage" onClick={handleLinkClick}>Login</Link>
                            </li>
                            <li>
                                <Link to="/SignupPage" onClick={handleLinkClick}>Signup</Link>
                            </li>
                        </>
                    )}
                </ul>
            </nav>
        </div>
    );
}
