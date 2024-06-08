import React, { useState, useEffect } from 'react';
import Modal from './Modal';

export function Updateform({
    showUpdate, setShowUpdate, currentTodo,
    updatedTitle, setUpdatedTitle, updatedDescription, setUpdatedDescription,
    updateTodo, setTodos, todos
}) {
    const [isEditVisible, setIsEditVisible] = useState(false);

    const [count, setCount] = useState(40);

    // Update the count when the updatedTitle changes
    useEffect(() => {
        if (currentTodo) {
            setCount(40 - updatedTitle.length);
        }
    }, [updatedTitle]);

    const handleUpdateClick = () => {
        updateTodo();
    setIsEditVisible(false)
    };



    return (
        <Modal isVisible={showUpdate} handleClose={() => {
            setShowUpdate(false)
            setIsEditVisible(false)
        }}>
            {currentTodo && (
                <div>
                    <div className="flex justify-between py-2">
                        <div className="flex-1">
                            <h2 className="font-bold text-xl break-all">
                                Title: <span className='pl-4 font-medium'>{currentTodo.title}</span>
                            </h2>
                        </div>
                        <div className="flex-shrink-0">
                            <p className='text-gray-400'>{currentTodo.time}</p>
                        </div>
                    </div>
                    <p className='text-gray-400 pb-4'>Description: <br />
                        <span className='text-black pl-4  break-words capitalize font-medium'>

                            {/*  currentTodo.description if empty it show nothing to show */}
                            {currentTodo.description ? currentTodo.description : 'Nothing to show'}


                            {/* {currentTodo.description} */}


                        </span></p>


                    <div id="edit" className={isEditVisible ? '' : 'hidden'}>
                        <p className='text-gray-400'>{count} / 40</p>

                        <div id="Title" className='py-4'>
                            <p className='text-gray-400'>Title :</p>
                            <input

                                type="text"
                                maxLength="40"
                                value={updatedTitle}
                                onChange={(e) => {
                                    setUpdatedTitle(e.target.value);
                                    setCount(40 - e.target.value.length);
                                }}
                                className="w-full py-3 px-3 rounded-lg border border-gray focus:outline-none shadow  text-sm"
                            />

                        </div>

                        <p className='text-gray-400'>Description :</p>
                        <textarea
                            value={updatedDescription}
                            onChange={(e) => setUpdatedDescription(e.target.value)}
                            className="w-full py-3 px-3 rounded-lg border border-gray focus:outline-none shadow text-sm resize-none"
                        />

                        <div className="text-center bg-blue-500 text-white rounded-2xl font-bold mt-8">
                            <button className='w-full py-3' onClick={handleUpdateClick}>
                                Update
                            </button>
                        </div>

                        <button className=' p-5 px-5 font-semibold text-xl ' onClick={() => setIsEditVisible(!isEditVisible)}>
                            Back
                        </button>
                    </div>



                    <div className={isEditVisible ? 'hidden' : ''}>
                        <div className="text-center bg-blue-500 text-white rounded-2xl font-bold mt-8">
                            <button className='w-full py-3' onClick={() => setIsEditVisible(!isEditVisible)}>
                                {/* {isEditVisible ? 'Back' : 'Edit'} */}
                                Edit
                            </button>
                        </div>
                        <div className={`flex  pt-1 ${isEditVisible ? 'hidden' : ''}`}>
                            <button className='p-3 px-5 text-red-500  rounded-xl font-semibold ml-auto' onClick={() => {
                                setTodos(todos.filter(todo => todo.id !== currentTodo.id));
                                setShowUpdate(false);
                            }}>
                                Delete
                            </button>


                        </div>
                    </div>



                </div>
            )}
        </Modal>
    );
}
