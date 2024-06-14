import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Landingpage() {


    const navigate = useNavigate();
    useEffect(() => {
        const token = localStorage.getItem('idToken');
        if (token) {
            // setIsUserLoggedIn(true);
            navigate('/TodoDashboard');
        } else {
            navigate('/')

        }
    }, [navigate]);






    return (
        <>

            <div
                className={`flex px-4 my-5 w-[31rem] mx-auto  text-center text-white font-semibold`}>
                <h1
                    className='mx-auto'>
                    Welcome to Todo Web app!
                </h1>
            </div>



        </>
    );
}
