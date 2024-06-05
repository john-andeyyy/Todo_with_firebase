import React, { useState } from 'react';

export function Updateform({ showUpdate, currentTodo, updatedTitle, setUpdatedTitle, setUpdatedDescription, setShowUpdate, updatedDescription, updateTodo }) {
    const [count, setCount] = useState(40);

    return (
        <>
            {showUpdate && currentTodo && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                    <div className="bg-white rounded-3xl py-5 px-4 m-5 w-[31rem] mx-auto">
                        <div className="flex justify-between py-2">
                            <div className="flex-1">
                                <h2 className="font-bold text-xl break-all">Title: <span className='pl-4 font-medium'>{currentTodo.title}</span></h2>
                            </div>
                            <div className="flex-shrink-0">
                                <p className='text-gray-400'>{currentTodo.time}</p>
                            </div>
                        </div>
                        <p className='text-gray-400'>{count} / 40</p>
                        <input
                            type="text"
                            maxLength="40"
                            value={updatedTitle}
                            onChange={(e) => {
                                setUpdatedTitle(e.target.value);
                                setCount(40 - e.target.value.length);
                            }}
                            className="w-full py-3 px-3 rounded-lg border border-gray focus:outline-none shadow my-4 text-sm"
                        />


                        <textarea
                            value={updatedDescription}
                            onChange={(e) => setUpdatedDescription(e.target.value)}
                            className="w-full py-3 px-3 rounded-lg border border-gray focus:outline-none shadow text-sm resize-none"
                        />

                        <div className="text-center bg-blue-500 text-white rounded-2xl font-bold mt-8">
                            <button className='w-full py-3' onClick={updateTodo}>
                                Update
                            </button>
                        </div>
                        <button className='text-red-500 py-2 text-xl font-semibold' onClick={() => setShowUpdate(false)}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
