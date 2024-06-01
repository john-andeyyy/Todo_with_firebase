import { useState } from 'react';
import Header from './Header';

function Body() {
    const [showHeader, setShowHeader] = useState(false);

    const toggleHeader = () => {
        setShowHeader(!showHeader);
    };

    return (
        <>
            {/* {showHeader && <Header />} */}
            <div className="mx-auto px-4 ">
                <Header />
                <h1 className=" flex  text-3xl  font-bold  p-3 rounded-xl py-4 my-5 w-[32rem] mx-auto">TODAY</h1>



                <div className="flex bg-white p-3 rounded-xl py-5  my-5 w-[32rem] mx-auto ">
                    <div id="icon">
                        <span className="material-symbols-outlined">check_circle</span>
                    </div>

                    <div id="text">
                        <h4 className="font-bold pb-1 px-1">Snap texture photos</h4>
                        <p className="text-xs text-gray-400">10:30 AM</p>
                    </div>
                </div>

                <div className="flex bg-white  p-3 rounded-xl py-4 my-5 w-[32rem]  mx-auto">
                    <div id="icon">
                        <span className="material-symbols-outlined">check_circle</span>
                    </div>

                    <div id="text">
                        <h4 className="font-bold pb-1 px-1">Doodle a sunset</h4>
                        <p className="text-xs text-gray-400">06:45 PM</p>
                    </div>
                </div>

                <div className="flex bg-white  p-3 rounded-xl py-4 my-5 w-[32rem]  mx-auto">
                    <div id="icon">
                        <span className="material-symbols-outlined">check_circle</span>
                    </div>

                    <div id="text">
                        <h4 className="font-bold pb-1 px-1">Snap texture photos</h4>
                        <p className="text-xs text-gray-400">11:25 PM</p>
                    </div>
                </div>

                <div className="fixed bottom-0 right-0">
                    <button className="bg-blue-500 px-3 py-1 pt--5 text-5xl text-white font-bold rounded-xl " onClick={toggleHeader}>
                        +{showHeader}
                    </button>
                </div>


                <div className="bg-white rounded-3xl py-5 px-3 m-5 w-[32rem]  mx-auto">
                    <div className="flex justify-between py-2"><h2 className="font-bold text-xl" >Doodle a sunset </h2>
                        <p className='text-gray-400'>6:45 PM</p></div>
                    <p className='text-gray-400'>Lorem ipsum dolor sit amet  ipsam at similique maiores temporibus deleniti?</p>

                    <div className="text-center bg-blue-500 text-white py-3 rounded-2xl font-bold mt-8">
                        <button>Mark completed</button>
                    </div>
                </div>


                <div className="px-6 mt-5 bg-white py-5 rounded-2xl  shadow w-[32rem]  mx-auto">
                    <h4 className='font-semibold text-xl '>Create Todo</h4>
                    <input
                        type="text"
                        placeholder='Task Name'
                        className="w-full py-3 px-3 rounded-lg border border-gray  focus: outline-none shadow my-4 text-sm"
                    />
                    <textarea
                        placeholder='Add Description'
                        className="w-full  py-3 px-3 rounded-lg border border-gray  focus: outline-none shadow text-sm resize-none"
                    />

                    <div className="bg-blue-500 text-white text-center font-semibold text-xl py-2 rounded-xl mt-3 ">
                        <button>
                            create
                        </button>
                    </div>
                </div>
            </div>


        </>
    );
}

export default Body;
