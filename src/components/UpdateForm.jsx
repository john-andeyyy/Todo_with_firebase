import React, { useState } from 'react';
import Modal from './Modal';

export function Updateform({ showUpdate, setShowUpdate, currentTodo, updatedTitle, setUpdatedTitle, setUpdatedDescription, 
    updatedDescription, updateTodo, setTodos, todos }) {

    const [count, setCount] = useState(40);

    return (
        <Modal isVisible={showUpdate} handleClose={() => setShowUpdate(false)} >
            {currentTodo && ( 
                //! if the currentTodo have a value it will have render all code inside the  ( )
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
                    <div className="flex justify-between pt-4">
                        <button className='p-3 px-5 text-white bg-red-500 rounded-xl font-medium' onClick={() => {
                            setTodos(todos.filter(todo => todo.id !== currentTodo.id));
                            setShowUpdate(false)
                        }}>
                            Delete
                        </button>
                    </div>

                </div>
            )}
        </Modal>
    );
}
