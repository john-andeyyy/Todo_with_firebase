import React from 'react'

export default function Login() {
    return (
        <div className=''>



            <h1 className="flex text-3xl font-bold p-3 rounded-xl py-4 my-5 w-[31rem] mx-auto text-white">TODAY</h1>


            <div className="">
                <input
                    className=" flex w-[31rem] py-4 px-4 rounded-lg border border-gray focus:outline-none shadow  text-sm mx-auto
                        bg-[#222630]  outline-none  text-white transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"

                    name="text"
                    placeholder="Enter email"
                    type="text"
                />
            </div>

            <div className="py-5">

                <input
                    className="
                        flex w-[31rem] py-4 px-4 rounded-lg border border-gray focus:outline-none shadow text-sm mx-auto
                        bg-[#222630]  outline-none  text-white transition-colors duration-100 border-solid focus:border-[#596A95] border-[#2B3040]"

                    name="password"
                    placeholder="Enter password"
                    type="password"
                />
            </div>

            <div className="text-center  text-white rounded-2xl font-bold mt-8">
                <button className='py-3 bg-blue-500 rounded-lg w-24'>
                    Log in
                </button>
            </div>





        </div>
    )
}
