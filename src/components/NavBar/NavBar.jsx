import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar({ toggleSidebar }) {
    const handleLinkClick = () => {
        toggleSidebar(); 
    };

    return (
        <div>
            <nav className='flex'>
                <ul className=' space-y-4 m-auto text-white '>
                    <li>
                        <Link to="/" onClick={handleLinkClick}>Home</Link>
                    </li>
                    <li>
                        <Link to="/LoginPage" onClick={handleLinkClick}>Login</Link>
                    </li>
                    <li>
                        <Link to="/SignupPage" onClick={handleLinkClick}>Signup</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
