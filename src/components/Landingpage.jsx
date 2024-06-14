import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';


export default function Landingpage() {
    

    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('idToken');
        if (token) {
            // setIsUserLoggedIn(true);
            navigate('/TodoDashboard');
        }else{navigate('/')

        }
    }, [navigate]);


    



    return (
        <div className='flex justify-center items-center h-screen '>
            <div className='text-white font-bold text-center w-[31rem]'>
                <h1>Welcome to Todo Web App...</h1>
            </div>
        </div>
    );
}
