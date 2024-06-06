import React from 'react';

function Modal({ children, isVisible, handleClose }) {
    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-blue-500 bg-opacity-50">
            <div className="relative bg-white rounded-3xl py-5 px-4 m-5 w-[31rem] mx-auto">
                <button
                    onClick={handleClose}
                    className="absolute top-0 right-0 mt-4 mr-4 text-red-500 text-2xl font-bold"
                    aria-label="Close"
                >
                    X
                </button>
                <div className='pt-6'>{children}</div>
            </div>
        </div>
    );
}

export default Modal;
